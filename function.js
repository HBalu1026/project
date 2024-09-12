function getFirstElement(arr) {
    if (arr.length > 0) {
      return arr[0];
    } else {
      return undefined;
    }
  }
  
  const numbers = [1, 2, 3];
  const words = ["apple", "banana", "cherry"];
  
  console.log(`First number: ${getFirstElement(numbers)}`);
  console.log(`First word: ${getFirstElement(words)}`);
  
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