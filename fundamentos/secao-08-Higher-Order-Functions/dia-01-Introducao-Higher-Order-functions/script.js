// const geraEmail = (nome) => {
//   const email = nome.split(' ').join('_');
//   return {nome, email: `${email}@gmail.com`}
// }

// const newEmployees = (call) => {
//   const employees = {
//     id1: call('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: call('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: call('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(geraEmail));




// const loteria = (apostado) => {
//   const numSorteado = Math.floor((Math.random()* 5) + 1)
//   const resposta = apostado === numSorteado ? "Parabéns, você ganhou." : "Tente novamente"

//   return resposta;
// }
// console.log(loteria(1));


// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const corretor = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
//   if (RIGHT_ANSWERS === STUDENT_ANSWERS) {
//     return 1;
//   } 
//   if (STUDENT_ANSWERS === 'N.A') {
//     return 0;
//   }
//   return -0.5
// }

// const contaPontos = (RIGHT_ANSWERS, STUDENT_ANSWERS, action) => {
//   let contador = 0;
//   for (let index = 0; index < RIGHT_ANSWERS.length; index++) {
//     const retorna = action(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
//     contador += retorna;
//   }
//   return `Resultado final: ${contador} pontos`;
// }
// console.log(contaPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, corretor));


const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1944,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1941,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1943,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// const fun1 = (num) => {
//   return books.find((book) => book.author.birthYear === num).author.name;
// }
// console.log(fun1(1947));

// const fun2 = () => {
//   let nameBook = '';
//   books.map((book) => {
//     if (!nameBook || book.name.length < nameBook.length) {
//       nameBook = book.name
//     }
//   })
//  return nameBook
// }
// console.log(fun2());

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// const getNamedBook = () => {
//   // escreva seu código aqui
//   return books.find((book) => book.name.length === 26)
// }
// console.log(getNamedBook());

// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   return books.every((escritores) => 
//   escritores.author.birthYear >= 1901 && escritores.author.birthYear <= 2000)
// }
// console.log(everyoneWasBornOnSecXX());

// const expectedResult = true;

// const someBookWasReleaseOnThe80s = () => {
//   // escreva seu código aqui
//   return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
// }
// console.log(someBookWasReleaseOnThe80s());

const expectedResult = false;

const authorUnique = () => {
  // escreva seu código aqui
  return books.every((author) => !books.some((book => 
    author.author.birthYear === book.author.birthYear && 
    author.author.name !== book.author.name)))
}
console.log(authorUnique());
