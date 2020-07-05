const assert = require('assert')
const operacions = require('./operacions')

it('suma correctament', () => {
    assert.equal( operacions.suma(100,25), 125 )
})