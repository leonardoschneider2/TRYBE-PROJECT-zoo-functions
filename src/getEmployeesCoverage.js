const data = require('../data/zoo_data');

const funcaozinha = (parame) => parame.reduce((obje, element) => {
  const obj = {
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: element.responsibleFor.map((idAnimal) =>
      data.species.find((specie) => specie.id === idAnimal).name),
  };
  return obj;
}, {});

function getEmployeesCoverage(parametro) {
  const { id } = parametro;
  if (id !== undefined) {
    return funcaozinha(data.employees.filter((employee) => employee.id === id));
  }
  /* if (name !== undefined
    && data.employees.filter((employee) => employee.firstName === name).length !== 0) {
    return funcaozinha(data.employees.filter((employee) => employee.firstName === name));
  }
  if (name !== undefined
    && data.employees.filter((employee) => employee.firstName === name).length !== 0) {
    return funcaozinha(data.employees.filter((employee) => employee.firstName === name));
  } */
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
