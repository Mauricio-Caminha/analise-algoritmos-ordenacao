function selectionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

function improvedSelectionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      var temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

/*
1. Nesta melhoria, evitamos a troca entre o elemento atual e o menor elemento encontrado se eles já estiverem na posição correta. 
Para isso, trocamos o elemento mínimo diretamente com o elemento na posição i, em vez de trocar o elemento atual com o mínimo.

Essa melhoria reduz o número total de trocas realizadas durante o algoritmo de Selection Sort e pode melhorar o desempenho em casos onde 
a quantidade de trocas é significativa.
*/

module.exports = {
  selectionSort,
  improvedSelectionSort
}