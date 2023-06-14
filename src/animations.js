import { Algorithms } from "./algorithms/constants";
import { bubbleSort } from './algorithms/bubblesort';
import { insertionSort } from "./algorithms/insertion-sort";
import { selectionSort } from "./algorithms/selection-sort";
import { mergeSort } from "./algorithms/mergesort";
import { heapSort } from "./algorithms/heapsort";
import { quickSort } from "./algorithms/quicksort";

export const getAnimations = (algorithm, array) => {
    let animations;

    switch (algorithm) {
        case Algorithms.BUBBLE_SORT:
            animations = bubbleSort(array);
            break;
        case Algorithms.INSERTION_SORT:
            animations = insertionSort(array);
            break;
        case Algorithms.SELECTION_SORT:
            animations = selectionSort(array);
            break;
        case Algorithms.MERGE_SORT:
            animations = mergeSort(array);
            break;
        case Algorithms.HEAP_SORT:
            animations = heapSort(array);
            break;
        case Algorithms.QUICK_SORT:
            animations = quickSort(array);
            break;
        default:
            break;
    }

    return animations;
}

export const AnimationTypes = {
    SWAP: "SWAP",
    COLOR: "COLOR",
    COLOR_RESET: "COLOR_RESET",
    COLOR_RESET_BY_INDEXES: "COLOR_RESET_BY_INDEXES"
}

export const Statistics = {
    SWAP: "SWAP",
    COMPARISON: "COMPARISON"
}