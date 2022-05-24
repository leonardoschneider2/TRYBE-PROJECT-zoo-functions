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

module.exports = getEmployeeByName;
