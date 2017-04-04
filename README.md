# cities15000-json

A list of almost all cities in a huge JSON. This is a port of [river-jade/cities15000](https://www.npmjs.com/package/cities15000) converted to JSON, original data from [geonames.org](http://download.geonames.org/export/dump/).

## Installation

```sh
npm install cities15000-json --save
```

## Usage

```js
const cities = require('cities15000-json')

cities.filter(city => city.name.match('Helsinki'))
```

All cities in a lower-cased map:

```js
const citiesMap = require('cities15000-json/map')

console.log(citiesMap['helsinki'])
```

# License

## Data

Copyright [geonames.org](http://www.geonames.org/)

Creative commons attribution 3.0
([CC-BY](http://creativecommons.org/licenses/by/3.0/))
