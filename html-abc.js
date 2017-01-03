var cur = 0
var abc = document.getElementById('abc')

window.onkeydown = e => {
  // quit if video is playing, or out of seq
  if (!abc.paused || cur >= seq.length) return
  // e.code: Space, KeyA, KeyB...
  if (e.code === seq[cur].key) {
    // togglePlay(abc)
    abc.play()
    setTimeout(
      () => abc.pause(),
      seq[cur].next
    )
    cur++
  }
}

const seq = [
  {key: 'KeyA', next: 2000},
  {key: 'KeyB', next: 2000},
  {key: 'KeyC', next: 2000}
]

function togglePlay (video) {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
