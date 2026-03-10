"use client";

import { useState, useCallback } from "react";
import { Recipe } from "../lib/types";
import { DEMO_RECIPES } from "../lib/constants";
import PetMascots from "./PetMascots";
import Header from "./Header";
import RecipeForm from "./RecipeForm";
import LoadingSpinner from "./LoadingSpinner";
import RecipeCard from "./RecipeCard";
import BookCta from "./BookCta";
import MerchSection from "./MerchSection";

export default function BurntDadApp() {
  const [servings, setServings] = useState(4);
  const [baseServings, setBaseServings] = useState(4);
  const [difficulty, setDifficulty] = useState("easy");
  const [allergies, setAllergies] = useState<string[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showBookCta, setShowBookCta] = useState(false);

  const handleServingsChange = useCallback(
    (delta: number) => {
      setServings((s) => Math.max(1, Math.min(20, s + delta)));
    },
    []
  );

  const handleAllergyToggle = useCallback((val: string) => {
    setAllergies((prev) =>
      prev.includes(val) ? prev.filter((a) => a !== val) : [...prev, val]
    );
  }, []);

  const handleCook = useCallback(
    async (meal: string) => {
      setBaseServings(servings);
      setIsLoading(true);
      setShowBookCta(false);

      await new Promise((r) => setTimeout(r, 1200));

      let recipe: Recipe | null = null;
      try {
        const allergyNote = allergies.length
          ? `Must be: ${allergies.join(", ")}.`
          : "";
        const prompt = `You are Magic Sun Kitchen, a fun cooking app for kids of all ages.
Generate a ${difficulty} difficulty recipe for: "${meal}". Servings: ${servings}. ${allergyNote}
Respond ONLY with valid JSON, no markdown:
{"name":"","description":"","difficulty":"${difficulty}","time_minutes":0,"servings":${servings},"allergen_warnings":"","ingredients":[{"amount":"","item":""}],"steps":[{"instruction":"","timer_seconds":0}],"fun_tip":"","cookbook_teaser":""}
Rules: steps simple and safe for kids; easy=minimal knife work; be encouraging and fun.`;

        const res = await fetch("/api/recipe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1000,
            messages: [{ role: "user", content: prompt }],
          }),
        });
        const data = await res.json();
        const text = data.content
          .map((b: { text?: string }) => b.text || "")
          .join("");
        recipe = JSON.parse(text.replace(/```json|```/g, "").trim());
      } catch {
        const lower = meal.toLowerCase();
        recipe =
          DEMO_RECIPES.find(
            (r) =>
              r.name.toLowerCase().includes(lower) ||
              (lower.includes("pizza") && r.name.includes("Pizza")) ||
              (lower.includes("smoothie") && r.name.includes("Smoothie")) ||
              (lower.includes("cake") && r.name.includes("Cake")) ||
              (lower.includes("toast") && r.name.includes("Toast")) ||
              (lower.includes("quesadilla") && r.name.includes("Quesadilla")) ||
              (lower.includes("fruit") && r.name.includes("Fruit"))
          ) || DEMO_RECIPES[Math.floor(Math.random() * DEMO_RECIPES.length)];
        recipe = { ...recipe, servings };
      }

      setCurrentRecipe(recipe);
      setIsLoading(false);
      setShowBookCta(true);
    },
    [servings, difficulty, allergies]
  );

  return (
    <>
      <div className="stars" />
      <div className="sun-container">
        <div className="pixel-sun" />
      </div>

      <div className="app">
        <PetMascots />
        <Header />

        <RecipeForm
          servings={servings}
          difficulty={difficulty}
          allergies={allergies}
          isLoading={isLoading}
          onServingsChange={handleServingsChange}
          onDifficultyChange={setDifficulty}
          onAllergyToggle={handleAllergyToggle}
          onCook={handleCook}
        />

        {isLoading && <LoadingSpinner />}

        {!isLoading && currentRecipe && (
          <RecipeCard
            recipe={currentRecipe}
            servings={servings}
            baseServings={baseServings}
            onServingsChange={handleServingsChange}
          />
        )}

        {showBookCta && !isLoading && <BookCta />}

        <MerchSection />

        <footer>
          <div>&copy; 2026 <span>BURNT DAD</span> {"\u00B7"} A <span>MAGIC SUN LLC</span> PRODUCTION</div>
          <div>BOOKS {"\u00B7"} PUBLISHING {"\u00B7"} FILMS {"\u00B7"} TELEVISION</div>
          <div style={{ marginTop: 6, fontSize: 6 }}>ALWAYS COOK WITH A GROWN-UP NEARBY {"\u2665"} {"\u00B7"} NO DADS WERE SERIOUSLY HARMED</div>
        </footer>
      </div>
    </>
  );
}
