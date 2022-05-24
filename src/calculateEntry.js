const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const children = entrants.reduce((acc, pe) => ((pe.age >= 0 && pe.age < 18) ? acc + 1 : acc), 0);
  const adults = entrants.reduce((acc, pe) => ((pe.age >= 18 && pe.age < 50) ? acc + 1 : acc), 0);
  const seniors = entrants.reduce((acc, pe) => ((pe.age >= 50) ? acc + 1 : acc), 0);

  return { child: children, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (
    entrants === undefined
    || Object.keys(entrants).length === 0
  ) return 0;
  const quantEntrants = countEntrants(entrants);

  let { child, adult, senior } = quantEntrants;

  child *= data.prices.child;
  adult *= data.prices.adult;
  senior *= data.prices.senior;

  return child + adult + senior;
}
const obj = {};

console.log(calculateEntry(obj));
module.exports = { calculateEntry, countEntrants };
