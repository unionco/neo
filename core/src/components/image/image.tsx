import { Component, ComponentInterface, Element, Event, Prop, h, Host, State, Watch, EventEmitter } from '@stencil/core';

@Component({
  tag: 'neo-img',
  styleUrl: 'image.scss',
  shadow: true
})
export class Image implements ComponentInterface {

  private io?: IntersectionObserver;

  @Element() el!: HTMLElement;

  @State() loadSrc?: string;

  @State() loadError?: () => void;

  /**
   * This attribute defines the alternative text describing the image.
   * Users will see this text displayed if the image URL is wrong,
   * the image is not in one of the supported formats, or if the image is not yet downloaded.
   */
  @Prop() alt?: string;

  /**
   * The image URL. This attribute is mandatory for the `<img>` element.
   */
  @Prop() src?: string;
  @Watch('src')
  srcChanged() {
    this.addIO();
  }

  /** Emitted when the img src has been set */
  @Event() neoImgWillLoad!: EventEmitter<void>;

  /** Emitted when the image has finished loading */
  @Event() neoImgDidLoad!: EventEmitter<void>;

  /** Emitted when the img fails to load */
  @Event() neoError!: EventEmitter<void>;

  componentDidLoad() {
    this.addIO();
  }

  private addIO() {
    if (this.src === undefined) {
      return;
    }
    if ('IntersectionObserver' in window) {
      this.removeIO();
      this.io = new IntersectionObserver(data => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });

      this.io.observe(this.el);
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => this.load(), 200);
    }
  }

  private load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.neoImgWillLoad.emit();
  }

  private onLoad = () => {
    this.neoImgDidLoad.emit();
  }

  private onError = () => {
    this.neoError.emit();
  }

  private removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  render() {
    return (
      <Host>
        <img
          decoding="async"
          src={this.loadSrc}
          alt={this.alt}
          onLoad={this.onLoad}
          onError={this.loadError}
        />
      </Host>
    )
  }
}
