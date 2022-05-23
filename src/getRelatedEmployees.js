const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const result = data.employees.find((empreg) => empreg.managers.find((manager) => manager === id));
  // procure se existe algum funcionário gerenciado pelo funcionario passado por parametro
  return result !== undefined;
  // Se o resultado for diferente de undefined, significa que o código encontrou
  //   um funcionário que é gerenciado pelo gerente que recebemos como parametro
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const manager = isManager(managerId);
  let empregados;
  if (manager === true) {
    empregados = data.employees.filter((empre) => empre.managers.find((man) => man === managerId));
    empregados = empregados.map((Obj) => `${Obj.firstName} ${Obj.lastName}`);
    return empregados;
  }
  return manager;
}

module.exports = { isManager, getRelatedEmployees };
