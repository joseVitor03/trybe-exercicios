// arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

// const ondeEstaVoce = console.log(document.getElementById('where-are-you').parentElement);
// const primeiroFIlho = console.log(document.querySelector('#first-child-of-child').innerText = 'texto teste');
// const parente = console.log(document.getElementById('parent').firstChild)


// const novoEl = document.createElement('li');

// novoEl.innerText = 'novo texto para texte';

// const parent = document.querySelector('#parent');

// parent.appendChild(novoEl)

// const irmao = document.createElement('section')
// irmao.id = 'irmaoP'
// irmao.innerText = 'salve';

// const pai = document.querySelector('#pai');

// pai.appendChild(irmao);

// const filhoOndeVoce = document.createElement('p')
// filhoOndeVoce.innerText = 'text';

// const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta').appendChild(filhoOndeVoce)

// const filhoDOprimeiroF = document.createElement('p')
// filhoDOprimeiroF.innerText = 'filho do filho';
// const primeiroFilhoDFilho = document.getElementById('primeiroFilhoDoFilho').appendChild(filhoDOprimeiroF)

// console.log(filhoDOprimeiroF.parentElement.parentElement.nextElementSibling);


// const parent = document.getElementById('parent');
// const todos = parent.childNodes;


// for(let index = 0; index < todos.length; index +=1){
//     let contador = todos[index];
//     if(contador.id === 'where-are-you'){
//         contador.removeChild(contador.firstElementChild);
//     }
// }

// console.log( document.getElementById('dbz').firstElementChild.innerText);

// console.log( document.getElementById('stark-children').previousElementSibling.innerText)

// document.getElementById('cars').deleteFirstElementChild()



const h1 = document.createElement('h1')
h1.innerText = 'TrybeTrip - Agência de Viagens';

const body = document.querySelector('body');
body.appendChild(h1);

const main = document.createElement('main')
main.className = 'main-content';
body.appendChild(main);

const section = document.createElement('section')
section.className = 'center-content';
section.innerText = 'algum texto';
main.appendChild(section);

const p = document.createElement('p');
section.appendChild(p);

const secondSection = document.createElement('section')
secondSection.className ='left-content'
main.appendChild(secondSection);

const terceiraSection = document.createElement('section')
terceiraSection.className = 'right-content';
main.appendChild(terceiraSection);

const img = document.createElement('img')
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
secondSection.appendChild(img);

const listaOrdenada = document.createElement('ol')
terceiraSection.appendChild(listaOrdenada);

let numbers = ['um','dois','três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < numbers.length; index += 1) {
    const li = document.createElement('li');
    listaOrdenada.appendChild(li);
    li.innerText = numbers[index];
};

for (let index = 0; index < 3; index += 1) {
    const h3 = document.createElement('h3');
    h3.className = 'description';
    main.append(h3);
    
}

//bonus

const title = document.createElement('title')
h1.appendChild(title);


main.removeChild(secondSection)
main.style.backgroundColor = 'green';

terceiraSection.style.marginRight = 'auto';

listaOrdenada.lastChild.remove();
listaOrdenada.lastChild.remove();