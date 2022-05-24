const data = require('../data/zoo_data');

const funcaozinha = (parame) => {
  const result = parame.reduce((accumulator, element) => {
    let obj = accumulator;
    obj = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: element.responsibleFor.map((idAnimal) =>
        data.species.find((specie) => specie.id === idAnimal).name),
      locations: element.responsibleFor.map((idAnimal) =>
        data.species.find((specie) => specie.id === idAnimal).location),
    };
    return obj;
  }, {});
  if (Object.keys(result).length === 0) {
    throw new Error('Informações inválidas');
  } else {
    return result;
  }
};

const semParametro = () => {
  const result = data.employees.map((element) => {
    const obj = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: element.responsibleFor.map((idA) => data.species.find((spe) => spe.id === idA).name),
      locations: element.responsibleFor.map((idAnimal) =>
        data.species.find((specie) => specie.id === idAnimal).location),
    };
    return obj;
  });
  return result;
};

const condicionais = (parametro) => {
  const { id, name } = parametro;
  if (id !== undefined) {
    return funcaozinha(data.employees.filter((employee) => employee.id === id));
  }
  if (name !== undefined) {
    return funcaozinha(data.employees.filter((employee) =>
      employee.firstName === name || employee.lastName === name));
  }
};

function getEmployeesCoverage(parametro) {
  if (parametro) {
    return condicionais(parametro);
  }
  return semParametro();
}

console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
