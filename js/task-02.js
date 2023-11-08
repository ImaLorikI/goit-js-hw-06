const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.getElementById("ingredients");
const bbb = ingredients.forEach((element) => { 
  const bb = document.createElement("li"); 
  bb.textContent = element;
  list.append(bb); 
})
