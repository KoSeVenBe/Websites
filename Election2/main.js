function playAudioBSP(url) {
    var audio = document.getElementById("audioBSP");
    audio.play();
    setTimeout(function() {
      window.location.href = url;
    }, audio.duration * 1000);
  }
  