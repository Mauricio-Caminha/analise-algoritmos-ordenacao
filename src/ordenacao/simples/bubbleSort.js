function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
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
      break; // Se não houve trocas nesta iteração, o array já está ordenado
    }
  }
  return arr;
}
module.exports = {
  bubbleSort,
  improvedBubbleSort
}