const {
  criaArrayOrdenadoSemDuplicatas,
  criaArrayInversamenteOrdenadoSemDuplicatas,
  criaArrayQuaseOrdenadoSemDuplicatas,
  criaArrayAleatorioSemDuplicatas,
  analisaTempoConsumo
} = require("./src/utils/utils");

const {
  mergeSort,
  improvedMergeSort
} = require("./src/ordenacao/complexa/mergeSort");

const {
  quickSort,
  improvedQuickSort
} = require("./src/ordenacao/complexa/quickSort");
const { heapSort, improvedHeapSort } = require("./src/ordenacao/complexa/heapSort");

function testaAlgoritimos() {

  const length = 500000;
  const min = 0;

  console.log('### Array Ordenado ###\n')
  // analisaTempoConsumo(criaArrayOrdenadoSemDuplicatas(length, min, length), quickSort, 'Quick Sort');
  // analisaTempoConsumo(criaArrayOrdenadoSemDuplicatas(length, min, length), improvedInsertionSort, 'Improved Insertion Sort');

  console.log('----------------------------------------------------------------------------')

  console.log('\n### Array Ordenado Inversamente ###\n')
  // analisaTempoConsumo(criaArrayInversamenteOrdenadoSemDuplicatas(length, min, length), quickSort, 'Quick Sort');
  // analisaTempoConsumo(criaArrayInversamenteOrdenadoSemDuplicatas(length, min, length), improvedInsertionSort, 'Improved Insertion Sort');
  // 
  console.log('----------------------------------------------------------------------------')

  console.log('\n### Array Quase Ordenado ###\n')
  // analisaTempoConsumo(criaArrayQuaseOrdenadoSemDuplicatas(length, length / 2), quickSort, 'Quick Sort');
  // analisaTempoConsumo(criaArrayQuaseOrdenadoSemDuplicatas(length, length / 2), improvedInsertionSort, 'Improved Insertion Sort');

  console.log('----------------------------------------------------------------------------')

  console.log('\n### Array Aleatorio ###\n')
  analisaTempoConsumo(criaArrayAleatorioSemDuplicatas(length, min, length), mergeSort, 'Heap Sort');
  analisaTempoConsumo(criaArrayAleatorioSemDuplicatas(length, min, length), improvedMergeSort, 'Improved Heap Sort');
  console.log('----------------------------------------------------------------------------')
}

testaAlgoritimos();

/*
const {
  bubbleSort,
  improvedBubbleSort
} = require("./src/ordenacao/simples/bubbleSort");

const {
  selectionSort,
  improvedSelectionSort
} = require("./src/ordenacao/simples/selectionSort");

const {
  insertionSort,
  improvedInsertionSort
} = require("./src/ordenacao/simples/insertionSort");

const {
  heapSort,
  improvedHeapSort
} = require("./src/ordenacao/complexa/heapSort");

*/