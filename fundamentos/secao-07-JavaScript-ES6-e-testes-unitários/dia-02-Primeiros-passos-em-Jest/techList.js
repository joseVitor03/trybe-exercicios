
// const techList = (array, string) => {
    
//         if (array.length === 0) {
            
//             return 'Vazio!';
//         }
//         const lista = array.sort();
//         const obj = [];
//         for (let index = 0; index < array.length; index++) {
//             obj.push({
//                 tech: lista[index],
//                 name: string
//             })
            
            
//         }
//         return obj
// };
// console.log(techList([], 'lucas'));

// module.exports = techList;

// const hydrate = (string) => {
//       const splitString = string.split('');
//       let glassesOfWater = 0;
    
//       for (let index = 0; index < splitString.length; index += 1) {
//         const parsedCharacter = parseInt(splitString[index]);
//         console.log(parsedCharacter);
//         if (parsedCharacter) {
//           glassesOfWater += parsedCharacter;
//         }
//       }
    
//       let glass = 'copo';
    
//       if (glassesOfWater > 1) {
//         glass = 'copos';
//       }
    
//       return `${glassesOfWater} ${glass} de água`;
//     }
//     console.log(hydrate('2 refris, 2 agua'));