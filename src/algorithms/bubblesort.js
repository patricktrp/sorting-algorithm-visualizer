import { AnimationTypes } from "../animations";
import { swap } from "../utils/array";
import { colors } from '../theme';

export const bubbleSort = (arr) => {
    const animations = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let isAlreadySorted = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            animations.push({ type: AnimationTypes.COLOR, coloring: [{ index: j, color: colors.first }, { index: j + 1, color: colors.first }], isComparison: true })
            if (arr[j] > arr[j + 1]) {
                animations.push({ type: AnimationTypes.COLOR, coloring: [{ index: j, color: colors.third }, { index: j + 1, color: colors.third }], isComparison: true })
                swap(arr, j, j + 1);
                animations.push({ type: AnimationTypes.SWAP, indexes: [j, j + 1] })
                isAlreadySorted = false;
            }
            animations.push({ type: AnimationTypes.COLOR_RESET_BY_INDEXES, indexes: [j, j + 1] });
        }
        if (isAlreadySorted) {
            let coloring = [];
            for (let k = 0; k < arr.length - i; k++) {
                coloring.push({ index: k, color: colors.fourth });
                animations.push({ type: AnimationTypes.COLOR, coloring });
            }
            break;
        } else {
            animations.push({ type: AnimationTypes.COLOR, coloring: [{ index: arr.length - 1 - i, color: colors.fourth }] });
        }
    }

    return animations;
}