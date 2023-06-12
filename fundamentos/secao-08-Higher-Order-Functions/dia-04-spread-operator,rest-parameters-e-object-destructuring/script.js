//METODO SPREAD
// const product = {
//     id: 1,
//     name: 'Camiseta',
// };

// const newProduct = {...product, price: 50};
// console.log(newProduct);




// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['maça', 'laranja', 'banana'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['granola', 'aveia', 'mel'];

// const fruitSalad = (fruit, additional) => {
//   // Escreva sua função aqui
//   const result = [...specialFruit, ...additionalItens];
//   return result;
// };

// console.log(fruitSalad(specialFruit, additionalItens));




//Object Destructuring


// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//   };
  
//   const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
//   };

  
//   const fun = (user, jobInfos) => {
//    const result = {...user, ...jobInfos};
//    const {name, age, nationality, profession, squad, squadInitials} = result;
//    return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}.
// I work as a ${profession} and my squad is ${squadInitials}-${squad}`;


//   }
//   console.log(fun(user, jobInfos));


const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const fun1 = (student) => {
    const { a: name, b: classAssigned, c: subject } = student;
    return `Oi, meu nome é ${name}, sou da ${classAssigned} e curso a materia de ${subject}`
}
console.log(fun1(student));
 
  

