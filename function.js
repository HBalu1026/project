function printElements(arr) {
    if (arr.length > 0) {
      arr.forEach((element, index) => {
        console.log(`Element ${index + 1}: ${element}`);
      });
    } else {
      return "A tömb üres";
    }
  }
  
  const numbers = [1, 2, 3];
  const words = ["apple", "banana", "cherry"];
  const emptyArray = [];
  
  console.log("Numbers:");
  printElements(numbers);
  
  console.log("Words:");
  printElements(words);
  console.log(`First number: ${getFirstElement(numbers)}`);
  console.log(`First word: ${getFirstElement(words)}`);
  console.log(`First element of empty array: ${getFirstElement(emptyArray)}`);
  