// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");


hrefLink.addEventListener('click', (e) => {
  e.preventDefault()
});


inputCheckbox.addEventListener('click', () => {
alert('s')
})

inputText.addEventListener('keypress', (event) => {
  const character = event.key;
  if (character !== 'a') {
    event.preventDefault();
  }
})