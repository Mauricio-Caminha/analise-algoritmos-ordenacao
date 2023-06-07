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

module.exports = {
  selectionSort,
  improvedSelectionSort
}