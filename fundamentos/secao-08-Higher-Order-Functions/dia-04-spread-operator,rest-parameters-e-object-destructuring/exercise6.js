
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.
const fun = ({spring, summer, autumn, winter}) =>
    [...spring, ...summer, ...autumn, ...winter]

console.log(fun(yearSeasons));