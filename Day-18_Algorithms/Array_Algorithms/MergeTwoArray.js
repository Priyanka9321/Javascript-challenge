// Task 9

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Traverse both arrays and append the smaller element to the mergedArray
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, append them
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, append them
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];

const mergedArray = mergeSortedArrays(array1, array2);
console.log("Merged array:", mergedArray);
