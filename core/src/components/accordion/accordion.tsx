import { Component, Element, Host, h, Listen, Prop } from '@stencil/core';
import { AccordionItem } from '../accordion-item/accordion-item';

@Component({
  tag: 'neo-accordion',
  styleUrl: 'accordion.scss',
  shadow: true
})
export class Accordion {

  private activeItem: AccordionItem;

  @Element() el!: HTMLElement;

  /**
   * Closes open items when others are opened.
   */
  @Prop() closeOthers: boolean = false;

  /**
   * Opens the first accordion item on load
   */
  @Prop() openFirst: boolean = true;

  componentDidLoad() {
    const items = this.el.querySelectorAll('neo-accordion-item');
    if (this.openFirst) {
      const firstItem = items[0];
      firstItem.toggle();
    }
  }

  @Listen('itemOpen')
  async onItemOpen(ev: CustomEvent) {
    if (this.closeOthers) {
      if (this.activeItem) {
        await this.activeItem.toggle();
      }
      this.activeItem = ev.detail.item
    }
  }

  @Listen('itemClose')
  onItemClose(ev: CustomEvent) {
    const { item } = ev.detail;
    if (item === this.activeItem) {
      this.activeItem = null;
    }
  }

  render() {
    return (
      <Host
        class={{
          'neo-small': true
        }}
      >
        <div class="accordion-inner">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
