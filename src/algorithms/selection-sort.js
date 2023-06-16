import { AnimationTypes } from "../animations";
import { colors } from "../theme";
import { swap } from "../utils/array";

export const selectionSort = (arr) => {
    const animations = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let smallestIdx = i;
        animations.push({ type: AnimationTypes.COLOR, coloring: [{ index: i, color: colors.first }]})
        for (let j = i + 1; j < arr.length; j++) {
            animations.push({ type: AnimationTypes.COLOR, coloring: [{ index: j, color: colors.second }], isComparison: true})
            animations.push({ type: AnimationTypes.COLOR_RESET_BY_INDEXES, indexes: [j] });
            if (arr[j] < arr[smallestIdx]) {
                smallestIdx = j;
            }
        }
        if (i !== smallestIdx) {
            animations.push({ type: AnimationTypes.COLOR, coloring: [{ index: smallestIdx, color: colors.first }]})
            animations.push({
                type: AnimationTypes.SWAP,
                indexes: [i, smallestIdx]
            })
            swap(arr, i, smallestIdx);
            animations.push({ type: AnimationTypes.COLOR_RESET_BY_INDEXES, indexes: [smallestIdx] });
        }
        animations.push({ type: AnimationTypes.COLOR, coloring: [{ index: i, color: colors.fourth }]})
    }
    animations.push({ type: AnimationTypes.COLOR, coloring: [{ index: arr.length-1, color: colors.fourth }]})

    return animations;
}