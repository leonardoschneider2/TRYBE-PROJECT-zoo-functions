const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const collaborator = data.employees.find((employee) => employee.id === id);
  // get the collaborator passed for parameter
  const firstResponsible = collaborator.responsibleFor[0];
  // getting first the responsible species of a collaborator
  const firstSpecieResidents = data.species.find((specie) => specie.id
  === firstResponsible).residents;
  // getting the animals array of a firstResponsible
  return Object.values(firstSpecieResidents.reduce((oldestAnimal, animal) => (
    (oldestAnimal.age < animal.age) ? animal : oldestAnimal)));
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); // Nigel Nelson
// console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83')); // Burl
// console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8')); // Ola
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992')); // Stephanie
// console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f')); // Wilburn
// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad')); // Sharonda
// console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2')); // Ardith
// console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2')); // Emery

module.exports = getOldestFromFirstSpecies;
