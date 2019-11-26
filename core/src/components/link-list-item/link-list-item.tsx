import { Component, Element, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "neo-link-list-item",
  styleUrl: "link-list-item.scss",
  shadow: true
})
export class LinkListItem {
  @Element() el!: HTMLElement;

  @Prop() href: string = "";
  @Prop() hover: boolean;

  render() {
    return (
      <Host
        class={{
          hover: this.hover
        }}
      >
        <div>
          <a href={this.href}>
            <slot></slot>
          </a>
        </div>
      </Host>
    );
  }
}
