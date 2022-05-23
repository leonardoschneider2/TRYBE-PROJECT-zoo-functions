const data = require('../data/zoo_data');

function countAnimals({ specie, sex }) {
  let es = data.species;
  if (specie !== undefined && sex === undefined) {
    es = es.find((sp) => sp.name === specie);
    return `${es.name}: ${es.residents.length}`;
  }
  if (specie !== undefined && sex !== undefined) {
    es = es.find((sp) => sp.name === specie);
    return `${es.name}: ${es.residents.filter((ele) => ele.sex === sex).length}`;
  }
  return es.map((sp) => `${sp.name}: ${sp.residents.length}`);
}

module.exports = countAnimals;
