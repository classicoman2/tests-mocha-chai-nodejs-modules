# tests-unitaris-mochajs
prova de tests unitaris amb Mocha

## Webgrafia

- https://www.taniarascia.com/unit-testing-in-javascript/
- https://mochajs.org/. Aquest tutorial està molt bé per explicar els 3 tipus de test (Unity, Functional i Integration) i després fa un exemple amb **Jest**, que és semànticament més comprensible que Mocha (sense **Chai**).
- https://github.com/taniarascia/calc


## Fer Tests unitaris amb Mocha.

A la carpeta inicial del repositori, executarem això, que iniciarà el package.json,

    npm init

Quan demana l'entorn de test, sortirà per defecte "mocha". 

A continuació, instal·lam `Mocha` a dins la carpeta principal de la pràctica,

    npm install --save-dev mocha

En el directori principal, crear fitxer `test.js` amb les nostres proves test, que executarem amb:

    npm test

### Funcions a testar

Les funcions a testar han d'estar dins un fitxer `.js` separat on s'hi ha d'afegir una linia `module.exports` com:

    module.exports = {
        suma, resta  // i la resta de funcions a exportar
    }