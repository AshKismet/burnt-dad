export interface Ingredient {
  amount: string;
  item: string;
}

export interface Step {
  instruction: string;
  timer_seconds: number;
}

export interface Recipe {
  name: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  time_minutes: number;
  servings: number;
  allergen_warnings: string;
  ingredients: Ingredient[];
  steps: Step[];
  fun_tip: string;
  cookbook_teaser: string;
}
