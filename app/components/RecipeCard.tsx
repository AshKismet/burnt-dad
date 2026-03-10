"use client";

import { Recipe } from "../lib/types";
import { scaleAmount } from "../lib/recipe-utils";
import StepTimer from "./StepTimer";

interface RecipeCardProps {
  recipe: Recipe;
  servings: number;
  baseServings: number;
  onServingsChange: (delta: number) => void;
}

const DIFF_BADGE: Record<string, { cls: string; label: string }> = {
  easy: { cls: "nc-badge-easy", label: "Easy" },
  medium: { cls: "nc-badge-medium", label: "Medium" },
  hard: { cls: "nc-badge-hard", label: "Hard" },
};

export default function RecipeCard({ recipe, servings, baseServings, onServingsChange }: RecipeCardProps) {
  const scale = servings / baseServings;
  const diff = DIFF_BADGE[recipe.difficulty];

  return (
    <div className="recipe-area">
      <div className="notecard">
        <div className="notecard-tape" />
        <div className="nc-title">{recipe.name}</div>
        <div className="nc-divider" />
        <div className="nc-desc">{recipe.description}</div>
        <div className="nc-badges">
          {diff && <span className={`nc-badge ${diff.cls}`}>{diff.label}</span>}
          <span className="nc-badge nc-badge-time">{"\u23F1"} {recipe.time_minutes} min</span>
          <span className="nc-badge nc-badge-srv">Serves {recipe.servings}</span>
        </div>
        {recipe.allergen_warnings && (
          <div className="nc-allergy">{"\u26A0"} {recipe.allergen_warnings}</div>
        )}
        <div className="nc-scaler">
          <span className="nc-scaler-label">Scale servings</span>
          <button className="nc-scaler-btn" onClick={() => onServingsChange(-1)}>{"\u2212"}</button>
          <span className="nc-scaler-count">{servings}</span>
          <button className="nc-scaler-btn" onClick={() => onServingsChange(1)}>+</button>
        </div>
        <div className="nc-two-col">
          <div>
            <div className="nc-col-head">Ingredients</div>
            <ul className="nc-ingredients">
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>
                  <span className="nc-ing-amount">{scaleAmount(ing.amount, scale)}</span>
                  {ing.item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="nc-col-head">Steps</div>
            <ul className="nc-steps">
              {recipe.steps.map((step, i) => (
                <li key={i} className="nc-step">
                  <div className="nc-step-num">Step {i + 1}</div>
                  <div className="nc-step-text">{step.instruction}</div>
                  {step.timer_seconds > 0 && <StepTimer totalSeconds={step.timer_seconds} />}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="nc-tip">
          <div className="nc-tip-label">{"\u2726"} Chef&apos;s Tip</div>
          <div className="nc-tip-text">{recipe.fun_tip}</div>
        </div>
        {recipe.cookbook_teaser && (
          <div className="nc-teaser">{"\uD83D\uDCDA"} {recipe.cookbook_teaser}</div>
        )}
        <div className="nc-footer">Burnt Dad {"\u00B7"} A Magic Sun LLC Production {"\u00B7"} burntdad.com</div>
      </div>
    </div>
  );
}
