//primeira atividade
// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }

//   }
//   imprimeIdade()

//segunda atividade
// const pessoa = {
//     nome:'Henri',
//     idade:20
// }

// pessoa.nome = 'Luna';
// pessoa.idade = 19;

// console.log('nome:', pessoa.nome);
// console.log('idade:', pessoa.idade);


// terceira atividade
// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hambúrguer';
// console.log(favoriteFood);


// quarta ativida
// const name = 'Adriana';
// const lastName = 'Soares';
// console.log(`Olá, ${name} ${lastName}!`);
// let a = 3;
// let b = 5;
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);


//quinta atividade
// const numeroAleatorio = () => {
//     return parseInt(Math.random() * 50);
// }

// console.log(numeroAleatorio(2));


//sexta atividade 
// const hello = (nome) => {
//     return `Olá, ${nome}!`
// }

// console.log(hello('Vitor'));


//setima atividade

// const nomeCompleto = (nome, sobrenome) => {
//     return `${nome} ${sobrenome}`
// }
// console.log(nomeCompleto('José', 'Vitor'));



// OITAVA ATIVIDADE

// let speed = 90;

// const speedCar = (speed) => {
//    return (speed >= 120)? `Você ultrapassou o limite de velocidade` : `Você esta na velocidade permitida`;
// }

// console.log(speedCar(speed));



//ATIVIDADES BONUS 1

// const ligaMotor = (motor) => {
//    return (motor === 'desligado')? `Motor ligado!` : `Motor desligado`;
// }

// console.log(ligaMotor('desligado'));
// console.log(ligaMotor('ligado'));


//ATIVIDADES BONUS 2

// const areaCirculo = (valor) => {
//     const PI = 3.14;
//     if(typeof valor === 'number'){
//         let area = PI * (valor ** 2);
//         return `Esta é a area do circulo: ${area}`;
//     } 
//     return `PRECISA SER UM NÚMERO.`
// }

// console.log(areaCirculo(10));



// ATIVIDADE BONUS 3
// const longestWord = (frase) => {
//     let maiorPalavra = frase.split(' ');
//     let maxLength = 0;
//     let result = '';

//    for (const word of maiorPalavra) {
//     if (maxLength < word.length) {
//         maxLength = word.length
//         result = word;
//     }
//    }
    
//     return result;
// }

// console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'))




//ATIVIDADE BONUS 4

const substitua = (nome) => {
    const frase = `Tryber x aqui!`;
     let fraseEsp = frase.split(' ')
     for (let index = 0; index < fraseEsp.length; index++) {
        if(fraseEsp[index] === 'x'){
            fraseEsp[index] = nome
        }
        
     }
     return fraseEsp.join(' ')
}
substitua()


//ATIVIDADE BONUS 5

const minhasSkills = (funcao) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
   let result = `${funcao} Minhas habilidades são:`;
   for (let index = 0; index < skills.length; index++) {
        result = `${result}
         - ${skills[index]}`
    
   }
   return result
}

console.log(minhasSkills(substitua('Vitor')));
