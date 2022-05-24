const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((partros) => data.species.find((Species) => Species.id === partros));
}

module.exports = getSpeciesByIds;
