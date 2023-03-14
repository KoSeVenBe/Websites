let trust = parseInt(localStorage.getItem("trust")) || 0; // initialize trust from local storage, or default to 50

function increaseValue(amount) {
  trust += amount;
  document.getElementById("value").innerHTML = trust;
  localStorage.setItem("trust", trust); // save the new value of trust to local storage
}

function decreaseValue(amount) {
  trust -= amount;
  document.getElementById("value").innerHTML = trust;
  localStorage.setItem("trust", trust); // save the new value of trust to local storage
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("value").innerHTML = trust; // display the value of trust from local storage
});
