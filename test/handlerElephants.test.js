const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testando Quando o Parâmetro passado for o nome de alguma key:', () => {
    const resi = [
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 },
    ];
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('name')).toEqual('elephants');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('residents')).toEqual(resi);
  });
  it('testando count, averageAge e names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toEqual(10.5);
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Testando parametros de diferentes tipos:', () => {
    expect(handlerElephants(4)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('Qualquer coisa diferente')).toEqual(null);
    expect(handlerElephants()).toEqual(undefined);
  });
});
