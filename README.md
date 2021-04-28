# Tests Unitaris a Node.js
## Disclaimer
Tests unitaris - síncrons i asíncrons - amb Mocha.js i Chai.js per a Node.js (No per a web)

Per veure com fer tests amb Mocha amb mòduls ES6, veure [aquest respositori](https://github.com/classicoman2/tests-mocha-ES6-modules).


## Webgrafia

- [Unit Testing in JavaScript with Mocha, Tania Rascia, 03-27-2018](https://www.taniarascia.com/unit-testing-in-javascript)
- [Mocha Docs](https://mochajs.org/)


## Tests  amb Mocha

Instal·la `Mocha` com a dependència de desenvolupament,

    npm install --save-dev mocha

Crea un directori anomenat `test` en el directori principal i introdueix a dins els fitxers amb els seus test.

En el fitxer `package.json`, afegeix:

```
"scripts": {
  "test": "mocha test"
}
```
> En cas de no tenir fitxer `package.json`, crea'l amb `npm init`.

Per executar els test, 

```
npm test
```

## Funcions a testar

Conve que les funcions a testar estiguin separades en un mòdul `.js` separat i disponibles amb una linia `module.exports` com:

```
module.exports = {
  suma, resta  // funcions a exportar
}
