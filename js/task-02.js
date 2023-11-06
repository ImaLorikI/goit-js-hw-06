const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const output = ingredients.map((ingredients) => `<li class="item">${ingredients}</li>`).join("");
ingredientsList.innerHTML = output;
