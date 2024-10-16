// 1. Concatenate arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: ["Cecile", "Lone", "Emil", "Tobias", "Linus"]

// 2. Add element to array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// 3. Add elements to the beginning of the array
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1); // Output: [4, 5, 1, 2, 3]

// 4. Remove the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango"]

// 5. Remove the first element from the array
const array2 = [1, 2, 3];
array2.shift();
console.log(array2); // Output: [2, 3]

// 6. Sort the array alphabetically
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Kiwi", "Mango", "Orange"]

// 7. Create a new array containing a portion of the fruits array
const newFruits = fruits.slice(1, 3);
console.log(newFruits); // Output: ["Banana", "Kiwi"]

// 8. Insert and remove elements in the months array
const months = ["January", "February", "March"];
months.splice(1, 1, "April", "May"); // Remove February and insert April and May
console.log(months); // Output: ["January", "April", "May", "March"]
