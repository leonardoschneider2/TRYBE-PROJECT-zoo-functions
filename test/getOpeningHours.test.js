const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste das 6 horas da tarde (6:00-PM). Faça um teste de todos os dias às 18:00 horas:', () => {
    const open = 'The zoo is open';
    const closed = 'The zoo is closed';
    expect(getOpeningHours('Thursday', '9:00-AM')).toEqual(closed);
    expect(getOpeningHours('Wednesday', '9:00-AM')).toEqual(open);
    expect(getOpeningHours('Tuesday', '6:00-PM')).toEqual(closed);
    expect(getOpeningHours('Friday', '6:00-PM')).toEqual(open);
    expect(getOpeningHours('Saturday', '6:00-PM')).toEqual(open);
    expect(getOpeningHours('Sunday', '6:00-PM')).toEqual(open);
    expect(getOpeningHours('Monday', '9:00-AM')).toEqual(closed);
    expect(getOpeningHours('Saturday', '9:00-AM')).toEqual(open);
  });
  it('Teste dos Erros de Parametros:', () => {
    // testing WEEKDAY throw error
    expect(() => {
      getOpeningHours('Sábado', '6:00-PM');
    }).toThrow('The day must be valid. Example: Monday');
    // testing MINUTES throw error
    expect(() => {
      getOpeningHours('Saturday', '6:c0-PM');
    }).toThrow('The minutes should represent a number');
    expect(() => {
      getOpeningHours('Saturday', '6:60-PM');
    }).toThrow('The minutes must be between 0 and 59');
    // testing HOUR throw error
    expect(() => {
      getOpeningHours('Saturday', 'C6:00-PM');
    }).toThrow('The hour should represent a number');
    expect(() => {
      getOpeningHours('Saturday', '13:00-PM');
    }).toThrow('The hour must be between 0 and 12');
    // testing ABREVIATION throw error
    expect(() => {
      getOpeningHours('Saturday', '6:00-BM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testando quando não damos nenhum parametro', () => {
    const weekSchedule = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(weekSchedule);
  });
});
