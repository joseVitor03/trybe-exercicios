//atividades da plataforma para praticar

// let saldo = 0;

// const adicionaSaldo = (adiciona)=>{
//     return saldo += adiciona; 
// }

// adicionaSaldo(168);

// console.log('O saldo da conta é:', saldo);


// const subtraiaSaldo = (subtrair)=>{
//     return saldo -= subtrair;
// }
// subtraiaSaldo(20)
// console.log('O valor atual após subtrair é:', saldo);


// const taxaSaldo = (taxa)=>{
//     return saldo *= taxa;
// }

// taxaSaldo(1.2)
// console.log('O saldo após a taxa é:', saldo);


// const divideSaldo = (divide)=>{
//     return saldo /= divide;
// }

// divideSaldo(2);
// console.log('após a divisão:', saldo);









// // escreva aqui sua função
// const addClient = (add)=>{
//     if(typeof add === 'string'){
//         clientesTrybeBank.push(add)
//         return 'Cliente adicionado(a).'
//     }else{
//         return console.log('erro.');
//     }
// }

// addClient('leo');

// console.log(clientesTrybeBank);

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validaCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parâmetro passado deve ser do tipo "string"!';
  } else {
    return true;
  }
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }

  let index = clienteIndex(cliente);
  if (index === false) {
    return 'Cliente não encontrada(o).'
  }

  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluída(o) com sucesso.';
}

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]