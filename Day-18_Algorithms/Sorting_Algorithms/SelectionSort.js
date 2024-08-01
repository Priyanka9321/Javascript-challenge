// Task 2
console.log("implementing the Selection sort algorithm");
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {

        // Assume the minimum is the first element in the unsorted portion
        let minIndex = i;

        // Iterate through the unsorted portion of the array
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
console.log("Original array:", numbers);

const sortedArray = selectionSort(numbers);
console.log("Sorted array:", sortedArray);