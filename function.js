function getFirstElement(arr) {
    if (arr.length > 0) {
      return arr[0];
    } else {
      return "A tömb üres";
    }
  }
  
  const numbers = [1, 2, 3];
  const words = ["apple", "banana", "cherry"];
  const emptyArray = [];
  
  console.log(`First number: ${getFirstElement(numbers)}`);
  console.log(`First word: ${getFirstElement(words)}`);
  console.log(`First element of empty array: ${getFirstElement(emptyArray)}`);
  