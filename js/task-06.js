//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');
const inputLengthNumber = Number(inputLength);
console.log(inputLengthNumber);
input.addEventListener('blur', InputBlur);
function InputBlur(event) {
  if (event.currentTarget.value.length === inputLengthNumber) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
