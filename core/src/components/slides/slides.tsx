import { Component, ComponentInterface, Element, Host, h, Method, Prop, Watch } from '@stencil/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  tag: 'neo-slides',
  styleUrl: 'slides.scss',
})
export class Slides implements ComponentInterface {

  private paginationEl: HTMLElement;

  private scrollbarEl: HTMLElement;

  private navPrevEl: HTMLElement;

  private navNextEl: HTMLElement;

  private mutationO?: MutationObserver;

  private swiperReady: boolean = false;

  private readySwiper!: (swiper: any) => void;

  private swiper: Promise<any> = new Promise(resolve => { this.readySwiper = resolve; });

  @Element() el!: HTMLNeoSlidesElement;

  @Prop() opts: any = {};
  @Watch('opts')
  async optionsChanged() {
    if (this.swiperReady) {
      const swiper = await this.getSwiper();
      const normalized = this.normalizeOptions();
      Object.assign(swiper.params, normalized);
      await this.update();
    }
  }

  @Prop() pager: boolean = false;

  @Prop() buttons: boolean = false;

  @Prop() scrollbar: boolean = false;

  @Prop() options: any;

  connectedCallback() {
    const mut = this.mutationO = new MutationObserver(() => {
      if (this.swiperReady) {
        this.update();
      }
    });
    mut.observe(this.el, {
      childList: true,
      subtree: true
    });
    this.el.componentOnReady().then(() => this.initSwiper());
  }

  async disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
    const swiper = await this.getSwiper();
    swiper.destroy(true, true);
    this.swiper = new Promise(resolve => { this.readySwiper = resolve; });
    this.swiperReady = false;
  }

  async initSwiper() {
    const normalized = this.normalizeOptions();
    const opts = { ...defaultOptions, ...normalized };

    if (this.pager) {
      opts.pagination = {
        el: this.paginationEl!,
        type: 'bullets',
        clickable: false,
        hideOnClick: false,
      };
    }

    if (this.buttons) {
      opts.navigation = {
        nextEl: this.navNextEl,
        prevEl: this.navPrevEl
      }
    }
    if (this.scrollbar) {
      opts.scrollbar = {
        el: this.scrollbarEl!,
        hide: true,
      };
    }

    await waitForSlides(this.el);
    const swiper = new Swiper(this.el, opts);
    this.swiperReady = true;
    this.readySwiper(swiper);
  }

  normalizeOptions() {
    if (typeof this.opts === 'string') {
      return JSON.parse(this.opts);
    }
    return this.opts || {};
  }
  /**
   * Update the underlying slider implementation. Call this if you've added or removed
   * child slides.
   */
  @Method()
  async update() {
    const [swiper] = await Promise.all([
      this.getSwiper(),
      waitForSlides(this.el)
    ]);
    swiper.update();
  }

  /**
   * Get the Swiper instance.
   * Use this to access the full Swiper API.
   * See https://idangero.us/swiper/api/ for all API options.
   */
  @Method()
  async getSwiper(): Promise<any> {
    return this.swiper;
  }

  render() {
    return (
      <Host
        class={{
          'swiper-container': true
        }}
      >
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
        {this.pager && <div class="swiper-pagination" ref={el => this.paginationEl = el as HTMLElement}></div>}
        {this.scrollbar && <div class="swiper-scrollbar" ref={el => this.scrollbarEl = el}></div>}
        {this.buttons && [<div class="swiper-button-prev" ref={el => this.navPrevEl = el}></div>, <div class="swiper-button-next" ref={el => this.navNextEl = el}></div>]}
      </Host>
    );
  }
}

const defaultOptions: SwiperOptions = {
  effect: undefined,
  direction: 'horizontal',
  initialSlide: 0,
  loop: false,
  parallax: false,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 300,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  touchEventsTarget: 'container',
  autoplay: false,
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  autoHeight: false,
  setWrapperSize: false,
  zoom: {
    maxRatio: 3,
    minRatio: 1,
    toggle: false,
  },
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  touchStartPreventDefault: false,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchReleaseOnEdges: false,
  iOSEdgeSwipeDetection: false,
  iOSEdgeSwipeThreshold: 20,
  resistance: true,
  resistanceRatio: 0.85,
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  loopAdditionalSlides: 0,
  noSwiping: true,
  runCallbacksOnInit: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  flipEffect: {
    slideShadows: true,
    limitRotation: true
  },
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  fadeEffect: {
    crossFade: false
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide'
  }
};

const waitForSlides = (el: HTMLElement) => {
  return Promise.all(
    Array.from(el.querySelectorAll('neo-slide')).map(s => s.componentOnReady())
  );
};
