const {
  criaArrayOrdenadoSemDuplicatas,
  criaArrayInversamenteOrdenadoSemDuplicatas,
  criaArrayQuaseOrdenadoSemDuplicatas,
  criaArrayAleatorioSemDuplicatas,
  analisaTempoConsumo,
  mergeSort,
  improvedMergeSort,
  quickSort,
  improvedQuickSort,
  heapSort,
  improvedHeapSort,
  bubbleSort,
  improvedBubbleSort,
  selectionSort,
  improvedSelectionSort,
  insertionSort,
  improvedInsertionSort
} = require("./src/utils/index");


function testaAlgoritmos() {

  const length = 1000;
  const min = 0;

  console.log('### Array Ordenado ###\n')
  analisaTempoConsumo(criaArrayOrdenadoSemDuplicatas(length, min, length), quickSort, 'Quick Sort');
  analisaTempoConsumo(criaArrayOrdenadoSemDuplicatas(length, min, length), improvedQuickSort, 'Improved Quick Sort');

  console.log('----------------------------------------------------------------------------')

  console.log('\n### Array Ordenado Inversamente ###\n')
  analisaTempoConsumo(criaArrayInversamenteOrdenadoSemDuplicatas(length, min, length), quickSort, 'Quick Sort');
  analisaTempoConsumo(criaArrayInversamenteOrdenadoSemDuplicatas(length, min, length), improvedQuickSort, 'Improved Quick Sort');
  
  console.log('----------------------------------------------------------------------------')

  console.log('\n### Array Quase Ordenado ###\n')
  analisaTempoConsumo(criaArrayQuaseOrdenadoSemDuplicatas(length, length / 2), quickSort, 'Quick Sort');
  analisaTempoConsumo(criaArrayQuaseOrdenadoSemDuplicatas(length, length / 2), improvedQuickSort, 'Improved Quick Sort');

  console.log('----------------------------------------------------------------------------')

  console.log('\n### Array Aleatorio ###\n')
  analisaTempoConsumo(criaArrayAleatorioSemDuplicatas(length, min, length), quickSort, 'Quick Sort');
  analisaTempoConsumo(criaArrayAleatorioSemDuplicatas(length, min, length), improvedQuickSort, 'Improved Quick Sort');
  console.log('----------------------------------------------------------------------------')
}

testaAlgoritmos();