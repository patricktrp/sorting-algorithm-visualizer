import { Algorithms } from "./algorithms/constants";
import { bubbleSort } from './algorithms/bubblesort';
import { insertionSort } from "./algorithms/insertion-sort";
import { selectionSort } from "./algorithms/selection-sort";

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
            break;
        case Algorithms.HEAP_SORT:
            break;
        case Algorithms.QUICK_SORT:
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