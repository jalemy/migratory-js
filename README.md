# migratory-js

Library for convert decimal latitude and longitude to degrees, minutes, seconds and degrees, minutes.

[![codecov](https://codecov.io/gh/jalemy/migratory-js/branch/main/graph/badge.svg?token=81KBBJSNTU)](https://codecov.io/gh/jalemy/migratory-js)

![main ci](https://github.com/jalemy/migratory-js/workflows/main%20ci/badge.svg)

## Installation

```
$ npm install migratory-js
```

or

```
$ yarn install migratory-js
```

## Usage

```typescript
import { GeoNumber, DecimalConverter }

const geoNumber = new GeoNumber(0, true)
console.log(geoNumber.toDms(35.3, true).toDms().toString())
// 35°18′0″N

const decimalConverter = new DecimalConverter(-15.4, 35.0)
console.log(decimalConverter.toDmm().latitude.toString())
// 15°24′S
console.log(decimalConverter.toDmm().longitude.toString())
// 35°0′E
console.log(decimalConverter.toDmm().longitude)
// {
//   degree: 35,
//   minute: 0,
//   direction: 'E',
//   toString: [Function: toString]
// }
```
