const assert = require('assert')
const operacions = require('../operacions')

describe('Operacions aritmètiques',  function() {

    it('suma entre 2 operands sencers positius funciona', () => {
        assert.equal( operacions.suma(100,25), 125 )
    })

    it('suma entre 2 operands sencers, positius o negatius, funciona', () => {
        assert.equal( operacions.suma(100,-25), 75 )
    })

    it('suma entre un nombre i un string dóna error', () => {
        assert.equal( isNaN(operacions.suma(100, 'patata')), true )
    })

    it('suma entre un string i un nombre dóna error', () => {
        assert.equal( isNaN(operacions.suma('cogombre', 1)), true )
    })

})
