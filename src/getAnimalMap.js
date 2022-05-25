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

// Função que filtra por sexo e organiza alfabeticamente

const sortedSex = (region, sex) =>
  (getAnimalperRegion(region).map((animal) =>
    ({ [animal]: species.find((specie) =>
      specie.name === animal).residents.filter((resident) =>
      resident.sex === sex).map((objResident) => objResident.name).sort(),
    })));

// Função que somente filtra por sexo sem organizar

const sexNoSort = (region, sex) =>
  (getAnimalperRegion(region).map((animal) =>
    ({ [animal]: species.find((specie) =>
      specie.name === animal).residents.filter((resident) =>
      resident.sex === sex).map((objResident) => objResident.name),
    })));

// Função que somente organiza sem filtrar

const sortNoSex = (region, sex) =>
  (getAnimalperRegion(region).map((animal) =>
    ({ [animal]: species.find((specie) =>
      specie.name === animal).residents.map((objResident) =>
      objResident.name).sort(),
    })));

// Função que somente organiza sem filtrar

const noSortNoSex = (region, sex) =>
  (getAnimalperRegion(region).map((animal) =>
    ({ [animal]: species.find((specie) =>
      specie.name === animal).residents.map((objResident) =>
      objResident.name),
    })));

// Função pra dar resultado verificando sex e sorted

const getAnimalAndNames = (location, sex, sorted) => {
  if (sex && sorted) {
    return location.reduce((acc, region) =>
      ({ ...acc, [region]: sortedSex(region, sex) }), {});
  } // else
  if (sex) {
    return location.reduce((acc, region) =>
      ({ ...acc, [region]: sexNoSort(region, sex) }), {});
  } // else
  if (sorted) {
    return location.reduce((acc, region) =>
      ({ ...acc, [region]: sortNoSex(region, sex) }), {});
  }
  // else
  return location.reduce((acc, region) =>
    ({ ...acc, [region]: noSortNoSex(region, sex) }), {});
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

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
