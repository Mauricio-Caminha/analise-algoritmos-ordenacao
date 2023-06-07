const {
  criaArrayOrdenadoSemDuplicatas,
  criaArrayInversamenteOrdenadoSemDuplicatas,
  criaArrayQuaseOrdenadoSemDuplicatas,
  criaArrayAleatorioSemDuplicatas,
  analisaTempoConsumo
} = require("./utils")

const {
  mergeSort,
  improvedMergeSort
} = require("../ordenacao/complexa/mergeSort");

const {
  quickSort,
  improvedQuickSort
} = require("../ordenacao/complexa/quickSort");

const {
  heapSort,
  improvedHeapSort
} = require("../ordenacao/complexa/heapSort");

const {
  bubbleSort,
  improvedBubbleSort
} = require("../ordenacao/simples/bubbleSort");

const {
  selectionSort,
  improvedSelectionSort
} = require("../ordenacao/simples/selectionSort");

const {
  insertionSort,
  improvedInsertionSort
} = require("../ordenacao/simples/insertionSort");

module.exports = {
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
}