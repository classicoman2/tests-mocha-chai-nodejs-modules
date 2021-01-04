const assert = require('assert')
const operacions = require('../operacions')

describe('Operacions aritmètiques',  function() {

    it('suma entre 2 operands sencers positius funciona', () => {
        assert.strictEqual( operacions.suma(100,25), 125 )
    })

    it('suma entre 2 operands sencers, positius o negatius, funciona', () => {
        assert.strictEqual( operacions.suma(100,-25), 75 )
    })

    it('suma entre un nombre i un string dóna error', () => {
        assert.strictEqual( isNaN(operacions.suma(100, 'patata')), true )
    })

    it('suma entre un string i un nombre dóna error', () => {
        assert.strictEqual( isNaN(operacions.suma('cogombre', 1)), true )
    })

})
