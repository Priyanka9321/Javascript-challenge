// DAY 18: Algorithms
// Activity 1 : Sorting Algorithms
// Task 1
console.log("implementing the Bubble sort algorithm");
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        // Traverse through 0 to n-i-1
        for (let j = 0; j < arr.length - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }  
        // If no two elements were swapped by inner loop, then break
        if (!swapped) break;     
    }
    return arr;
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
console.log('Original array:', numbers);
console.log('Sorted array:', sortedNumbers);