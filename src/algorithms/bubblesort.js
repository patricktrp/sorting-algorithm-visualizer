import { AnimationTypes } from "../animations";
import { swap } from "../utils/array";

export const bubbleSort = (arr) => {
    const animations = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let isAlreadySorted = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            animations.push({
                type: AnimationTypes.COLOR, coloring: [
                    { index: j, color: 'salmon' },
                    { index: j + 1, color: 'salmon' }
                ]
            });
            animations.push({ type: AnimationTypes.COLOR_RESET_BY_INDEXES, indexes: [j, j + 1] });

            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                animations.push({ type: AnimationTypes.SWAP, indexes: [j, j + 1] })
                isAlreadySorted = false;
            }
        }
        if (isAlreadySorted) break;
    }

    return animations;
}