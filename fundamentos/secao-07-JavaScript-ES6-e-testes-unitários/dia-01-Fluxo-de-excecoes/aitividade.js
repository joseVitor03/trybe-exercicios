// const clients = [
//     {
//       name: 'João da Silva',
//       age: 28,
//       email: 'joao.silva@gmail.com',
//       phone: '(11) 5555-5555',
//       address: {
//         street: 'Rua dos Lírios',
//         number: 123,
//         neighborhood: 'Jardim Primavera',
//         city: 'São Paulo',
//         state: 'SP',
//         cep: '01234-567',
//       },
//     },
//     {
//       name: 'Maria Souza',
//       age: 35,
//       email: 'maria.souza@hotmail.com',
//       address: {
//         street: 'Rua dos Cravos',
//         number: 456,
//         neighborhood: 'Copacabana',
//         city: 'Rio de Janeiro',
//         state: 'RJ',
//         cep: '12345-678',
//       },
//     },
//     {
//       name: 'Pedro Oliveira',
//       age: 42,
//       email: 'pedro.oliveira@gmail.com',
//       address: {
//         street: 'Rua das Margaridas',
//         number: 789,
//         neighborhood: 'Boa Viagem',
//         city: 'Recife',
//         state: 'PE',
//         cep: '23456-789',
//       },
//     },
//     {
//       name: 'Ana Santos',
//       age: 25,
//       email: 'ana.santos@gmail.com',
//       phone: '(71) 5555-5555',
//       address: {
//         street: 'Rua dos Girassóis',
//         number: 1011,
//         neighborhood: 'Barra',
//         city: 'Salvador',
//         state: 'BA',
//         cep: '34567-890',
//       },
//     },
//     {
//       name: 'Luiz Costa',
//       age: 32,
//       email: 'luiz.costa@hotmail.com',
//       address: {
//         street: 'Rua das Acácias',
//         number: 1213,
//         neighborhood: 'Centro',
//         city: 'Belo Horizonte',
//         state: 'MG',
//         cep: '45678-901',
//       },
//     },
//     {
//       name: 'Isabela Almeida',
//       age: 37,
//       email: 'isabela.almeida@gmail.com',
//       phone: '(21) 5555-5555',
//       address: {
//         street: 'Rua das Hortênsias',
//         number: 1415,
//         neighborhood: 'Botafogo',
//         city: 'Rio de Janeiro',
//         state: 'RJ',
//         cep: '56789-012',
//       },
//     },
//     {
//       name: 'Rafael Ferreira',
//       age: 29,
//       email: 'rafael.ferreira@hotmail.com',
//       address: {
//         street: 'Rua das Orquídeas',
//         number: 1617,
//         neighborhood: 'Pinheiros',
//         city: 'São Paulo',
//         state: 'SP',
//         cep: '67890-123',
//       },
//     },
//   ];
  
//   const findPersonByName = (name) => {
//     // seu código aqui
//     try {
//         let person;
//         for (let index = 0; index < clients.length; index++) {
//             if (name === clients[index].name) {
//                 person = clients[index];
//             }       
//         }
//         if (!person) {
//             throw new Error('Pessoa não encontrada, tente novamente')
//         }
//         const result = `Destinatário: ${person.name} Endereço: ${person.address.street}, ${person.address.number}, 
//         ${person.address.neighborhood}, ${person.address.city} - ${person.address.state}. CEP: ${person.address.cep}`
//         return result;
//     } catch (error) {
//         return error.message
//     }
//   };
//   console.log(findPersonByName('Ana'));
  


//   const findPersonByPosition = (position) => {
//     try {
//         let person
//         for (let index = 0; index < clients.length; index++) {
//             if (position === index) {
//                person = clients[index] 
//             }
            
//         }
//         if (!person) {
//             throw new Error ('Posição inválida, tente novamente')
//         }
//         const result = `Cliente: ${person.name}. email: ${person.email}`;
//         return result
//     } catch (error) {
//         return error.message;
//     }

//   };
//   console.log(findPersonByPosition(-1));
  



//   const findPeopleByState = (state) => {
//     // seu código aqui
//     try {
//         let person = [];
//         for (let index = 0; index < clients.length; index++) {
//             if (state === clients[index].address.state) {
//                 person.push(clients[index])
//             }
            
//         }
//         if (!person) {
//             throw new Error ('Ops, nenhuma pessoa mora nesse estado, tente outro')
//         }
//        return person;
        
//     } catch (error) {
//         return error.message;
//     }
//   };
// console.log(findPeopleByState('SP'));


const validaParametro = (name, age) => {
    if (name === undefined || age === undefined) {
        throw new Error ('Todas as informações são necessárias');
    }
}

const validaIdade = (age) => {
    if (age < 18) {
        throw new Error ('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }
}
const studentRegister = (name, age) => {
   try {
    validaParametro(name, age);
    validaIdade(age);

    const result = `${name}, seja bem vindo(a) à AuTrybe!`
    return result;
   } catch (error) {
        return error.message;
   }
  }

  console.log(studentRegister('v', 17));