const v8 = require('v8');

// Vetores de 1.000, 10.000, 50.000, 100.000, 500.000 e 1.000.000
function criaArrayOrdenadoSemDuplicatas(length, min, max) {
  var arr = [];
  var set = new Set();

  while (set.size < length) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    set.add(randomNum);
  }

  set.forEach(function (num) {
    arr.push(num);
  });

  arr.sort(function (a, b) {
    return a - b;
  });

  return arr;
}

function criaArrayInversamenteOrdenadoSemDuplicatas(length, min, max) {
  var arr = [];
  var set = new Set();

  while (set.size < length) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    set.add(randomNum);
  }

  set.forEach(function (num) {
    arr.push(num);
  });

  arr.sort(function (a, b) {
    return b - a;
  });

  return arr;
}

function criaArrayQuaseOrdenadoSemDuplicatas(length, partiallySortedLength) {
  var arr = new Set();

  for (var i = 1; i <= partiallySortedLength; i++) {
    arr.add(i);
  }

  while (arr.size < length) {
    var randomNum = Math.floor(Math.random() * length * 10) + 1;
    arr.add(randomNum);
  }

  return Array.from(arr);
}

function criaArrayAleatorioSemDuplicatas(length, min, max) {
  var arr = [];
  var set = new Set();

  while (set.size < length) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    set.add(randomNum);
  }

  set.forEach(function (num) {
    arr.push(num);
  });

  return arr;
}

function analisaTempoConsumo(arr, func, algoritimodeBuscaNome) {

  const estatisticasMemoriaAntes = v8.getHeapStatistics();

  console.time(`Tempo de execução da ${algoritimodeBuscaNome}`);

  func(arr);

  console.timeEnd(`Tempo de execução da ${algoritimodeBuscaNome}`);

  const estatisticasMemoriaDepois = v8.getHeapStatistics();

  const consumoDeMemoria = estatisticasMemoriaDepois.used_heap_size - estatisticasMemoriaAntes.used_heap_size;

  console.log(`Consumo de memória da ${algoritimodeBuscaNome}: ${consumoDeMemoria} bytes`);
}

module.exports = {
  criaArrayOrdenadoSemDuplicatas,
  criaArrayInversamenteOrdenadoSemDuplicatas,
  criaArrayQuaseOrdenadoSemDuplicatas,
  criaArrayAleatorioSemDuplicatas,
  analisaTempoConsumo
}