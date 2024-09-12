function printElements(arr) {
    if (arr.length > 0) {
      arr.forEach((element, index) => {
        console.log(`Element ${index + 1}: ${element}`);
      });
    } else {
      console.log("The array is empty.");
    }
  }
  
  const numbers = [1, 2, 3];
  const words = ["apple", "banana", "cherry"];
  
  console.log("Numbers:");
  printElements(numbers);
  
  console.log("Words:");
  printElements(words);
  