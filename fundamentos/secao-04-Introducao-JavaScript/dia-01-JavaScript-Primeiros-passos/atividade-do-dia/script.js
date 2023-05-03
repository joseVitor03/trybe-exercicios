// Questão 1

// let firstNumber = 7;
// let secondNumber = 13;

// let adicao = firstNumber + secondNumber;
// let subtracao = firstNumber - secondNumber;
// let multiplicacao = firstNumber * secondNumber;
// let divisao = firstNumber / secondNumber;
// let modulo = firstNumber % secondNumber;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

// Questão 2

// let num1 = 18;
// let num2 = 19;


// if(num1 > num2){
//     console.log(num1 + ' é maior que '+ num2);
// }else{
//     console.log(num1 + ' não é maior que '+ num2);
// }

//Questão 3
// let num1 = 18;
// let num2 = 19;
// let num3 = 45;

// if(num1 > num2 && num1 > num3){
//     console.log(num1 + ' é o maior número.');
// }else if(num2 > num1 && num2 > num3){
//     console.log(num2 + " é o maior número.");
// }else{
//     console.log(num3 + ' é o maior número.');
// }

//Questão 4

// let num1 = 0;

// if(num1 > 0){
//     console.log('positive');
// }else if(num1 < 0){
//     console.log('negative');
// }else{
//     console.log('zero');
// }

//Questão 5
// let angulo1 = 60;
// let angulo2 = 60;
// let angulo3 = 63;

// if(angulo1 + angulo2 + angulo3 == 180){
//     console.log(true);

// }else if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
//     console.log('erro');

// }else if (angulo1 + angulo2 + angulo3 < 180 && angulo1 + angulo2 + angulo3 > 0 || angulo1 + angulo2 + angulo3 > 180){
//     console.log(false);
// }

//Questão 6

// let pecasXadrez = 'PEÃs'.toLowerCase();
// switch(pecasXadrez){
    
//     case 'peão':
//         console.log('movimentos frontais.');
//     break;

//     case 'torre':
//         console.log('movimentos em linha reta. Tanto horizontalmente, quanto verticalmente.');
//     break;

//     case 'cavalo':
//         console.log('movimentos em L');
//     break;
    
//     case 'bispo':
//         console.log('movimentos em diagonais');
//     break;
    
//     case 'rainha':
//     case 'rei':    
//         console.log('movimentos diagonais e em linha reta');
//     break;
//     default:
//         console.log('erro');
// }

//Questão 7

// let nota = 101;

// if(nota >= 90 && nota <= 100){
//     console.log('A');
// }else if(nota >= 80 && nota <= 100){
//     console.log('B');
// }else if(nota >= 70 && nota <= 100){
//     console.log('C');
// }else if(nota >= 60 && nota <= 100){
//     console.log('D');
// }else if(nota >= 50 && nota <= 100){
//     console.log('E');
// }else if(nota < 50 && nota > 0){
//     console.log('F');
// }else {
//     console.log('erro');
// }


//Questão 8

// let num1 = 30;
// let num2 = 17;
// let num3 = 21;

// if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0 ){
//     console.log(true);
// }else{
//     console.log(false);
// }

//Questão 9

//  let num1 = 30;
//  let num2 = 19;
//  let num3 = 22;

//  if(num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0 ){
//      console.log(true);
//  }else{
//      console.log(false);
//  }

//Questão 10

// let custoProduto = 5;
// let valorVenda = 9;
// let lucro = 0;

// if(custoProduto >= 0 && valorVenda >0){
//     custoProduto = custoProduto * 1.2;
//     lucro = (valorVenda - custoProduto) * 1000;
//     console.log(lucro);
// }else{
//     console.log('erro');
// }

//Questão 11

let aliquotINSS;
let aliquotIR;

let grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));
