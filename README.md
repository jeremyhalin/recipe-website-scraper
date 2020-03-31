# recipe-scrapper
---

![npm](https://img.shields.io/npm/v/recipe-scrapper?style=flat-square)
![NPM](https://img.shields.io/npm/l/recipe-scrapper?style=flat-square)

Get a recipe in object format from an URL.

Websites currently supported :
- [Marmiton](https://www.marmiton.org/) 🇫🇷

## Install
```bash
$ npm install recipe-scrapper
```

## Usage
```javascript
import scrapRecipe from '@recipe-scrapper';

const recipeUrl = "https://www.marmiton.org/recettes/recette_buche-roulee-mangue-citron-vert-au-nutella_382802.aspx";
const recipeObject = scrapRecipe(recipeUrl);

recipeObject = {
    { url:
       'https://www.marmiton.org/recettes/recette_buche-roulee-mangue-citron-vert-au-nutella_382802.aspx',
      title: 'Bûche roulée mangue citron vert au Nutella®',
      steps:
       [ 'Pour la préparation du biscuit.\nDans un saladier au bain-marie, mélanger les jaunes d’œufs avec le sucre à l’aide d’un batteur électrique jusqu’à ce que la préparation commence à épaissir.\nIncorporer la farine et le beurre fondu, mélanger à l’aide du batteur électrique.\nRetirer le saladier du bain marie.',
         'Battre les blancs d’œufs en neige et les incorporer délicatement à la pâte, mélanger avec une grande cuillère.',
         'Préchauffer le four à 180°C (thermostat 6).\nTapisser une plaque de 30x40cm à pâtisserie de papier sulfurisé. \nEtaler la pâte sur la plaque puis lisser à l’aide de la spatule.\nEnfourner pendant 10 à 12 minutes.',
         'Laisser refroidir sur une autre plaque et poser un torchon humidifié.',
         'Pour la mousse.\nDans une casserole, mélanger les jaunes avec 70 g de sucre, avec un fouet.\nAjouter la maïzena et mélanger le tout.\nVerser le jus des 2 citrons et cuire à feu doux, sans cesser de remuer jusqu’à épaississement.\nAjouter les zestes d\'un citron vert puis la gélatine essorée et mélanger.\nIncorporer le mascarpone à la crème au citron et mélanger.',
         'Battre les blancs d’œufs en neige avec un batteur électrique puis incorporer le reste du sucre tout en continuant à battre.\nIncorporer délicatement à la crème mascarpone/citron, mélanger avec une grande cuillère',
         'Peler puis détailler la mangue en petits dés',
         'Montage de la bûche.\nDécoller le biscuit et le placer sur du papier film à plat.\nEtaler d’abord une couche de Nutella, puis la crème au citron, à l’aide d’une spatule.\nParsemer les dés de mangue et enrouler le biscuit délicatement.\nRéenrouler le biscuit dans le film et laisser poser.\nEnlever le film et couper les extrémités du biscuit roulé.',
         'Décor.\nA l’aide d’une poche à douille, faire des pointes avec du Nutella®️.\nAjouter des dés de mangue.\nSaupoudrer de copeaux de noix de coco.\nRéserver au frais jusqu’à la 
dégustation.' ],
      ingredients:
         { quantity: 90, ingredient: 'sucre', unit: 'g' },
         { quantity: 75, ingredient: 'farine', unit: 'g' },
         { quantity: 45, ingredient: 'beurre', unit: 'g' },
         { quantity: 1, ingredient: 'Nutella®', unit: null },
         { quantity: 1, ingredient: 'Coco en poudre', unit: null },
         { quantity: 2, ingredient: 'jaunes d\'oeuf', unit: null },
         { quantity: 100, ingredient: 'sucre', unit: 'g' },
         { quantity: 2, ingredient: 'gélatine', unit: 'feuilles' },
         { quantity: 2, ingredient: 'citrons verts', unit: null },
         { quantity: 1, ingredient: 'maïzena', unit: 'cuillère à café' },
         { quantity: 250, ingredient: 'mascarpone', unit: 'g' },
         { quantity: 1, ingredient: 'mangue', unit: null } ],
      preparation_time: 40,
      peoples: 6 }
}
```