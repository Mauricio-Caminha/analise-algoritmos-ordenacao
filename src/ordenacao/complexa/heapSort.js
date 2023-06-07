function heapify(arr, n, i) { // Função para criar um heap máximo
  let largest = i; // Inicializa o maior como raiz
  let left = 2 * i + 1; // Índice do filho esquerdo
  let right = 2 * i + 2; // Índice do filho direito

  if (left < n && arr[left] > arr[largest]) {   // Se o filho esquerdo é maior que a raiz
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {   // Se o filho direito é maior que a raiz
    largest = right;
  }

  if (largest !== i) {   // Se o maior não for a raiz
    [arr[i], arr[largest]] = [arr[largest], arr[i]];  // Troca a raiz com o maior elemento

    heapify(arr, n, largest);  // Recursivamente faz heapify na subárvore afetada
  }
}

function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {   // Constrói um heap máximo
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {   // Extrai os elementos do heap, um por um
    [arr[0], arr[i]] = [arr[i], arr[0]];     // Move a raiz atual para o final

    heapify(arr, i, 0);     // Chama a função heapify na heap reduzida
  }

  return arr;
}

/*
1. Utilize a desestruturação de arrays para trocar os valores dos elementos. Em vez de usar [arr[i], arr[largest]] = [arr[largest], arr[i]];
você pode usar a desestruturação para trocar os valores diretamente: [arr[i], arr[largest]] = [arr[largest], arr[i]];. 
Isso torna o código mais legível.

2. Adicione verificação de tipo e validação de entrada para garantir que o argumento fornecido seja um array numérico válido. 
Você pode adicionar uma verificação no início da função heapSort para verificar se arr é um array e se todos os elementos são números.
Isso evita erros e resultados inesperados.

*/

function improvedHeapify(arr, n, i) { // Função para criar um heap máximo
  let largest = i; // Inicializa o maior como raiz
  let left = 2 * i + 1; // Índice do filho esquerdo
  let right = 2 * i + 2; // Índice do filho direito

  if (left < n && arr[left] > arr[largest]) {   // Se o filho esquerdo é maior que a raiz
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {   // Se o filho direito é maior que a raiz
    largest = right;
  }

  if (largest !== i) {   // Se o maior não for a raiz
    improvedSwap(arr, i, largest);   // Troca a raiz com o maior elemento

    improvedHeapify(arr, n, largest);   // Recursivamente faz heapify na subárvore afetada
  }
}

function improvedSwap(arr, i, j) { // Função auxiliar para trocar elementos de posição no array
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function improvedHeapSort(arr) { // Função principal do Heap Sort
  if (!Array.isArray(arr)) {
    throw new Error("O argumento fornecido não é um array.");
  }

  const n = arr.length;

  if (!arr.every((element) => typeof element === "number")) { // Verifica se todos os elementos do array são números
    throw new Error("O array contém elementos inválidos.");
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {  // Constrói um heap máximo
    improvedHeapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) { // Extrai os elementos do heap, um por um
    improvedSwap(arr, 0, i); // Move a raiz atual para o final
    improvedHeapify(arr, i, 0);  // Chama a função heapify na heap reduzida
  }

  return arr;
}

module.exports = {
  heapSort,
  improvedHeapSort
}