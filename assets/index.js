import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('.movie')
const btnPlay = document.querySelector('#play')
const btnMute = document.querySelector('#mute')

const player = new MediaPlayer({el: video, plugins: [
  new AutoPlay(), new AutoPause()
]})

btnPlay.onclick = () => player.togglePlay()
btnMute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(err => console.log(err.message))
}