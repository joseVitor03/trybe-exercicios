// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// let objeto = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MacPatinhas",
//     recorrente: 'Sim'
// }

// //   console.log('Bem vinda,', info['personagem']);

// info['recorrente'] = 'Sim';

// //   console.log(info);

// //   for(let index in info){
// //     console.log(index);
// //   }
// //   console.log('-------');

// for(let index in (info, objeto)){
//     console.log(info[index],'e',objeto[index]);
// }



// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log('O livro favorito de', leitor['nome'],leitor['sobrenome'],'se chama "', leitor['livrosFavoritos'][0]['titulo'],'"');

// leitor['livrosFavoritos'].push(
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//     }
// ) 

// console.log(leitor['nome'], 'tem', leitor['livrosFavoritos'].length, 'livros favoritos.');



// let order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         },
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         },
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       },
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   function customerInfo(order) {
//     // Adicione abaixo as informações necessárias.
//     let proprietaria = order.order.delivery.deliveryPerson
//     let nome = order['name'];
//     let telefone = order.phoneNumber;
//     let rua = order.address.street;
//     let numero = order.address.number
//     let apartamento = order.address.apartment;
    
//     console.log('Olá,',proprietaria, 'entrega para:', nome,'Telefone:', telefone, ',',rua,', N°', numero,', AP:', apartamento+'.'); 
//   }
  
//   customerInfo(order);
  
//   function orderModifier(order) {
//     // Adicione abaixo as informações necessárias.
//     let cliente = order.name = 'Luiz Silveira';
//     let pizza = Object.keys(order.order.pizza);
//     let bebida = order.order.drinks.coke.type;
//     let totalPedido = order.payment.total = '50.00'
//     console.log('Olá', cliente, 'o valor total de seu pedido de', pizza[0]+',',pizza[1],'e', bebida,'é R$', totalPedido+'.');
//   }
  
//   orderModifier(order);

let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};



// const adicionaTurnoNoite = (object, key, value) => {
//   object[key] = value

// }
// adicionaTurnoNoite(lesson2, 'turno', 'noite');

// const mostraKeys = (object) => {
//   let objeto = Object.keys(object);
//   return objeto
// }
// console.log(mostraKeys(lesson1));

// const tamanhoObjecto = (object) => {

//   return Object.entries(object).length;
// }
// console.log(tamanhoObjecto(lesson2));


// const valoresObjeto = (object) => {
//   return Object.values(object);
// }

// console.log(valoresObjeto(lesson1));


let allLessons = Object.assign({},{lesson1,
  lesson2,
  lesson3})


console.log(allLessons);


// const numveroEstudantes = (object) => {
//   let total = 0;
//   let keys = Object.keys(object)
//   for (let index in keys) {
//     total += object[keys[index]].numeroEstudantes;
//   }
//     return total
  
// }

// console.log(numveroEstudantes(allLessons));

// const valorChave = (object , number) => {
//   return Object.values(object)[number]
// }

// console.log(valorChave(lesson3, 1));


// const verificaPar = (object, key, value) => {
//   let entries = Object.entries(object);
//   let isEqual = false;
//   for( let index in entries){
//     if(entries[index][0] === key && entries[index][1] === value){
//       return isEqual = true;
//     }
    
//   }
//   return isEqual;
// }
// console.log(verificaPar(lesson1,'materia', 'matemática'));
