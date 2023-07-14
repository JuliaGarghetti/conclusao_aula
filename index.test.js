
const test = require('tape')
const funcicms = require('./icms.sp')
const funcporc = require('./index')
const funcletraz = require('./teste')


test ('Valida icms', (t) => {
    t.assert(funcicms.calcularICMS(100) === 18, "validacao 01")
    t.end()
})

test ('Valida porcentagem', (t) => {
    t.assert(funcporc.calcularTrintaPorcento(100) === 30, "validacao 02")
    t.end()
}) 

test ('Valida letra Z', (t) => {
    t.assert(funcletraz.validarPrimeiraLetraZ("Z") === true, "validacao 03")
    t.end()
}) 