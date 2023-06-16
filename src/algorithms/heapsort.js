import { AnimationTypes } from "../animations";
import { colors } from "../theme";
import { swap } from "../utils/array";

export const heapSort = (arr) => {
    const animations = [];
    buildHeap(arr, animations);

    for (let i = arr.length - 1; i >= 1; i--) {
        animations.push({
            type: AnimationTypes.SWAP,
            indexes: [i, 0]
        });
        swap(arr, i, 0);
        animations.push({type: AnimationTypes.COLOR, coloring: [{index: i, color: colors.fourth}]})
        heapifyDown(arr, 0, i, animations);
    }
    animations.push({type: AnimationTypes.COLOR, coloring: [{index: 0, color: colors.fourth}]})
    return animations;
}

const buildHeap = (arr, animations) => {
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        heapifyDown(arr, i, arr.length, animations);
    }
}

const heapifyDown = (arr, idx, n, animations) => {
    while (idx * 2 + 1 < n) {
        let leftChildIdx = idx * 2 + 1;
        let rightChildIdx = idx * 2 + 2;
        let largerChildIdx = leftChildIdx;
        if (rightChildIdx < n && arr[rightChildIdx] > arr[largerChildIdx]) {
            largerChildIdx = rightChildIdx;
        }


        animations.push({
            type: AnimationTypes.COLOR,
            coloring: [{index: idx, color: colors.first}, {index: largerChildIdx, color: colors.first}],
            isComparison: true
        });
        if (arr[idx] < arr[largerChildIdx]) {
            animations.push({
                type: AnimationTypes.SWAP,
                indexes: [idx, largerChildIdx]
            });
            swap(arr, idx, largerChildIdx);
            animations.push({ type: AnimationTypes.COLOR_RESET_BY_INDEXES, indexes: [idx, largerChildIdx] });
            idx = largerChildIdx;
        } else {
            animations.push({ type: AnimationTypes.COLOR_RESET_BY_INDEXES, indexes: [idx, largerChildIdx] });
            break;
        }
    }
}