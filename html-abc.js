var abc = document.getElementById('abc')
abc.play()

window.onkeydown = e => {
  console.log(e)
  if (e.code = 'Space') {
    // togglePlay(abc)
  }
}

abc.addEventListener(
  'timeupdate',
  function (e) {
    time.innerHTML = abc.currentTime
  },
  true
)

function togglePlay (video) {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
