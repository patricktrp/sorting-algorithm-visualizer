const createArrayBySize = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

const shuffleArrayInPlace = (array) => {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

export const createRandomArrayBySize = (size) => {
    const array = createArrayBySize(size);
    shuffleArrayInPlace(array);
    return array;
}

export const swap = (arr, x, y) => {
    let tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
    return arr;
}