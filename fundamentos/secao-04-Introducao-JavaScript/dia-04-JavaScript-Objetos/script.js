//Objetos:

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals:{
//         golden: 2,
//         silver: 3
//     }
// }
// player['fullName'] = player['name']+' '+player['lastName'];
// console.log(player);

// console.log('A jogadora', player['fullName'], 'tem', player['age'], 'anos de idade.')




// let bestInTheWorld = {
//     array : [2006, 2007, 2008, 2009, 2010, 2018]
// }

// console.log('A jogadora', player['fullName'], 'foi eleita a melhor do mundo', bestInTheWorld.array.length, 'vezes.');

// console.log('A jogadora possui', player['medals']['golden'], 'medalhas de ouro e', player['medals']['silver'], 'de prata.');

//For/in e For/of

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }


// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for(position in names) {
//     console.log('Olá,', names[position]);
//   }

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
// for(position in car){

//     console.log(position, car[position]);
// }


//Adicionando novas chaves


// student = {};

// const addProperty = (object, key, value) => {
//     object[key] = value;
// }

// addProperty(student, 'name', 'José Vitor');
// addProperty(student, 'eMmail', 'jv681033@gmail.com');
// addProperty(student, 'telefone', 61999188413);
// addProperty(student, 'GitHub', 'joseVItor03');
// addProperty(student, 'Linkedin', 'José Vitor');
// console.log(student);



//object keys


// let student1 = {
//     html: 'Muito Bom',
//     css: 'Bom',
//     javascript: 'Ótimo',
//     softskills: 'Ótimo',
//   };
  
//   let student2 = {
//     html: 'Bom',
//     css: 'Ótimo',
//     javascript: 'Ruim',
//     softskills: 'Ótimo',
//     git: 'Bom', // chave adicionada
//   };

//   const listSkills = (student) => {
//     let array = Object.keys(student);
//     for(let index = 0; index < array.length; index += 1){
//         console.log(array[index], 'Nivel:', student[array[index]]);
//     }
//   }
// console.log(listSkills(student1));

// console.log(listSkills(student2));



//Object values


// let coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     createdBy: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };
  
  // for (let property in coolestTvShow) {
  //   console.log(coolestTvShow[property]);
  // }
  
//   console.log(Object.values(coolestTvShow));
  
  // [
  //   'BoJack Horseman',
  //   'adult animation',
  //   'Raphael Bob-Waksberg',
  //   'Princess Carolyn',
  //   'Princess Carolyn always lands on her feet.'
  //    6
  // ]

//   const values = () => {
//     return Object.values(coolestTvShow);
//   }

//   console.log(values(coolestTvShow));



// object entries 

// let countries = {
//     franca: 'Paris',
//     brasil: 'Brasília',
//     espanha: 'Madrid',
//     portugal: 'Lisboa',
//   };

//   let pais = Object.entries(countries);
 
//   for(let index = 0; index < pais.length; index += 1){
//         console.log('--------');
//         console.log('País:', pais[index][0]);
//         console.log('Capital:', pais[index][1]);
//       };


//object assign


let person = {
    name:'Roberto',
  };
  
  let lastName = {
    lastName: 'Silva',
  };
  
  let newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);


let objeto = {
    chave1: 'a',
    chave2: 'b',
    chave3: 'c',
}

console.log(Object.keys(objeto));