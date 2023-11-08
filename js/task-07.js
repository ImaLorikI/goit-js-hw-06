const font = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = 55 + 'px';
font.addEventListener('input', fontSize);
function fontSize(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}
