import { Component, Event, EventEmitter, Element, Host, h, State, Method, Listen } from '@stencil/core';

@Component({
  tag: 'neo-accordion-item',
  styleUrl: 'accordion-item.scss',
  shadow: true
})
export class AccordionItem {

  private panel: HTMLElement;
  private itemHeight: number;

  @Element() el!: HTMLElement;

  @State() isOpen: boolean = false;

  /**
   * Emitted only when item is opened
   */
  @Event() itemOpen: EventEmitter<{ item: HTMLElement }>;

  /**
   * Emitted only when item is closed
   */
  @Event() itemClose: EventEmitter<{ item: HTMLElement }>;

  componentDidLoad() {
    this.itemHeight = this.panel.scrollHeight;
  }

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    this.itemHeight = this.panel.scrollHeight;
  }

  @Method()
  async toggle() {
    if (this.isOpen) {
      this.isOpen = false;
      this.panel.style.maxHeight = '0px';
      this.itemClose.emit({ item: this.el});
    } else {
      this.isOpen = true;
      this.panel.style.maxHeight = `${this.itemHeight}px`;
      this.itemOpen.emit({ item: this.el });
    }
  }

  render() {
    const { isOpen } = this;

    return (
      <Host
        class={{
          'is-open': isOpen
        }}
      >
        <button class="accordion-trigger" onClick={this.toggle.bind(this)}>
          <div class="accordion-trigger-content">
            <slot name="start"></slot>
            <slot name="trigger"></slot>
            <slot name="end">
              <i class="accordion-trigger-icon">
                <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="m50 60.762 34.555-34.555 5.8906 5.8945-40.445 40.445-40.445-40.445 5.8906-5.8945z" />
                </svg>
              </i>
            </slot>
          </div>
        </button>
        <div class="accordion-panel" ref={el => this.panel = el as HTMLElement}>
          <slot name="content"></slot>
        </div>
      </Host>
    );
  }

}
