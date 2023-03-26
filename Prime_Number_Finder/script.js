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