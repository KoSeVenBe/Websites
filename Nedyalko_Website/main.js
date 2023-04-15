function showPopup(imgSrc) {
    var popup = document.getElementById("popup");
    var fullImg = document.getElementById("full-img");
    fullImg.src = imgSrc;
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}