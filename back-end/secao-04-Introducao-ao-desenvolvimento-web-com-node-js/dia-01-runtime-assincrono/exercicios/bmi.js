const readline = require('readline-sync');
// ...
// function handleBMI(weight, height) {
//   ...
// }

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return bmi >= minBMI && bmi <= maxBMI;
  });

  return resultFind;
}

function handleBMI(height, weight) {
  // console.log(`Sua altura é ${heightTotal} e seu peso é ${weightTotal}.`);
  const result = weight / height ** 2

  return result;
}

function main() {
  const heightTotal = readline.questionFloat('Qual a sua altura?');
  const weightTotal = readline.questionInt('Qual o seu peso?');

  const BMI = handleBMI(heightTotal, weightTotal);
  const bmiResult = handleBMIResult(BMI);
  console.log(`Seu IMC é: ${BMI.toFixed(2)}`);
  console.log(bmiResult);
}

main();
