const RecipeScraper = require("../index");

const marmitonRecipeUrl =
  "https://www.marmiton.org/recettes/recette_buche-roulee-mangue-citron-vert-au-nutella_382802.aspx";

test("Get recipe from Marmiton", async () => {
  const recipe = await RecipeScraper.scrap(marmitonRecipeUrl);
  expect(recipe.url).toBe(marmitonRecipeUrl);
  expect(recipe.title).toBe("Bûche roulée mangue citron vert au Nutella®");
  expect(recipe.quantity.value).toBe(6);
  expect(recipe.preparation_time).toBe(40);
  expect(recipe.baking_time).toBe(10);
});
