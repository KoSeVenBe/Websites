function checkPrime() {
    var n = document.getElementById("number").value;
    n = parseInt(n);
    var isPrime = true;
    // check if n is equal to 1
    if (n === 1) {
      alert("1 is neither prime nor composite number.");
    }
    // check if n is greater than 1
    else if (n > 1) {
      // looping through 2 to square root of n
      for (var i = 2; i <= Math.sqrt(n); i++) {
        // check if n is divisible by i
        if (n % i == 0) {
          isPrime = false;
          break;
        }
      }
      // display result
      if (isPrime) {
        alert(n + " is a prime number.");
      } else {
        alert(n + " is not a prime number.");
      }
    }
  }

  function processInput() {
    let inputString = document.getElementById("inputValues").value;
    let values_lst = inputString.split(" ").map(Number);
    let a = values_lst[0];
    let b = values_lst[1];
    let c = values_lst[2];
  
    if (a > 0 && b > 0 && c > 0) {
      console.log(`Equation: ${a}x^2 + ${b}x + ${c} = 0`);
    } else if (b < 0) {
      console.log(`Equation: ${a}x^2 - ${-b}x + ${c} = 0`);
    } else if (c < 0) {
      console.log(`Equation: ${a}x**2 + ${b}x - ${-c} = 0`);
    }
  
    let d = b ** 2 - 4 * a * c;
    console.log(d);
  
    if (d > 0) {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);
      alert(x1, x2);
    } else if (d == 0) {
      let x1 = -b / (2 * a);
      alert(x1);
    } else {
      console.log("Discriminant is negative");
    }
  }