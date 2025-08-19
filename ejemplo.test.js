const esPar = require('./ejemplo');

console.assert(esPar(4) === true, '❌ Error: 4 no fue detectado como par');
console.assert(esPar(5) === false, '❌ Error: 5 no fue detectado como impar');

console.log('✅ Todos los tests pasaron');
