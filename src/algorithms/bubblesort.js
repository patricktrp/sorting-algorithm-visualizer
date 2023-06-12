import { swap } from "../utils/array";

export const bubbleSort = (arr) => {
    const animations = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let isAlreadySorted = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isAlreadySorted = false;
            }
        }
        if (isAlreadySorted) break;
    }
    
    return animations;
}