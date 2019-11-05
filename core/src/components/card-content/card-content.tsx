import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'neo-card-content',
  styleUrl: 'card-content.css',
  shadow: true
})
export class CardContent implements ComponentInterface {
  /**
   * The first name
   */
  @Prop() prop: string;

  render() {
    return <div>i am a CardContent component</div>;
  }
}
