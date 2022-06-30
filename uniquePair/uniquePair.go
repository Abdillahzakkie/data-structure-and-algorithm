package uniquePair

import "fmt"

func UniquePair(arr1, arr2 []int) string {
	// create an tap to map the first array into
	tally := map[int]int{}
	for _, value := range arr1 {
		tally[value] = value
	}

	// loops through the second array and checks if the current
	// index exists in the tally map.
	// if true returns the unique pair found
	for _, value := range arr2 {
		if value, ok := tally[value]; ok {
			if !ok {
				continue
			}
			return fmt.Sprintf("Found pair: %v\n", value)
		}
	}
	// If no unique pairs were found return the message below
	return fmt.Sprintln("No matching pair found")
}