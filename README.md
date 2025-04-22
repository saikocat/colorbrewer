colorbrewer
===========

Color specifications and designs developed by Cynthia Brewer (http://colorbrewer2.org/).

This is a shim module of colorbrewer2 by Cythina Brewer for browserify.

It is also a shim for the [files provided in d3.js lib](https://github.com/d3/d3-scale-chromatic).

Access color schemes by name and the number of discrete colors needed, such as `colorbrewer.Blues[5]`. For a list of color schemes by group, use `colorbrewer.schemeGroups`. Example:

```js
const colorbrewer = require('colorbrewer');

console.log(colorbrewer.schemeGroups.sequential);
// ["BuGn","BuPu","GnBu",...]

console.log(colorbrewer.Blues[5]);
// ["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"]
```

## Notes:
* `1.6.1` is a major update that enable TypeScript to work correctly, and modernize the rollup build process.
* `1.5.0` is using rollup to generate both UMD and ES module so hopefully this will resolve the problems for most of us.

## Versions to avoid:
* `1.6.0` due to missing `index.es.js` in packaging.
* There is a compatibility issue with `1.4.0` so do lock your version to `1.3.0` for now.


## Huge thanks to:
* Brian Moran - [moranbw](https://github.com/moranbw) - for TypeScript import and build process enhancement since version `1.6.1`
* Connor Peet - [connor4312](https://github.com/connor4312) - for adding initial
  support for TypeScript since version `1.4.0`
