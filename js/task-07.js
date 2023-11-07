const font = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
font.addEventListener('input', fontSize);
function fontSize(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}
