class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config: any) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';

    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    this.plugins.forEach(plugin => plugin.run(this));
  }

  play () { this.media.play() }
  pause () { this.media.pause() }
  mute () { this.media.muted = true }
  unmute () { this.media.muted = false }

  togglePlay () { (this.media.paused) ? this.play() : this.pause() }
  toggleMute () { (!this.media.muted) ? this.mute() : this.unmute() }
}

export default MediaPlayer;
