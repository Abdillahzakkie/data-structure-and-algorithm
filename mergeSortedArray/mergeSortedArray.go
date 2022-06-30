package mergeSortedArray

import (
	"math"
)

func MergeSortedArray(arr1, arr2 []int) (mergedValues []int) {
	// create an empty array that will be filled 
	// with the merge data
	// mergedValues := []int{}

	// get the length of both inputs
	arr1Length := len(arr1)
	arr2Length := len(arr2)

	// validates input
	switch {
		// returns arr2 if arr1 length is zero
		case arr1Length == 0:
			return arr2
		// returns arr1 if arr2 length is zero
		case arr2Length == 0:
			return arr1
	}

	// get the minLength of both of the input should in case they're not of the same length
	minLength := int(math.Min(float64(arr1Length), float64(arr2Length)))

	// loop through the inputs using the minLength as the exist count param
	for i := 0; i < minLength; i++ {
		switch {
			// checks if the current index of arr1 is greater than arr2
			// if true insert current index of arr1 before arr2 index
			case arr1[i] < arr2[i]:
				mergedValues = append(mergedValues, arr1[i], arr2[i])
			// insert current index of arr2 before arr1
			default:
				mergedValues = append(mergedValues,  arr2[i], arr1[i])
		}
	}

	// checks if arr1 and arr2 are not equal
	if arr1Length > arr2Length {
		// spread the remaining values in arr1 into the mergedValues
		mergedValues = append(mergedValues, arr1[arr2Length:]...)
	} else if arr1Length < arr2Length {
		// spread the remaining values in arr2 into the mergedValues
		mergedValues = append(mergedValues, arr2[arr1Length:]...)
	}

	return mergedValues
}