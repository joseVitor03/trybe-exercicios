

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const fun = ({spring, summer, autumn, winter}) => {
  const result = [...spring, ...summer, ...autumn, ...winter];
  return result;
}
console.log(fun(yearSeasons));