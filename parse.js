const fs = require('fs')

const data = fs.readFileSync('./node_modules/cities15000/cities15000.txt').toString()

const fields = [
  'id',
  'name',
  'asciiname',
  'alternativeNames',
  'lat',
  'lon',
  'featureClass',
  'featureCode',
  'country',
  'altCountry',
  'adminCode',
  'countrySubdivision',
  'municipality',
  'municipalitySubdivision',
  'population',
  'elevation',
  'dem',
  'tz',
  'lastModified'
]

const out = data.split('\n')
  .map(c => {
    const res = c.split(/\t/g)

    const obj = fields.reduce((obj, key, idx) => Object.assign(obj, {[key]: res[idx] }), {})
    obj.alternativeNames = (obj.alternativeNames || '').split(',')

    console.log(obj.id, obj.name, obj.population)
    return obj
  })
  .filter(rec => Boolean(rec.id))

fs.writeFileSync('cities.json', JSON.stringify(out, false, 2))