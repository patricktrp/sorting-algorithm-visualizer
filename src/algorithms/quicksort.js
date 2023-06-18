import { AnimationTypes } from "../animations";
import { colors } from "../theme";
import { swap } from '../utils/array';

export const quickSort = (arr) => {
    const animations = [];
    quickSortHelper(arr, 0, arr.length - 1, animations);
    return animations;
}

const quickSortHelper = (arr, left, right, animations) => {
    let index = partition(arr, left, right, animations);
    if (left < index - 1) {
        quickSortHelper(arr, left, index - 1, animations);
    }
    animations.push({type: AnimationTypes.COLOR_RESET_BY_INDEXES, indexes: [index]});
    if (index < right) {
        quickSortHelper(arr, index, right, animations);
    }
    animations.push({type: AnimationTypes.COLOR_RESET_BY_INDEXES, indexes: [index]});
    return arr;
}

const partition = (arr, left, right, animations) => {
    let pivotIdx = Math.floor((right + left) / 2);
    let pivot = arr[pivotIdx];
    animations.push({type: AnimationTypes.COLOR, coloring: [{index: pivotIdx, color: colors.first}]});

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            if (left !== right) {
                animations.push({type: AnimationTypes.SWAP, indexes: [left, right]});
                swap(arr, left, right);
            }
            left++;
            right--;
        }
    }
    return left;
}

