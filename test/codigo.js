const Gerente = require('../gerente.js');

QUnit.module('gerente');

QUnit.test('Prueba', assert => {
  assert.equal(1, 1, 'prueba generica');
});


QUnit.test('Prueba Gerente', assert => {
    var gerente = new Gerente();
    gerente.setNombreCompleto("Alvaro Rodriguez");
    assert.equal(gerente.getNombreCompleto(), "Alvaro Rodriguez", 'prueba nombre');
  });


