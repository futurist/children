var cur = 0
var abc = document.getElementById('abc')
var yeah = document.getElementById('yeah')

window.onkeydown = e => {
  // quit if video is playing, or out of seq
  if (!abc.paused || cur >= seq.length) return
  // e.code: Space, KeyA, KeyB...
  if (e.code === seq[cur].key) {
    // togglePlay(abc)
    next()
  }
}

function next() {
  yeah.play()
  yeah.onended = v => {
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
