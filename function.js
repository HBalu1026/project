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
feature/utility-functions
  
  export function factorial(n) {
    // Ellenőrizzük, hogy a szám nem negatív-e
    if (n < 0) {
      return "A szám nem lehet negatív!";
    }
    // 0! = 1
    if (n === 0) {
      return 1;
    }
    // Faktoriális kiszámítása rekurzív módon
    return n * factorial(n - 1);
  }
  
  console.log(`Factorial of 5: ${factorial(5)}`); // 120

  console.log(`First element of empty array: ${getFirstElement(emptyArray)}`);
  
 main
