const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Função que me entrega a location dinamicamente.
const getLocation = () => {
  const obj = species.reduce((acc, specie) => {
    if (!acc.includes(specie.location)) {
      acc.push(specie.location);
    }
    return acc;
  }, []);
  return obj;
};

// Função que retorna os animais de uma região quando passamos como parâmetro
// uma string com o nome da região: EX 'NE'
const getAnimalperRegion = (region) =>
  (species.filter((specie) =>
    (specie.location === region)).map((specie) => specie.name));

const getAnimalAndNames = (location, sex, sorted) => {
  if (sex && sorted) {
    return location.reduce((acc, region) =>
      ({ ...acc, [region]: getAnimalperRegion(region) }), {});
  } // else
  if (sex) {
    return false;
  } // else
  if (sorted) {
    return false;
  }
  // else
  return false;
};

// Função Raiz da Questão
function getAnimalMap(options) {
  const location = getLocation();
  if (!options) {
    return location.reduce((acc, region) =>
      ({ ...acc, [region]: getAnimalperRegion(region) }), {});
  }
  const { sex, sorted, includeNames } = options;
  if (!includeNames) {
    return location.reduce((acc, region) =>
      ({ ...acc, [region]: getAnimalperRegion(region) }), {});
  }
  return getAnimalAndNames(location, sex, sorted);
}

console.log(getAnimalMap({ sex: 'female', includeNames: true, sorted: true }));

module.exports = getAnimalMap;
