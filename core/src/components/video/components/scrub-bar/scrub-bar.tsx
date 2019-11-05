import { Component, Event, EventEmitter, Listen, Host, Prop, Watch, Element, State, h } from '@stencil/core';
import { toHHMMSS } from '../../../../utils/utils';

@Component({
  tag: 'scrub-bar',
  styleUrl: 'scrub-bar.scss',
  shadow: true
})
export class ScrubBar {
  private scrubElement: HTMLElement;
  private isDown: boolean = false;

  @Element() element: HTMLElement;

  @State() valuetext: string = '0:00 / 0:00';
  @State() progressText: string = '0:00';
  @State() durationText: string = '0:00';

  @Prop() progress: number;
  @Watch('progress')
  onProgressChangeHandler() {
    this.setValueText();
  }

  @Prop() duration: number;
  @Watch('duration')
  onDurationChangeHandler() {
    this.setValueText();
  }

  @Event() seekStart: EventEmitter;
  @Event() seekMove: EventEmitter;
  @Event() seekEnd: EventEmitter;

  componentDidLoad() {
    // this.scrubElement = this.element.querySelector('progress');
  }

  @Listen('mousedown')
  mousedownHandler(event: MouseEvent) {
    this.handleDown(event);
  }

  @Listen('mousemove')
  mousemoveHandler(event: MouseEvent) {
    this.handleMove(event);
  }

  @Listen('mouseup')
  mouseleaveHandler(event: MouseEvent) {
    this.handleUp(event);
  }

  /**
   * Handles all down, touch and mouse
   * @param event
   */
  handleDown(event: any) {
    this.isDown = true;
    this.scrubToPosition(event, this.seekStart);
  }

  /**
   * Handles all move, touch and mouse
   * @param event
   */
  handleMove(event: any) {
    if (this.isDown) {
      this.scrubToPosition(event, this.seekMove);
    }
  }

  /**
   * Handles all up, touch and mouse
   * @param event
   */
  handleUp(event: any) {
    if (this.isDown) {
      this.isDown = false;
      this.scrubToPosition(event, this.seekEnd);
    }
  }

  scrubToPosition(event: any, emitter: EventEmitter) {
    // Find scrub position as a percentage
    let clientX = event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX;
    if (!clientX) return;
    let controlPosition = this.scrubElement.getBoundingClientRect().left;
    let percent = (clientX - controlPosition) / this.scrubElement.offsetWidth;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;
    // Convert percentage into time
    const newTime = this.duration * percent;
    emitter.emit(newTime);
  }

  setValueText() {
    if (this.progress !== undefined && this.duration !== undefined) {
      this.progressText = toHHMMSS(this.progress.toString());
      this.durationText = toHHMMSS(this.duration.toString());

      this.valuetext = this.progressText + ' / ' + this.durationText;
    }
  }

  render() {
    const { duration, durationText, progress, progressText, valuetext } = this;

    return (
      <Host>
        <span>{progressText}</span>
        <progress
          ref={el => this.scrubElement = el as HTMLProgressElement}
          max={duration}
          value={progress || 0}
          aria-label='Seek slider'
          aria-valuemin='0'
          aria-valuemax={duration}
          aria-valuenow={progress}
          aria-valuetext={valuetext}></progress>
        <span>{durationText}</span>
      </Host>
    );
  }
}
