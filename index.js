const fetch = require("node-fetch");
const HTMLParser = require("node-html-parser");

async function scrapRecipe(url) {
  if (typeof url !== "string") throw new Error("url param must be a string");
  if (!validURL(url)) throw new Error("url param must be a valid URL");

  const response = await fetch(url);
  const html = await response.text();

  const root = HTMLParser.parse(html);

  const steps = [];
  root
    .querySelectorAll(
      ".recipe-preparation__list .recipe-preparation__list__item"
    )
    .forEach((liElement) => {
      steps.push(liElement.text.trim());
    });

  const ingredients = [];
  root.querySelectorAll(".recipe-ingredients__list").forEach((olElement) => {
    olElement
      .querySelectorAll(".recipe-ingredients__list__item")
      .forEach((liElement) => {
        const quantityText = liElement
          .querySelector(".recipe-ingredient-qt")
          .text.trim();
        const quantity = quantityText.length > 0 ? parseInt(quantityText) : 1;
        const unitAndIngredient = liElement
          .querySelector(".ingredient")
          .text.trim();
        const indexDe = unitAndIngredient.indexOf(" de ");
        let unit = null;
        let ingredient = unitAndIngredient;
        if (indexDe !== -1) {
          unit = unitAndIngredient.slice(0, indexDe).trim();
          ingredient = unitAndIngredient.slice(indexDe + 4).trim();
        }
        ingredients.push({
          quantity: quantity,
          ingredient: ingredient,
          unit: unit,
        });
      });
  });

  let baking_time = null;
  let preparation_time = null;
  let quantityValue = null;
  let quantityType = null;

  const regex = /([1-9])\w+/g;
  const bakingTime = root
    .querySelector(
      ".recipe-infos__timmings__cooking .recipe-infos__timmings__value"
    )
    .text.trim()
    .match(regex);
  const preparationTime = root
    .querySelector(".recipe-infos__timmings__preparation")
    .text.trim()
    .match(regex);

  if (bakingTime) {
    baking_time = parseInt(bakingTime[0]);
  }
  if (preparationTime) {
    preparation_time = parseInt(preparationTime[0]);
  }

  const quantityWrapper = root.querySelector(".recipe-infos__quantity");
  if (quantityWrapper) {
    const quantityTypeWrapper = quantityWrapper.querySelector(
      ".recipe-infos__item-title"
    );
    const quantityValueWrapper = quantityWrapper.querySelector(
      ".recipe-infos__quantity__value"
    );

    if (quantityTypeWrapper) {
      quantityType = quantityTypeWrapper.text.trim();
    }

    if (quantityValueWrapper) {
      quantityValue = parseInt(quantityValueWrapper.text.trim());
    }
  }

  return {
    url,
    title: root.querySelector(".content-recipe .main-title").text.trim(),
    steps,
    ingredients,
    baking_time,
    preparation_time,
    quantity: {
      value: quantityValue,
      type: quantityType,
    },
  };
}

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

exports.scrap = scrapRecipe;
