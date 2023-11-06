let counter = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');
const decrement = () => {
    counterValue.textContent = counter -= 1;
};
const increment = () => {
    counterValue.textContent = counter += 1;
};
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
