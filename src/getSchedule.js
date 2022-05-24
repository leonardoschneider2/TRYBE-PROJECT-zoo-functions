const data = require('../data/zoo_data');

function els() {
  const { hours } = data;
  const obj = Object.keys(hours).reduce((objeto, element) => {
    const ob = objeto;
    if (element === 'Monday') {
      ob[element] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return ob;
    }
    ob[element] = {
      officeHour: `Open from ${hours[element].open}am until ${hours[element].close}pm`,
      exhibition: data.species.filter((specie) => specie.availability.includes(element)).map(
        (animal) => animal.name,
      ),
    };
    return ob;
  }, {});
  return obj;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const weekday = Object.keys(data.hours);
  let result = els();
  if (weekday.includes(scheduleTarget)) {
    result = {
      [scheduleTarget]: result[scheduleTarget],
    };
  }
  const animals = data.species.map((obj) => obj.name);
  if (animals.includes(scheduleTarget)) {
    result = data.species.find((specie) =>
      specie.name === scheduleTarget).availability;
  }
  return result;
}

module.exports = getSchedule;
