import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'neo-heading',
  styleUrl: 'heading.scss',
  shadow: true
})
export class Heading implements ComponentInterface {

  /**
   * Size of the tag, h1, h2, h3, etc
   */
  @Prop() size: number = 1;

  render() {
    const { size } = this;
    const Tag = `h${size}`;

    return (
      <Tag>
        <slot></slot>
      </Tag>
    );
  }
}
