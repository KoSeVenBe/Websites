

function playAudioBSP(url) {
    var audio = document.getElementById("audioBSP");
    audio.play();
    setTimeout(function() {
      window.location.href = url;
    }, audio.duration * 1000);
  }
  
  function playAudioISTINATA(url) {
    var audio = document.getElementById("audioISTINATA");
    audio.play();
    setTimeout(function() {
      window.location.href = url;
    }, audio.duration * 1000);
  }
  