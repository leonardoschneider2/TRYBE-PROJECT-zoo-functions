const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  // seu código aqui
  const result = data.employees.reduce((funcionarioEscolhido, elemento) => {
    if (elemento.firstName === name || elemento.lastName === name) {
      return elemento;
    }
    return funcionarioEscolhido;
  }, {});
  return result;
}

console.log(getEmployeeByName('Burl'), 1);

console.log(getEmployeeByName('Bethea'), 2);

console.log(getEmployeeByName('Wilburn'), 3);

console.log(getEmployeeByName(), 4);

module.exports = getEmployeeByName;
