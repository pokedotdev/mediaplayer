import MediaPlayer from '../MediaPlayer'

export default class AutoPlay {
  run (player: MediaPlayer)  {
    if (!player.media.muted) player.media.muted = true
    player.play()
  }
}