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

module.exports = {
  insertionSort,
  improvedInsertionSort
}