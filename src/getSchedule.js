const data = require('../data/zoo_data');

function els() {
  const { hours } = data;
  const obj = Object.keys(hours).reduce((objeto, element) => {
    const ob = objeto;
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
  if (weekday.includes(scheduleTarget)) {
    return data.species.filter((specie) => specie.availability.includes(scheduleTarget)).map(
      (animal) => `${animal.name}`,
    );
  }
  const animals = data.species.map((obj) => obj.name);
  if (animals.includes(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return els();
}

console.log(getSchedule());

module.exports = getSchedule;
