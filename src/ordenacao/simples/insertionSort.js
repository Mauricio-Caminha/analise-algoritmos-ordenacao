function insertionSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var current = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function improvedInsertionSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var current = arr[i];
    var j = i - 1;
    var shouldShift = arr[j] > current;
    while (j >= 0 && shouldShift) {
      arr[j + 1] = arr[j];
      j--;
      shouldShift = arr[j] > current;
    }
    arr[j + 1] = current;
  }
  return arr;
}

/*
1. Otimização para sair do loop interno mais cedo: Ao invés de sempre verificar se arr[j] > current, 
você pode realizar essa verificação apenas uma vez e armazenar o resultado em uma variável booleana. 
Isso evita a comparação repetida dentro do loop.

*/
module.exports = {
  insertionSort,
  improvedInsertionSort
}