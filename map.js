const cities = require('./cities.json')

module.exports = cities.reduce((acc, city) => {
  const name = (city.name || '').toLowerCase()
  const names = city.alternativeNames.map(word => (word || '').toLowerCase())
  acc[name] = city
  names.map(name => {
    acc[name] = city
  })
  return acc
}, {})