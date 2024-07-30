// Task 3
console.log("implementing the Quick sort algorithm");
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
console.log("Original array:", numbers);

const sortedArray = quickSort(numbers);
console.log("Sorted array:", sortedArray);