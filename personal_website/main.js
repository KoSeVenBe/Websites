setTimeout(function() {
    document.querySelector('.main').classList.add('show');
  }, 1000); /* delay in milliseconds */

function toggleDropdown() {
  var dropdown = document.getElementById("dropdown-menu");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
    dropdown.classList.add("dropdown-active");
  }
}
