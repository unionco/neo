import { Component, Element, Host, h, Prop, State, Listen } from '@stencil/core';
import { toHHMMSS } from '../../utils/utils';

const VideoMimeTypes: {[key: string]: string} = {
  opus: 'video/ogg',
  ogv: 'video/ogg',
  mp4: 'video/mp4',
  mov: 'video/mp4',
  m4v: 'video/mp4',
  mkv: 'video/x-matroska',
  webm: 'video/webm'
};

const MasterSvgs: { [key: string]: () => any } = {
  main: () => (
    <svg class="svg-play" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m38.273 29.242v41.516l35.953-20.758z" />
        <path d="m50 100c27.57 0 50-22.43 50-50s-22.43-50-50-50-50 22.43-50 50 22.43 50 50 50zm0-93.75c24.125 0 43.75 19.625 43.75 43.75s-19.625 43.75-43.75 43.75-43.75-19.625-43.75-43.75 19.629-43.75 43.75-43.75z" />
      </g>
    </svg>
  ),
  play: () => (
    <svg class="svg-play" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="m18.938 87.73 62.125-37.73-62.125-37.73z" />
    </svg>
  ),
  pause: () => (
    <svg class="svg-pause" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m0.0039062 0h36.664v99.996h-36.664z" />
        <path d="m63.332 0h36.664v99.996h-36.664z" />
      </g>
    </svg>

  ),
  fullscreen: () => (
    <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="m37.5 12.5v8.332h-16.668v16.668h-8.332v-25zm-25 50h8.3516v16.668h16.648v8.332h-25zm50-50h25v25h-8.332v-16.668h-16.668zm16.668 50h8.332v25h-25v-8.332h16.668z" />
    </svg>
  )
}

@Component({
  tag: 'neo-video',
  styleUrl: 'video.scss',
  shadow: true
})
export class PlyVideo {

  // Browser conditions
  private isSafari = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1 ? true : false;
  private video?: HTMLVideoElement;

  @Element() el!: HTMLElement;

  @State() duration: number = 1;

  @State() durationText: string;

  @State() isFullscreen: boolean = false;

  @State() isPlaying: boolean = false;

  @State() wasPlaying: boolean = false;

  @State() isMuted: boolean = false;

  @State() isSubtitled: boolean = false;

  @State() progress: number = 0.01;

  @State() progressText: string;

  @State() volume: number = 1;

  @State() userFocus: boolean = true;

  /**
   * The video URL.
   */
  @Prop() src?: string;

  /**
   * The poster image url
   */
  @Prop() poster?: string;

  /**
   * Show custom controls, this is not ready yet. Use native controls
   */
  @Prop() controls?: boolean = false;

  componentDidLoad() {
    // this.video = this.el.querySelector('video');
    this.bindEventListeners();
  }

  @Listen('play')
  onPlay() {
    this.video.play();
    this.isPlaying = true;
  }

  @Listen('pause')
  onPause() {
    this.video.pause();
    this.isPlaying = false;
  }

  @Listen('seekStart')
  onSeekStart(event: any) {
    this.video.currentTime = event.detail;
    this.wasPlaying = this.isPlaying;
    if (this.wasPlaying) this.onPause();
  }

  @Listen('seekMove')
  onSeekMove(event: any) {
    this.video.currentTime = event.detail;
  }

  @Listen('seekEnd')
  onSeekEnd(event: any) {
    this.video.currentTime = event.detail;
    if (this.wasPlaying) this.onPlay();
  }

  bindEventListeners() {
    this.video.addEventListener('click', (event: Event) => this.handleVideoClick(event));
    this.video.addEventListener('durationchange', () => this.durationHandler());
    this.video.addEventListener('ended', () => this.playingHandler(false));
    this.video.addEventListener('pause', () => this.playingHandler(false));
    this.video.addEventListener('playing', () => this.playingHandler(true));
    this.video.addEventListener('timeupdate', () => this.timeupdateHandler());
  }

  durationHandler() {
    this.duration = this.video.duration;
    this.durationText = toHHMMSS(this.duration.toString());
  }

  enterFullscreen() {
    if (!this.isSafari) {
      (this.el as any).webkitRequestFullscreen();
    } else {
      (this.video as any).webkitEnterFullscreen();
    }
  }

  exitFullscreen() {
    (document as any).webkitExitFullscreen();
  }

  handleVideoClick(event: Event) {
    event.preventDefault();
    if (this.video.paused) {
      this.onPlay();
    } else {
      this.onPause();
    }
  }

  playingHandler(playing: boolean) {
    this.isPlaying = playing;
  }

  timeupdateHandler() {
    this.progress = this.video.currentTime;
    this.progressText = toHHMMSS(this.progress.toString());
  }

  private svg(handle: string) {
    const icon = MasterSvgs[handle]();
    return icon;
  }

  private getControls() {
    const { progress, duration } = this;

    return (
      <div class="video-controls">
        <div class="video-controls-mini">
          <div class="video-controls-play">
            <a onClick={this.handleVideoClick.bind(this)}>
              {this.svg('play')}
              {this.svg('pause')}
            </a>
          </div>
          <div class="video-controls-track">
            <scrub-bar progress={progress} duration={duration}></scrub-bar>
          </div>
          <div class="video-controls-other">
            <div onClick={this.enterFullscreen.bind(this)}>
              {this.svg('fullscreen')}
            </div>
          </div>
        </div>
      </div>
    )
  }

  private getFileExtension(): string {
    const { src } = this;
    return src.slice((src.lastIndexOf(".") - 1 >>> 0) + 2);
  }

  renderVideo() {
    const { controls, src, isPlaying, poster, progress } = this;
    const ext = this.getFileExtension();
    const type = VideoMimeTypes[ext];

    return (
      <div class={{
        'video-wrapper': true,
        'is-playing': isPlaying
      }}>
        <video class="video-file" poster={poster} controls={controls} ref={el => this.video = el as HTMLVideoElement}>
          <source type={type} src={src}></source>
        </video>

        {progress && progress < 1 &&
          <a class="video-main-btn" onClick={this.handleVideoClick.bind(this)}>
            <slot name="main">
              {this.svg('main')}
            </slot>
          </a>
        }

        {!controls ? this.getControls() : ''}
      </div>
    );
  }

  render() {
    return (
      <Host>
        {this.renderVideo()}
      </Host>
    );
  }

}
