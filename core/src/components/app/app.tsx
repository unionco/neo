import { Component, ComponentInterface, Element } from '@stencil/core';

@Component({
  tag: 'neo-app',
  styleUrl: 'app.scss',
})
export class App implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentDidLoad() {
    import('../../utils/focusable').then(module => module.startFocusVisible());
  }
}
