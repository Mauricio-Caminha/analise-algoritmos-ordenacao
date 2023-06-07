function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Trocar os elementos
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function improvedBubbleSort(arr) {
  var len = arr.length;
  var swapped;
  for (var i = 0; i < len - 1; i++) {
    swapped = false;
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Trocar os elementos
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      // Se não houve trocas nesta iteração, o array já está ordenado
      break;
    }
  }
  return arr;
}

/*
1. Otimização do loop externo: 
O algoritmo Bubble Sort realiza uma passagem completa pelo array em cada iteração do loop externo, mesmo que o array já esteja ordenado. 
Podemos adicionar uma verificação para verificar se houve alguma troca durante a iteração anterior. 
Se não houver trocas, significa que o array já está ordenado e podemos interromper o loop externo.

2. Otimização do loop interno:
O loop interno do Bubble Sort percorre todo o array em cada iteração, mesmo que a maior parte do array já esteja ordenada. 
Podemos ajustar o limite do loop interno para ignorar os elementos já ordenados no final do array a cada iteração.


Com essas otimizações, o algoritmo Bubble Sort será interrompido assim que o array estiver completamente ordenado, 
reduzindo o número de iterações desnecessárias. Isso melhora o desempenho do algoritmo, especialmente para arrays grandes.

*/

module.exports = {
  bubbleSort,
  improvedBubbleSort
}