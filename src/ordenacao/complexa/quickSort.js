function swap(arr, i, j) { // Função para trocar dois elementos em um array
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partition(arr, low, high) { // Função para colocar o pivô na posição correta e retornar seu índice
  const pivot = arr[high]; // Escolhe o último elemento como pivô
  let i = low - 1; // Índice do menor elemento

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {    // Se o elemento atual for menor ou igual ao pivô
      i++;
      swap(arr, i, j); // Troca os elementos
    }
  }

  swap(arr, i + 1, high); // Coloca o pivô na posição correta
  return i + 1; // Retorna o índice do pivô
}

function quickSort(arr) {
  const stack = [];
  let low = 0;
  let high = arr.length - 1;

  stack.push({ low, high });

  while (stack.length) {
    const { low, high } = stack.pop();

    const pivotIndex = partition(arr, low, high);

    if (pivotIndex - 1 > low) {
      stack.push({ low, high: pivotIndex - 1 });
    }

    if (pivotIndex + 1 < high) {
      stack.push({ low: pivotIndex + 1, high });
    }
  }

  return arr;
}

// Melhoria
function choosePivot(arr, low, high) { // Escolhe o pivô aleatoriamente
  const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
  swap(arr, randomIndex, high);
}

function improvedQuickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Utiliza Insertion Sort para subarrays pequenos
    if (high - low + 1 <= 10) {
      return insertionSort(arr, low, high);
    }

    choosePivot(arr, low, high); // Escolhe o pivô
    const pivotIndex = partition(arr, low, high); // Obtém o índice do pivô

    // Chama a função quickSort recursivamente para as partições à esquerda e à direita do pivô
    improvedQuickSort(arr, low, pivotIndex - 1);
    improvedQuickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

function insertionSort(arr, low, high) {
  for (let i = low + 1; i <= high; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= low && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

module.exports = {
  quickSort,
  improvedQuickSort
}