function merge(arr, left, mid, right) { // Função para mesclar dois subarrays ordenados
  const n1 = mid - left + 1; // Tamanho do primeiro subarray
  const n2 = right - mid; // Tamanho do segundo subarray

  // Cria arrays temporários para armazenar os elementos
  const L = new Array(n1);
  const R = new Array(n2);

  // Copia os dados para os arrays temporários
  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }

  // Índices iniciais dos subarrays
  let i = 0;
  let j = 0;

  let k = left;   // Índice inicial do subarray mesclado

  while (i < n1 && j < n2) {   // Mescla os subarrays em ordem crescente
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {   // Copia os elementos restantes do subarray esquerdo, se houver
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {   // Copia os elementos restantes do subarray direito, se houver
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2); // Encontra o ponto médio para dividir o array em subarrays

    // Chama a função mergeSort para os subarrays da esquerda e direita
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);  // Mescla os subarrays ordenados
  }
}

// Melhoria
function improvedMerge(arr, left, mid, right, temp) { // Função para mesclar dois subarrays ordenados
  const n1 = mid - left + 1; // Tamanho do primeiro subarray
  const n2 = right - mid; // Tamanho do segundo subarray

  // Copia os dados para o array temporário
  for (let i = 0; i < n1; i++) {
    temp[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    temp[n1 + j] = arr[mid + 1 + j];
  }

  let i = 0;   // Índices iniciais dos subarrays
  let j = 0;

  let k = left;   // Índice inicial do subarray mesclado

  while (i < n1 && j < n2) {   // Mescla os subarrays em ordem crescente
    if (temp[i] <= temp[n1 + j]) {
      arr[k] = temp[i];
      i++;
    } else {
      arr[k] = temp[n1 + j];
      j++;
    }
    k++;
  }

  while (i < n1) {  // Copia os elementos restantes do subarray esquerdo, se houver
    arr[k] = temp[i];
    i++;
    k++;
  }

  while (j < n2) {   // Copia os elementos restantes do subarray direito, se houver
    arr[k] = temp[n1 + j];
    j++;
    k++;
  }
}

function improvedMergeSort(arr, left, right, temp) {
  if (!Array.isArray(arr)) {
    throw new Error("O argumento fornecido não é um array.");
  }

  const length = arr.length;

  if (length <= 1) {
    return arr;
  }

  if (!temp) {
    temp = new Array(length);
  }

  if (left === undefined) {
    left = 0;
  }
  if (right === undefined) {
    right = length - 1;
  }

  if (left < right) { // Verifica se o array já está ordenado antes da mesclagem
    if (arr[left] <= arr[right]) {
      return arr;
    }

    const mid = Math.floor((left + right) / 2); // Encontra o ponto médio para dividir o array em subarrays

    // Chama a função mergeSort para os subarrays da esquerda e direita
    improvedMergeSort(arr, left, mid, temp); 
    improvedMergeSort(arr, mid + 1, right, temp);

    improvedMerge(arr, left, mid, right, temp);  // Mescla os subarrays ordenados
  }

  return arr;
}

module.exports = {
  mergeSort,
  improvedMergeSort
}