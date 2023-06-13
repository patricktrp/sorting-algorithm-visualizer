import { swap } from "../utils/array";
import { AnimationTypes } from "../animations";

export const selectionSort = (arr) => {
    const animations = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let smallestIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestIdx]) {
                smallestIdx = j;
            }
        }
        if (i !== smallestIdx) {
            animations.push({
                type: AnimationTypes.SWAP,
                indexes: [i, smallestIdx]
            })
            swap(arr, i, smallestIdx);
        }
    }

    return animations;
}