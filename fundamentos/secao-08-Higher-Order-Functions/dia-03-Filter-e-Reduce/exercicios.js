// Fonte: <https://restcountries.com/v2/all>
const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

//   const populacaoTotal = () => {
//     return countries.reduce((acc, curr) => (acc += curr.population), 0)
//   }
//   console.log(populacaoTotal());

//   const area = () => {
//     return countries.reduce((acc, curr) => (acc += curr.area), 0)
//   }
//   console.log(area());

//   const longestName = () => {
//     // retorne seu código aqui
//    return countries.reduce((acc, curr) => 
//     (acc.name.length > curr.name.length ? acc : curr)).name
//   }
//   console.log(longestName()); 


//   const names = [
//     'Aanemarie', 'Adervandes', 'Akifusa',
//     'Abegildo', 'Adicellia', 'Aladonata',
//     'Abeladerco', 'Adieidy', 'Alarucha',
//   ];
//   const expectedResult = 20;
//   const countA = () => {
//     // retorne seu código aqui
//     const list = names.join('').toUpperCase().split('')
//     const resposta = list.reduce((acc, curr) =>{
//      return curr === 'A' ? acc += 1 : acc}, 0);
//      return resposta
//   }
//   console.log(countA());


// O index 0 do array `students` equivale ao index 0 do array `grades`
// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
// const expectedResult = [
//  { name: 'Pedro Henrique', average: 7.8 },
//  { name: 'Miguel', average: 9.2 },
//  { name: 'Maria Clara', average: 8.8 },
// ];


// const studentAverage = () => {
//   // retorne seu código aqui
//  const lista = students.map((aluno, index) => {
//     return {
//         name: aluno,
//         average: (grades[index]
//         .reduce((acc, curr) => acc += curr) / grades[index].length).toFixed(1)
//     }
//  })
//  return lista
// }
// console.log(studentAverage());

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  
//   const flatten = () => {
//     // retorne seu código aqui
//    return arrays.reduce((acc, curr) => {
//         return acc.concat(curr)
//     }, [])
//   }
//   console.log(flatten());

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
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

const reduceNames = () => {
  // retorne seu código aqui
  return books.reduce((acc, curr) => {
    return `${acc += curr.author.name}, `
  }, ' ')
}
console.log(reduceNames());


const averageAge = () => {
  // retorne seu código aqui
 const author = books.reduce((acc, curr) => {
    return acc += (curr.releaseYear - curr.author.birthYear)
  }, 0)
  const resp = author / books.length;
  return resp;
}
console.log(averageAge());

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  const longestNamedBook = () => {
    // retorne seu código aqui
   return books.reduce((acc, curr) => {
    return acc.name.length > curr.name.length ? acc : curr;
   })
  }
  console.log(longestNamedBook());