const data = require('../data/zoo_data');

function countAnimals(parametro) {
  let es = data.species;
  if (parametro === undefined) { // `${sp.name}: ${sp.residents.length}`
    return es.reduce((accum, specie) => {
      const obj = accum;
      obj[specie.name] = specie.residents.length;
      return obj;
    }, {});
  }
  const { specie, sex } = parametro;
  if (specie !== undefined && sex === undefined) {
    es = es.find((sp) => sp.name === specie);
    return es.residents.length;
  }
  es = es.find((sp) => sp.name === specie);
  return es.residents.filter((ele) => ele.sex === sex).length;
}

console.log(countAnimals());

module.exports = countAnimals;
