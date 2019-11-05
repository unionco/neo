import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'neo-card-header',
  styleUrl: 'card-header.css',
  shadow: true
})
export class CardHeader implements ComponentInterface {
  /**
   * The first name
   */
  @Prop() prop: string;

  render() {
    return <div>i am a CardHeader component</div>;
  }
}
