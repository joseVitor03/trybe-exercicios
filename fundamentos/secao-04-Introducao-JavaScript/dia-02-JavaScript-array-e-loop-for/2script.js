//Exercicios
//desafios 1 e 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log(numbers);
// let soma = 0
// for (let index = 0; index < numbers.length; index += 1){
//     soma  += numbers[index];
//     console.log(soma);
// }




//desafio 3 e 4
// let soma = 0;
// let media = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     soma  += numbers[index];
//     media = soma / numbers.length;
// }

// if(media > 20){
//     console.log('O valor da média aritmética é maior que 20');
// }else{
//     console.log('O valor da média aritmética é menor ou igual a 20');
// }

// console.log(media);


//desafio 5

// let biggerNumber = 0;

// for(let index = 0; index < numbers.length; index += 1){
//     if(biggerNumber < numbers[index]){
//         biggerNumber = numbers[index];
//     }
//     console.log(biggerNumber);
// }


//desafio 6

// let qNumbers = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     if(numbers[index] % 2 !== 0){
//         qNumbers += 1;
//     }else if(qNumbers < 1){
//         console.log('Nenhum valor ímpar encontrado.');
//     }
// }

// console.log(qNumbers);


//desafio 7

// let smallestNumber = 100;

// for(let index = 0; index < numbers.length; index += 1){
//     if(smallestNumber > numbers[index]){
//         smallestNumber = numbers[index];
//     }
// }
// console.log(smallestNumber);


//desafio 8 e 9

// let nums = [];
// let result = 0
// for (let index = 1; index < 26; index += 1){
//     nums.push(index);
    
// }

// for(let index1 = 0; index1 < nums.length; index1 += 1){
//     result = nums[index1] / 2;
//    console.log(result);
// }




//desafio 10

// let num1 = 10;

// for(let index = 10; index > 1; index -= 1){
//     num1 *= index - 1;
// }

// console.log(num1);



//desafio 11

// let word = 'tryber';
// let reversa = '';
// for(let index = 0; index < word.length; index += 1){
//     reversa += word[word.length - 1 - index];
// }

// console.log(reversa);



//desafio 12

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let biggerWord = '';
// let smallestWord = 'kkkkkkkkkkk';

// for(let index = 0; index < array.length; index += 1){
//     if(biggerWord.length < array[index].length){
//         biggerWord = array[index];
//     }
    
// }

// for(let index = 0; index < array.length; index += 1){
//     if(smallestWord.length > array[index].length){
//         smallestWord = array[index];
//     }
// }
// console.log('Maior palavra:', biggerWord);
// console.log('Menor palavra é:',smallestWord);


//desafio 13

// let maiorPrimeNumb = 0;

// for(let atualNumb = 2; atualNumb < 50; atualNumb += 1){
//     let prime = true;
//     for(let atualDiv = 2; atualDiv < atualNumb; atualDiv += 1){
//         if(atualNumb % atualDiv === 0){
//             prime = false
//         }
//     }
//     if(prime){
//         maiorPrimeNumb = atualNumb;
//     }
// }

// console.log(maiorPrimeNumb);