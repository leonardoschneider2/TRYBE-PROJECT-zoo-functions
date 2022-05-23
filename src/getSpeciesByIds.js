const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  let resultado = ids.map((partros) => data.species.find((Species) => Species.id === partros));
  // A linha de cima primeiro acessa cada posição do parametro ids
  //   Depois procura qual objeto (espécie no data) vai ter o id descrito
  //   Resultado agora contém os objetos (por inteiro) das espécies com todas informações
  resultado = resultado.map((especiesEscolhidas) => especiesEscolhidas.name);
  // agora o que fazemos é selecionar quais as chaves queremos trabalhar no objeto
  return resultado;
}

module.exports = getSpeciesByIds;
