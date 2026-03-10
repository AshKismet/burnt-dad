import { Recipe } from "./types";

export const LOADING_MESSAGES = [
  "Mom went bowling...",
  "Dad's boss went golfing today...",
  "Dad probably needs to do laundry...",
  "The neighbor bought a new car...",
  "The grocery store is closing soon...",
  "The game is on in 20 minutes...",
  "Someone left the milk out again...",
  "The wifi password is on the fridge...",
  "Dad forgot what day it is...",
  "The dishwasher needs unloading...",
  "The dog looked at dad funny...",
  "Bella knocked something off the counter...",
  "Maxi ate dad's shoe again...",
  "The HOA sent another letter...",
  "Dad's fantasy team is 2 and 9...",
  "There's a weird smell in the garage...",
  "The minivan needs an oil change...",
  "Dad's boss cc'd HR on that email...",
  "The kids have a recital on Saturday...",
  "Dad googled 'how to boil water'...",
  "The remote is lost again...",
  "Someone used the last paper towel...",
  "The leftovers are... probably fine...",
  "Dad remembered to call his mom (he didn't)...",
  "The fish tank is making a noise...",
  "Three permission slips. Still unsigned...",
  "Dad's barber retired. It's fine...",
  "The car is almost definitely out of gas...",
  "Dad found a gray hair. Just one. So far...",
  "The sprinkler system is 'figured out'...",
];

