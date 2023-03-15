function playAudio(audioUrl, url) {
    var audio = new Audio(audioUrl);
    audio.play();
    setTimeout(function() {
      window.location.href = url;
    }, audio.duration * 1000);
  }
  