const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalEscolhido = data.species.find((specie) => specie.name === animal);
  // Procura qual espécie de animais vamos olhar a idade
  const result = animalEscolhido.residents.find((animalzinho) => animalzinho.age < age);
  // Caso tenha algum animal mais novo que a idade proposta, o valor de result não
  //   será mais indefinido (undefined);
  return result === undefined;
  // result === undefined ? true : false;
}

module.exports = getAnimalsOlderThan;
