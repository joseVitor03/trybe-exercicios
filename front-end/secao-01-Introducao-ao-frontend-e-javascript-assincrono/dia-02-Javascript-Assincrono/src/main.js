const dogRandom = document.querySelector('#dog');
const img = document.querySelector('img');
const catRandom = document.querySelector('#cat');
const animal = document.querySelector('#random');

dogRandom.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then((dog) => {
        img.src = dog.message
    })
});

catRandom.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(response => response.json())
    .then((cats) => cats.map((cat) => img.src = cat.url))
})

animal.addEventListener('click', (event) => {
    event.preventDefault();
    Promise.any([
        fetch(`https://dog.ceo/api/breeds/image/random`),
        fetch(`https://api.thecatapi.com/v1/images/search`),
    ])
    .then(response => response.json())
    .then(data => {
        const result = data.message || data[0].url;
        img.src = result;
    })
})