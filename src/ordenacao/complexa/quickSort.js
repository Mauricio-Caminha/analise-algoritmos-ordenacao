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

function quickSort(arr, low = 0, high = arr.length - 1) { // Função principal do Quick Sort
  if (low < high) {
    const pivotIndex = partition(arr, low, high); // Obtém o índice do pivô

    // Chama a função quickSort recursivamente para as partições à esquerda e à direita do pivô
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

/*

1. Escolha do pivô: O algoritmo atualmente escolhe o último elemento do array como pivô. 
No entanto, em determinados casos, isso pode levar a um desempenho ruim, especialmente quando o array já está parcialmente ordenado. 
Uma abordagem alternativa é escolher um pivô aleatório ou utilizar uma técnica como o "pivô do meio" (escolher o elemento do meio do array como pivô) para melhorar o desempenho em cenários específicos.

2. Limite para utilização do Insertion Sort: Para pequenos subarrays, 
o Quick Sort pode ter um desempenho inferior ao Insertion Sort devido ao overhead da recursão. 
Portanto, uma melhoria possível é adicionar uma condição de parada recursiva para usar o Insertion Sort quando o tamanho do subarray é menor que um determinado limite.

3. Otimização para arrays com elementos duplicados: 
O algoritmo atual não lida eficientemente com arrays que possuem muitos elementos duplicados. 
Isso pode levar a um desempenho ruim em casos onde há uma quantidade significativa de duplicatas. 
Uma possível melhoria é usar o algoritmo "Dutch National Flag" para particionar o array em três seções (menor que o pivô, igual ao pivô, maior que o pivô) e aplicar o Quick Sort apenas nas seções menor e maior.

*/

// Função para escolher o pivô
function choosePivot(arr, low, high) { // Escolhe o pivô aleatoriamente
  const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
  swap(arr, randomIndex, high);
}

// Função principal do Quick Sort
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

// Insertion Sort para subarrays pequenos
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