export const DEMO_RECIPES: Recipe[] = [
  {
    name: "Bella's Rainbow Fruit Skewers",
    description: "Colorful, healthy, and totally no-cook! These fruit skewers are as fun to make as they are to eat.",
    difficulty: "easy", time_minutes: 15, servings: 4,
    allergen_warnings: "",
    ingredients: [
      {amount:"1 cup", item:"strawberries, hulled"},
      {amount:"1 cup", item:"green grapes"},
      {amount:"1 cup", item:"pineapple chunks"},
      {amount:"1 cup", item:"blueberries"},
      {amount:"1 cup", item:"mandarin orange segments"},
      {amount:"8", item:"wooden skewer sticks"},
      {amount:"\u00BD cup", item:"vanilla yogurt for dipping"}
    ],
    steps: [
      {instruction:"Wash all your fruit thoroughly under cool running water and pat dry with paper towels.", timer_seconds:0},
      {instruction:"Ask a grown-up to help hull the strawberries and cut the pineapple into bite-sized chunks.", timer_seconds:0},
      {instruction:"Thread the fruit onto each skewer in rainbow color order: strawberry, orange, pineapple, grape, blueberry. Repeat!", timer_seconds:0},
      {instruction:"Arrange your skewers on a plate and serve with vanilla yogurt on the side for dipping.", timer_seconds:0}
    ],
    fun_tip: "Bella (the cat) told me this trick. I don't know how she knows about cooking but here we are. \u{1F308}",
    cookbook_teaser: "This recipe appears in Chapter 1 of the Burnt Dad Cookbook: 'Things Even I Can't Mess Up'!"
  },
  {
    name: "Maxi's Cheesy Quesadillas",
    description: "Crispy, melty, and ready in minutes \u2014 Maxi's favourite after a big run in the park!",
    difficulty: "easy", time_minutes: 20, servings: 4,
    allergen_warnings: "Contains: dairy, gluten",
    ingredients: [
      {amount:"4", item:"large flour tortillas"},
      {amount:"2 cups", item:"shredded cheddar cheese"},
      {amount:"\u00BD cup", item:"canned black beans, rinsed"},
      {amount:"\u00BD cup", item:"frozen corn, thawed"},
      {amount:"\u00BC cup", item:"mild salsa"},
      {amount:"2 tbsp", item:"butter"},
      {amount:"\u00BD cup", item:"sour cream to serve"}
    ],
    steps: [
      {instruction:"Mix the black beans, corn, and a spoonful of salsa together in a small bowl.", timer_seconds:0},
      {instruction:"Sprinkle a layer of cheese over one half of a tortilla. Add a spoonful of the bean mixture. Fold the tortilla in half.", timer_seconds:0},
      {instruction:"Ask a grown-up to melt \u00BD tbsp of butter in a pan over medium heat. Place your folded quesadilla in the pan.", timer_seconds:0},
      {instruction:"Cook for 3 minutes until the bottom is golden. Carefully flip and cook the other side for 2\u20133 more minutes.", timer_seconds:180},
      {instruction:"Slide onto a cutting board, let cool for 1 minute, then cut into triangles. Serve with sour cream and salsa!", timer_seconds:60}
    ],
    fun_tip: "Maxi tried to eat one before it was done. Don't be like Maxi. Let it cool first. \u{1F9C0}",
    cookbook_teaser: "From the Burnt Dad Cookbook Vol. 2: 'We Ate It and Nobody Called 911'!"
  },
  {
    name: "Bella's Cinnamon French Toast",
    description: "Golden, custardy, and smelling like a bakery \u2014 this breakfast makes every morning feel like a celebration!",
    difficulty: "medium", time_minutes: 25, servings: 4,
    allergen_warnings: "Contains: gluten, dairy, eggs",
    ingredients: [
      {amount:"8 slices", item:"thick-cut bread (brioche works great)"},
      {amount:"4", item:"large eggs"},
      {amount:"\u00BD cup", item:"whole milk"},
      {amount:"1 tsp", item:"vanilla extract"},
      {amount:"1 tsp", item:"ground cinnamon"},
      {amount:"1 tbsp", item:"sugar"},
      {amount:"2 tbsp", item:"butter"},
      {amount:"maple syrup and powdered sugar", item:"to serve"}
    ],
    steps: [
      {instruction:"Crack the eggs into a wide, shallow bowl. Add the milk, vanilla, cinnamon, and sugar. Whisk until fully combined and a little frothy.", timer_seconds:0},
      {instruction:"Dip each slice of bread into the egg mixture, letting it soak for about 15 seconds per side so it absorbs well.", timer_seconds:0},
      {instruction:"Ask a grown-up to melt butter in a large skillet over medium heat until it starts to foam.", timer_seconds:0},
      {instruction:"Cook the soaked bread slices for 3\u20134 minutes per side until deep golden brown.", timer_seconds:240},
      {instruction:"Serve immediately with maple syrup, a dusting of powdered sugar, and fresh berries if you have them!", timer_seconds:0}
    ],
    fun_tip: "I burned the first batch. And the second. Third batch was perfect. You're welcome for the data. \u{1F35E}",
    cookbook_teaser: "Featured in the Burnt Dad Breakfast Chapter: 'Morning Chaos with a Side of Syrup'!"
  },
  {
    name: "Maxi's Homemade Pizza",
    description: "Build your own pizza masterpiece! Maxi loves piling on toppings \u2014 the messier, the better.",
    difficulty: "medium", time_minutes: 35, servings: 4,
    allergen_warnings: "Contains: gluten, dairy",
    ingredients: [
      {amount:"1", item:"pre-made pizza dough ball (store-bought is fine!)"},
      {amount:"\u00BD cup", item:"pizza sauce"},
      {amount:"2 cups", item:"shredded mozzarella"},
      {amount:"\u00BD cup", item:"pepperoni slices"},
      {amount:"\u00BD cup", item:"bell pepper, thinly sliced"},
      {amount:"\u00BC cup", item:"mushrooms, sliced"},
      {amount:"1 tbsp", item:"olive oil"},
      {amount:"1 tsp", item:"dried oregano"}
    ],
    steps: [
      {instruction:"Ask a grown-up to preheat the oven to 220\u00B0C / 425\u00B0F and place a baking sheet inside to heat up.", timer_seconds:0},
      {instruction:"On a lightly floured surface, stretch the dough into a rough circle about the size of your baking sheet. Don't worry if it's not perfect!", timer_seconds:0},
      {instruction:"Brush the dough lightly with olive oil, then spread the pizza sauce evenly, leaving a 1-inch border for the crust.", timer_seconds:0},
      {instruction:"Scatter the mozzarella all over, then add your toppings however you like! Sprinkle oregano on top.", timer_seconds:0},
      {instruction:"Carefully slide onto the hot baking sheet. Bake for 12\u201315 minutes until crust is golden and cheese is bubbling.", timer_seconds:780},
      {instruction:"Let cool for 5 minutes before slicing \u2014 the cheese is VERY hot straight from the oven!", timer_seconds:300}
    ],
    fun_tip: "The smoke alarm going off means it's almost done. That's just how pizza works in this house. \u{1F355}",
    cookbook_teaser: "Part of the Burnt Dad Pizza Night chapter: 'Round Food, Square Effort'!"
  },
  {
    name: "Bella's Chocolate Mug Cake",
    description: "A whole cake in a mug, in under 5 minutes! Bella's secret midnight snack (shhh \u{1F92B}).",
    difficulty: "easy", time_minutes: 10, servings: 1,
    allergen_warnings: "Contains: gluten, dairy, eggs",
    ingredients: [
      {amount:"4 tbsp", item:"all-purpose flour"},
      {amount:"4 tbsp", item:"sugar"},
      {amount:"2 tbsp", item:"cocoa powder"},
      {amount:"1", item:"large egg"},
      {amount:"3 tbsp", item:"milk"},
      {amount:"3 tbsp", item:"vegetable oil"},
      {amount:"2 tbsp", item:"chocolate chips"},
      {amount:"pinch", item:"of salt"}
    ],
    steps: [
      {instruction:"Add the flour, sugar, cocoa powder, and salt to a large microwave-safe mug. Stir the dry ingredients together with a fork.", timer_seconds:0},
      {instruction:"Add the egg, milk, and oil to the mug. Mix well until smooth with no lumps \u2014 this takes about 30 seconds of stirring!", timer_seconds:0},
      {instruction:"Stir in the chocolate chips. Give it one last mix.", timer_seconds:0},
      {instruction:"Microwave on high for 60\u201390 seconds. The cake will rise up in the mug \u2014 this is totally normal! Stop when the top is just set.", timer_seconds:90},
      {instruction:"Let cool for 1 minute (it's VERY hot inside!), then enjoy straight from the mug with a spoon. Top with ice cream if you like!", timer_seconds:60}
    ],
    fun_tip: "Bella watched me make this 4 times in one night for 'research purposes'. That's my story. \u{1F36B}",
    cookbook_teaser: "From Burnt Dad's Dessert Section: '5-Minute Fixes for When You Forgot Dessert'!"
  },
  {
    name: "Maxi's Monster Smoothie",
    description: "Green, thick, and packed with secret vegetables that taste like a tropical holiday. Even Maxi couldn't tell there was spinach in it!",
    difficulty: "easy", time_minutes: 10, servings: 2,
    allergen_warnings: "",
    ingredients: [
      {amount:"2 cups", item:"fresh spinach (don't worry \u2014 you can't taste it!)"},
      {amount:"1", item:"ripe banana, peeled and frozen"},
      {amount:"1 cup", item:"mango chunks (fresh or frozen)"},
      {amount:"\u00BD cup", item:"pineapple chunks"},
      {amount:"1 cup", item:"coconut milk or orange juice"},
      {amount:"1 tbsp", item:"honey (optional)"},
      {amount:"handful", item:"of ice cubes"}
    ],
    steps: [
      {instruction:"Add the spinach and coconut milk to the blender first. Blend until the spinach is fully smooth \u2014 no green chunks!", timer_seconds:30},
      {instruction:"Add the frozen banana, mango, and pineapple. Put the lid on tightly!", timer_seconds:0},
      {instruction:"Blend on high for 45\u201360 seconds until completely smooth and creamy.", timer_seconds:60},
      {instruction:"Taste it \u2014 add honey if you want it sweeter, then blend for 5 more seconds.", timer_seconds:0},
      {instruction:"Pour into glasses and serve immediately with a fun straw. Watch your friends' faces when you tell them it has spinach! \u{1F604}", timer_seconds:0}
    ],
    fun_tip: "Tell the kids it's a 'monster smoothie' and they'll never ask what's in it. Works every time. \u{1F34C}",
    cookbook_teaser: "From Burnt Dad's Drinks Chapter: 'Liquids I Have Not Yet Spilled (On the Ceiling)'!"
  }
];
