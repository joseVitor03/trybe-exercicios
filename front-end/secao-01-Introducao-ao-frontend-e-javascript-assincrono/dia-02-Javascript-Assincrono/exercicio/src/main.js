import Swall from 'sweetalert2';
const btnRandom = document.querySelector('#btn');
const nameHero = document.querySelector('#name');
const img = document.querySelector('img')

    btnRandom.addEventListener('click', (event) => {
        const randomNumber = Math.floor(Math.random() * (1000 - 1) + 1)
        event.preventDefault();

        Promise.all([
            fetch(`https://akabab.github.io/superhero-api/api/id/${randomNumber}.json`)
            .then(response => response.json())
        ])
            .then(heroes => heroes.map((hero) => {
                img.src = hero.images.md;
                nameHero.innerText = hero.name
            }))
            .catch((error) => Swall.fire({
                title: 'Hero not found',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Cool',
            }))
        })
    


