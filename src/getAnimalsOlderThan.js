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

console.log(getAnimalsOlderThan('lions', 7)); // true

console.log(getAnimalsOlderThan('lions', 8)); // false

console.log(getAnimalsOlderThan('bears', 4)); // true

console.log(getAnimalsOlderThan('bears', 5)); // false

module.exports = getAnimalsOlderThan;
