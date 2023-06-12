// METODO FILTER()
// const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

// const fun = (dados) => (dados
//     .filter((element) => (typeof element === 'string')));

// console.log(fun(dados));



// const listaNumeros = [10,100, 20, 30, 40, 50, 60, 70];

// const fun2 = () => {
//   const newList = listaNumeros.filter((number) => number > 20);
//   newList.sort((a,b) => a - b);
//   return newList
// };

// console.log(fun2());




// METODO REDUCE()
// const valorItens = [1, 32, 44, 2, 3];
// valorItens.reduce((acc, curr) => {
//     console.log(`acc:`, acc);
//     console.log(`curr:`, curr);
//     console.log('a soma atual é', acc + curr);
  
//     return acc + curr;
//   }, 0);


//   const numbers = [1, 32, 44, 2, 3];

// const sumNumbers =  (acc, curr) => acc += curr;

// const totalSum = numbers.reduce(sumNumbers, 30);

// console.log(totalSum); //112

// const numbers = [50, 85, -30, 3, 15, 100];
// const fun3 = () => numbers.reduce((acc, curr) =>
//  acc < curr ? acc = curr : acc , 0)

// console.log(fun3());



// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const fun4 = () => (numbers.filter((number) => number % 2 === 0));

// const fun5 = () => {
//     const list = fun4();
//       const newList = list.reduce((acc, curr) => {
//            return acc += curr});
//     return newList;
// }
// console.log(fun5());



// const estudantes = [
//     {
//       nome: 'Jorge',
//       sobrenome: 'Silva',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 67 },
//         { name: 'Português', nota: 79 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 65 },
//       ],
//     },
//     {
//       nome: 'Mario',
//       sobrenome: 'Ferreira',
//       idade: 15,
//       turno: 'Tarde',
//       materias: [
//         { name: 'Matemática', nota: 59 },
//         { name: 'Português', nota: 80 },
//         { name: 'Química', nota: 78 },
//         { name: 'Biologia', nota: 92 },
//       ],
//     },
//     {
//       nome: 'Jorge',
//       sobrenome: 'Santos',
//       idade: 15,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 76 },
//         { name: 'Português', nota: 90 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 80 },
//       ],
//     },
//     {
//       nome: 'Maria',
//       sobrenome: 'Silveira',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 91 },
//         { name: 'Português', nota: 85 },
//         { name: 'Química', nota: 92 },
//         { name: 'Biologia', nota: 90 },
//       ],
//     },
//     {
//       nome: 'Natalia',
//       sobrenome: 'Castro',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 70 },
//         { name: 'Português', nota: 70 },
//         { name: 'Química', nota: 60 },
//         { name: 'Biologia', nota: 50 },
//       ],
//     },
//     {
//       nome: 'Wilson',
//       sobrenome: 'Martins',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 80 },
//         { name: 'Português', nota: 82 },
//         { name: 'Química', nota: 79 },
//         { name: 'Biologia', nota: 75 },
//       ],
//     },
//   ];

//   const fun6 = () => {
    
//    const list = estudantes.map((element) => {        
//         return {
//             name: element.nome,
//             materia: element.materias.reduce((acc, curr) => {
//                 return  (acc.nota > curr.nota) ? acc : curr
//             }).name
//         }
//    })
//    return list
// }
//   console.log(fun6());