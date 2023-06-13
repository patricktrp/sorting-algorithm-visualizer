import { AnimationTypes } from "../animations";
import { swap } from "../utils/array";

export const insertionSort = (arr) => {
    const animations = [];

    for (let i = 1; i < arr.length; i++) {
        let j = i;
        animations.push({
            type: AnimationTypes.COLOR,
            coloring: [{ index: j, color: 'red' }, { index: j - 1, color: 'red' }],
            isComparison: true
        });
        animations.push({
            type: AnimationTypes.COLOR_RESET_BY_INDEXES,
            indexes: [j, j - 1]
        });
        while (j > 0 && arr[j] < arr[j - 1]) {
            if (j !== i) {
                animations.push({
                    type: AnimationTypes.COLOR,
                    coloring: [{ index: j, color: 'red' }, { index: j - 1, color: 'red' }],
                    isComparison: true
                });
            }
            animations.push({
                type: AnimationTypes.SWAP,
                indexes: [j, j - 1]
            });
            swap(arr, j, j - 1);
            if (j !== i) {
                animations.push({
                    type: AnimationTypes.COLOR_RESET_BY_INDEXES,
                    indexes: [j, j - 1]
                });
            }
            j--;
        }
    }

    return animations;
}