"use client";

import { useRef } from "react";

interface RecipeFormProps {
  servings: number;
  difficulty: string;
  allergies: string[];
  isLoading: boolean;
  onServingsChange: (delta: number) => void;
  onDifficultyChange: (val: string) => void;
  onAllergyToggle: (val: string) => void;
  onCook: (meal: string) => void;
}

const DIFFICULTIES = ["easy", "medium", "hard"];
const ALLERGIES = [
  { val: "gluten-free", label: "GLUTEN FREE" },
  { val: "dairy-free", label: "DAIRY FREE" },
  { val: "nut-free", label: "NUT FREE" },
  { val: "egg-free", label: "EGG FREE" },
  { val: "vegan", label: "VEGAN" },
];

export default function RecipeForm({
  servings,
  difficulty,
  allergies,
  isLoading,
  onServingsChange,
  onDifficultyChange,
  onAllergyToggle,
  onCook,
}: RecipeFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleCook() {
    const meal = inputRef.current?.value.trim();
    if (!meal) {
      const inp = inputRef.current!;
      inp.style.borderColor = "var(--red)";
      inp.focus();
      setTimeout(() => (inp.style.borderColor = "var(--teal)"), 1000);
      return;
    }
    onCook(meal);
  }

  return (
    <div className="pixel-box">
      <div className="section-label">WHAT ARE WE ATTEMPTING TO COOK?</div>
      <input
        className="meal-input"
        ref={inputRef}
        type="text"
        placeholder="pasta, tacos, anything..."
        maxLength={80}
        autoComplete="off"
        onKeyDown={(e) => e.key === "Enter" && handleCook()}
      />

      <div className="filters-row">
        <div className="filter-group">
          <span className="filter-label">{"\u2694"} DIFFICULTY</span>
          <div className="filter-pills">
            {DIFFICULTIES.map((d) => (
              <button
                key={d}
                className={`pill${difficulty === d ? " active" : ""}`}
                onClick={() => onDifficultyChange(d)}
              >
                {d.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-label">{"\uD83D\uDEAB"} ALLERGY FILTERS</span>
          <div className="filter-pills">
            {ALLERGIES.map((a) => (
              <button
                key={a.val}
                className={`pill${allergies.includes(a.val) ? " active-red" : ""}`}
                onClick={() => onAllergyToggle(a.val)}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="servings-row">
        <span className="servings-label">{"\uD83D\uDC7E"} SERVINGS</span>
        <button className="pixel-btn" onClick={() => onServingsChange(-1)}>{"\u25C0"}</button>
        <span className="servings-count">{servings}</span>
        <button className="pixel-btn" onClick={() => onServingsChange(1)}>{"\u25B6"}</button>
      </div>

      <button className="cook-btn" disabled={isLoading} onClick={handleCook}>
        {"\uD83D\uDD25"} LET&apos;S DO THIS (PROBABLY) {"\uD83D\uDD25"}
      </button>
    </div>
  );
}
