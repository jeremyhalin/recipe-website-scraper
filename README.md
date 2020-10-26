# recipe-website-scraper

![npm](https://img.shields.io/npm/v/recipe-website-scraper?style=flat-square)
![NPM](https://img.shields.io/npm/l/recipe-website-scraper?style=flat-square)

Get a recipe in object format from an URL.

Websites currently supported :

- [Marmiton](https://www.marmiton.org/) 🇫🇷

## Install

```bash
npm install recipe-website-scraper
```

## Usage

```javascript
const RecipeScraper = require('recipe-website-scraper');

const recipeUrl = "https://www.marmiton.org/recettes/recette_buche-roulee-mangue-citron-vert-au-nutella_382802.aspx";
const recipeObject = await RecipeScraper.scrap(recipeUrl);

    recipeObject {
      url: 'https://www.marmiton.org/recettes/recette_buche-roulee-mangue-citron-vert-au-nutella_382802.aspx',
      title: 'Bûche roulée mangue citron vert au Nutella®',
      steps: [
        'Pour la préparation du biscuit.\n' +
          'Dans un saladier au bain-marie, mélanger les jaunes d’œufs avec le sucre à l’aide d’un batteur électrique jusqu’à ce que la préparation commence à épaissir.\n' +
          'Incorporer la farine et le beurre fondu, mélanger à l’aide du batteur électrique.\n' +
          'Retirer le saladier du bain marie.',
        'Battre les blancs d’œufs en neige et les incorporer délicatement à la pâte, mélanger avec une grande cuillère.',
        'Préchauffer le four à 180°C (thermostat 6).\n' +
          'Tapisser une plaque de 30x40cm à pâtisserie de papier sulfurisé. \n' +
          'Etaler la pâte sur la plaque puis lisser à l’aide de la spatule.\n' +
          'Enfourner pendant 10 à 12 minutes.',
        'Laisser refroidir sur une autre plaque et poser un torchon humidifié.',
        'Pour la mousse.\n' +
          'Dans une casserole, mélanger les jaunes avec 70 g de sucre, avec un fouet.\n' +
          'Ajouter la maïzena et mélanger le tout.\n' +
          'Verser le jus des 2 citrons et cuire à feu doux, sans cesser de remuer jusqu’à épaississement.\n' +
          "Ajouter les zestes d'un citron vert puis la gélatine essorée et mélanger.\n" +
          'Incorporer le mascarpone à la crème au citron et mélanger.',
        'Battre les blancs d’œufs en neige avec un batteur électrique puis incorporer le reste du sucre tout en continuant à battre.\n' +
          'Incorporer délicatement à la crème mascarpone/citron, mélanger avec une grande cuillère',
        'Peler puis détailler la mangue en petits dés',
        'Montage de la bûche.\n' +
          'Décoller le biscuit et le placer sur du papier film à plat.\n' +
          'Etaler d’abord une couche de Nutella, puis la crème au citron, à l’aide d’une spatule.\n' +
          'Parsemer les dés de mangue et enrouler le biscuit délicatement.\n' +
          'Réenrouler le biscuit dans le film et laisser poser.\n' +
          'Enlever le film et couper les extrémités du biscuit roulé.',
        'Décor.\n' +
          'A l’aide d’une poche à douille, faire des pointes avec du Nutella®️.\n' +
          'Ajouter des dés de mangue.\n' +
          'Saupoudrer de copeaux de noix de coco.\n' +
          'Réserver au frais jusqu’à la dégustation.'
      ],
      ingredients: [
        { quantity: 3, ingredient: 'oeufs', unit: null },
        { quantity: 90, ingredient: 'sucre', unit: 'g' },
        { quantity: 75, ingredient: 'farine', unit: 'g' },
        { quantity: 45, ingredient: 'beurre', unit: 'g' },
        { quantity: 1, ingredient: 'Nutella®', unit: null },
        { quantity: 1, ingredient: 'Coco en poudre', unit: null },
        { quantity: 2, ingredient: "jaunes d'oeuf", unit: null },
        { quantity: 100, ingredient: 'sucre', unit: 'g' },
        { quantity: 2, ingredient: 'gélatine', unit: 'feuilles' },
        { quantity: 2, ingredient: 'citrons verts', unit: null },
        { quantity: 1, ingredient: 'maïzena', unit: 'cuillère à café' },
        { quantity: 250, ingredient: 'mascarpone', unit: 'g' },
        { quantity: 1, ingredient: 'mangue', unit: null }
      ],
      baking_time: 10,
      preparation_time: 40,
      quantity: { value: 6, type: 'personnes' }
    }
```

## Test

```bash
npm run test
```

## Updating package version

```bash
npm version <version>

# Publishing new update
npm publish
```
