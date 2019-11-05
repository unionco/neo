/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface NeoAccordion {
    /**
    * Closes open items when others are opened.
    */
    'closeOthers': boolean;
    /**
    * Opens the first accordion item on load
    */
    'openFirst': boolean;
  }
  interface NeoAccordionItem {
    'toggle': () => Promise<void>;
  }
  interface NeoCard {
    /**
    * Layout of container (flex) row or column
    */
    'layout': 'col' | 'row';
    /**
    * Background image or video
    */
    'mediabehind': boolean;
    /**
    * Reverse order
    */
    'reverse': boolean;
  }
  interface NeoCardContent {
    /**
    * The first name
    */
    'prop': string;
  }
  interface NeoCardHeader {
    /**
    * The first name
    */
    'prop': string;
  }
  interface NeoCol {
    /**
    * The amount to offset the column, in terms of how many columns it should shift to the end of the total available.
    */
    'offset'?: string;
    /**
    * The amount to offset the column for lg screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetLg'?: string;
    /**
    * The amount to offset the column for md screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetMd'?: string;
    /**
    * The amount to offset the column for sm screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetSm'?: string;
    /**
    * The amount to offset the column for xl screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetXl'?: string;
    /**
    * The amount to offset the column for xs screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetXs'?: string;
    /**
    * The amount to pull the column, in terms of how many columns it should shift to the start of the total available.
    */
    'pull'?: string;
    /**
    * The amount to pull the column for lg screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullLg'?: string;
    /**
    * The amount to pull the column for md screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullMd'?: string;
    /**
    * The amount to pull the column for sm screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullSm'?: string;
    /**
    * The amount to pull the column for xl screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullXl'?: string;
    /**
    * The amount to pull the column for xs screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullXs'?: string;
    /**
    * The amount to push the column, in terms of how many columns it should shift to the end of the total available.
    */
    'push'?: string;
    /**
    * The amount to push the column for lg screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushLg'?: string;
    /**
    * The amount to push the column for md screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushMd'?: string;
    /**
    * The amount to push the column for sm screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushSm'?: string;
    /**
    * The amount to push the column for xl screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushXl'?: string;
    /**
    * The amount to push the column for xs screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushXs'?: string;
    /**
    * The size of the column, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'size'?: string;
    /**
    * The size of the column for lg screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeLg'?: string;
    /**
    * The size of the column for md screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeMd'?: string;
    /**
    * The size of the column for sm screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeSm'?: string;
    /**
    * The size of the column for xl screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeXl'?: string;
    /**
    * The size of the column for xs screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeXs'?: string;
  }
  interface NeoCopy {
    /**
    * The first name
    */
    'prop': string;
  }
  interface NeoEyebrow {
    /**
    * The first name
    */
    'upper': boolean;
  }
  interface NeoGrid {
    /**
    * If `true`, the grid will have a fixed width based on the screen size.
    */
    'fixed': boolean;
  }
  interface NeoHeading {
    /**
    * Size of the tag, h1, h2, h3, etc
    */
    'size': number;
  }
  interface NeoImg {
    /**
    * This attribute defines the alternative text describing the image. Users will see this text displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet downloaded.
    */
    'alt'?: string;
    /**
    * The image URL. This attribute is mandatory for the `<img>` element.
    */
    'src'?: string;
  }
  interface NeoProfile {
    /**
    * Layout of container (flex) row or column
    */
    'layout': 'col' | 'row';
    /**
    * Rounds the avatar image is provided.
    */
    'rounded': boolean;
  }
  interface NeoRow {}
  interface NeoSlide {}
  interface NeoSlides {
    'buttons': boolean;
    /**
    * Get the Swiper instance. Use this to access the full Swiper API. See https://idangero.us/swiper/api/ for all API options.
    */
    'getSwiper': () => Promise<any>;
    'options': any;
    'opts': any;
    'pager': boolean;
    'scrollbar': boolean;
    /**
    * Update the underlying slider implementation. Call this if you've added or removed child slides.
    */
    'update': () => Promise<void>;
  }
  interface NeoVideo {
    /**
    * Show custom controls, this is not ready yet. Use native controls
    */
    'controls'?: boolean;
    /**
    * The poster image url
    */
    'poster'?: string;
    /**
    * The video URL.
    */
    'src'?: string;
  }
  interface NeoWysiwyg {
    /**
    * The first name
    */
    'base': number;
  }
  interface ScrubBar {
    'duration': number;
    'progress': number;
  }
}

declare global {


  interface HTMLNeoAccordionElement extends Components.NeoAccordion, HTMLStencilElement {}
  var HTMLNeoAccordionElement: {
    prototype: HTMLNeoAccordionElement;
    new (): HTMLNeoAccordionElement;
  };

  interface HTMLNeoAccordionItemElement extends Components.NeoAccordionItem, HTMLStencilElement {}
  var HTMLNeoAccordionItemElement: {
    prototype: HTMLNeoAccordionItemElement;
    new (): HTMLNeoAccordionItemElement;
  };

  interface HTMLNeoCardElement extends Components.NeoCard, HTMLStencilElement {}
  var HTMLNeoCardElement: {
    prototype: HTMLNeoCardElement;
    new (): HTMLNeoCardElement;
  };

  interface HTMLNeoCardContentElement extends Components.NeoCardContent, HTMLStencilElement {}
  var HTMLNeoCardContentElement: {
    prototype: HTMLNeoCardContentElement;
    new (): HTMLNeoCardContentElement;
  };

  interface HTMLNeoCardHeaderElement extends Components.NeoCardHeader, HTMLStencilElement {}
  var HTMLNeoCardHeaderElement: {
    prototype: HTMLNeoCardHeaderElement;
    new (): HTMLNeoCardHeaderElement;
  };

  interface HTMLNeoColElement extends Components.NeoCol, HTMLStencilElement {}
  var HTMLNeoColElement: {
    prototype: HTMLNeoColElement;
    new (): HTMLNeoColElement;
  };

  interface HTMLNeoCopyElement extends Components.NeoCopy, HTMLStencilElement {}
  var HTMLNeoCopyElement: {
    prototype: HTMLNeoCopyElement;
    new (): HTMLNeoCopyElement;
  };

  interface HTMLNeoEyebrowElement extends Components.NeoEyebrow, HTMLStencilElement {}
  var HTMLNeoEyebrowElement: {
    prototype: HTMLNeoEyebrowElement;
    new (): HTMLNeoEyebrowElement;
  };

  interface HTMLNeoGridElement extends Components.NeoGrid, HTMLStencilElement {}
  var HTMLNeoGridElement: {
    prototype: HTMLNeoGridElement;
    new (): HTMLNeoGridElement;
  };

  interface HTMLNeoHeadingElement extends Components.NeoHeading, HTMLStencilElement {}
  var HTMLNeoHeadingElement: {
    prototype: HTMLNeoHeadingElement;
    new (): HTMLNeoHeadingElement;
  };

  interface HTMLNeoImgElement extends Components.NeoImg, HTMLStencilElement {}
  var HTMLNeoImgElement: {
    prototype: HTMLNeoImgElement;
    new (): HTMLNeoImgElement;
  };

  interface HTMLNeoProfileElement extends Components.NeoProfile, HTMLStencilElement {}
  var HTMLNeoProfileElement: {
    prototype: HTMLNeoProfileElement;
    new (): HTMLNeoProfileElement;
  };

  interface HTMLNeoRowElement extends Components.NeoRow, HTMLStencilElement {}
  var HTMLNeoRowElement: {
    prototype: HTMLNeoRowElement;
    new (): HTMLNeoRowElement;
  };

  interface HTMLNeoSlideElement extends Components.NeoSlide, HTMLStencilElement {}
  var HTMLNeoSlideElement: {
    prototype: HTMLNeoSlideElement;
    new (): HTMLNeoSlideElement;
  };

  interface HTMLNeoSlidesElement extends Components.NeoSlides, HTMLStencilElement {}
  var HTMLNeoSlidesElement: {
    prototype: HTMLNeoSlidesElement;
    new (): HTMLNeoSlidesElement;
  };

  interface HTMLNeoVideoElement extends Components.NeoVideo, HTMLStencilElement {}
  var HTMLNeoVideoElement: {
    prototype: HTMLNeoVideoElement;
    new (): HTMLNeoVideoElement;
  };

  interface HTMLNeoWysiwygElement extends Components.NeoWysiwyg, HTMLStencilElement {}
  var HTMLNeoWysiwygElement: {
    prototype: HTMLNeoWysiwygElement;
    new (): HTMLNeoWysiwygElement;
  };

  interface HTMLScrubBarElement extends Components.ScrubBar, HTMLStencilElement {}
  var HTMLScrubBarElement: {
    prototype: HTMLScrubBarElement;
    new (): HTMLScrubBarElement;
  };
  interface HTMLElementTagNameMap {
    'neo-accordion': HTMLNeoAccordionElement;
    'neo-accordion-item': HTMLNeoAccordionItemElement;
    'neo-card': HTMLNeoCardElement;
    'neo-card-content': HTMLNeoCardContentElement;
    'neo-card-header': HTMLNeoCardHeaderElement;
    'neo-col': HTMLNeoColElement;
    'neo-copy': HTMLNeoCopyElement;
    'neo-eyebrow': HTMLNeoEyebrowElement;
    'neo-grid': HTMLNeoGridElement;
    'neo-heading': HTMLNeoHeadingElement;
    'neo-img': HTMLNeoImgElement;
    'neo-profile': HTMLNeoProfileElement;
    'neo-row': HTMLNeoRowElement;
    'neo-slide': HTMLNeoSlideElement;
    'neo-slides': HTMLNeoSlidesElement;
    'neo-video': HTMLNeoVideoElement;
    'neo-wysiwyg': HTMLNeoWysiwygElement;
    'scrub-bar': HTMLScrubBarElement;
  }
}

declare namespace LocalJSX {
  interface NeoAccordion {
    /**
    * Closes open items when others are opened.
    */
    'closeOthers'?: boolean;
    /**
    * Opens the first accordion item on load
    */
    'openFirst'?: boolean;
  }
  interface NeoAccordionItem {
    /**
    * Emitted only when item is closed
    */
    'onItemClose'?: (event: CustomEvent<{ item: HTMLElement }>) => void;
    /**
    * Emitted only when item is opened
    */
    'onItemOpen'?: (event: CustomEvent<{ item: HTMLElement }>) => void;
  }
  interface NeoCard {
    /**
    * Layout of container (flex) row or column
    */
    'layout'?: 'col' | 'row';
    /**
    * Background image or video
    */
    'mediabehind'?: boolean;
    /**
    * Reverse order
    */
    'reverse'?: boolean;
  }
  interface NeoCardContent {
    /**
    * The first name
    */
    'prop'?: string;
  }
  interface NeoCardHeader {
    /**
    * The first name
    */
    'prop'?: string;
  }
  interface NeoCol {
    /**
    * The amount to offset the column, in terms of how many columns it should shift to the end of the total available.
    */
    'offset'?: string;
    /**
    * The amount to offset the column for lg screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetLg'?: string;
    /**
    * The amount to offset the column for md screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetMd'?: string;
    /**
    * The amount to offset the column for sm screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetSm'?: string;
    /**
    * The amount to offset the column for xl screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetXl'?: string;
    /**
    * The amount to offset the column for xs screens, in terms of how many columns it should shift to the end of the total available.
    */
    'offsetXs'?: string;
    /**
    * The amount to pull the column, in terms of how many columns it should shift to the start of the total available.
    */
    'pull'?: string;
    /**
    * The amount to pull the column for lg screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullLg'?: string;
    /**
    * The amount to pull the column for md screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullMd'?: string;
    /**
    * The amount to pull the column for sm screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullSm'?: string;
    /**
    * The amount to pull the column for xl screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullXl'?: string;
    /**
    * The amount to pull the column for xs screens, in terms of how many columns it should shift to the start of the total available.
    */
    'pullXs'?: string;
    /**
    * The amount to push the column, in terms of how many columns it should shift to the end of the total available.
    */
    'push'?: string;
    /**
    * The amount to push the column for lg screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushLg'?: string;
    /**
    * The amount to push the column for md screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushMd'?: string;
    /**
    * The amount to push the column for sm screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushSm'?: string;
    /**
    * The amount to push the column for xl screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushXl'?: string;
    /**
    * The amount to push the column for xs screens, in terms of how many columns it should shift to the end of the total available.
    */
    'pushXs'?: string;
    /**
    * The size of the column, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'size'?: string;
    /**
    * The size of the column for lg screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeLg'?: string;
    /**
    * The size of the column for md screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeMd'?: string;
    /**
    * The size of the column for sm screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeSm'?: string;
    /**
    * The size of the column for xl screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeXl'?: string;
    /**
    * The size of the column for xs screens, in terms of how many columns it should take up out of the total available. If `"auto"` is passed, the column will be the size of its content.
    */
    'sizeXs'?: string;
  }
  interface NeoCopy {
    /**
    * The first name
    */
    'prop'?: string;
  }
  interface NeoEyebrow {
    /**
    * The first name
    */
    'upper'?: boolean;
  }
  interface NeoGrid {
    /**
    * If `true`, the grid will have a fixed width based on the screen size.
    */
    'fixed'?: boolean;
  }
  interface NeoHeading {
    /**
    * Size of the tag, h1, h2, h3, etc
    */
    'size'?: number;
  }
  interface NeoImg {
    /**
    * This attribute defines the alternative text describing the image. Users will see this text displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet downloaded.
    */
    'alt'?: string;
    /**
    * Emitted when the img fails to load
    */
    'onNeoError'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the image has finished loading
    */
    'onNeoImgDidLoad'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the img src has been set
    */
    'onNeoImgWillLoad'?: (event: CustomEvent<void>) => void;
    /**
    * The image URL. This attribute is mandatory for the `<img>` element.
    */
    'src'?: string;
  }
  interface NeoProfile {
    /**
    * Layout of container (flex) row or column
    */
    'layout'?: 'col' | 'row';
    /**
    * Rounds the avatar image is provided.
    */
    'rounded'?: boolean;
  }
  interface NeoRow {}
  interface NeoSlide {}
  interface NeoSlides {
    'buttons'?: boolean;
    'options'?: any;
    'opts'?: any;
    'pager'?: boolean;
    'scrollbar'?: boolean;
  }
  interface NeoVideo {
    /**
    * Show custom controls, this is not ready yet. Use native controls
    */
    'controls'?: boolean;
    /**
    * The poster image url
    */
    'poster'?: string;
    /**
    * The video URL.
    */
    'src'?: string;
  }
  interface NeoWysiwyg {
    /**
    * The first name
    */
    'base'?: number;
  }
  interface ScrubBar {
    'duration'?: number;
    'onSeekEnd'?: (event: CustomEvent<any>) => void;
    'onSeekMove'?: (event: CustomEvent<any>) => void;
    'onSeekStart'?: (event: CustomEvent<any>) => void;
    'progress'?: number;
  }

  interface IntrinsicElements {
    'neo-accordion': NeoAccordion;
    'neo-accordion-item': NeoAccordionItem;
    'neo-card': NeoCard;
    'neo-card-content': NeoCardContent;
    'neo-card-header': NeoCardHeader;
    'neo-col': NeoCol;
    'neo-copy': NeoCopy;
    'neo-eyebrow': NeoEyebrow;
    'neo-grid': NeoGrid;
    'neo-heading': NeoHeading;
    'neo-img': NeoImg;
    'neo-profile': NeoProfile;
    'neo-row': NeoRow;
    'neo-slide': NeoSlide;
    'neo-slides': NeoSlides;
    'neo-video': NeoVideo;
    'neo-wysiwyg': NeoWysiwyg;
    'scrub-bar': ScrubBar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'neo-accordion': LocalJSX.NeoAccordion & JSXBase.HTMLAttributes<HTMLNeoAccordionElement>;
      'neo-accordion-item': LocalJSX.NeoAccordionItem & JSXBase.HTMLAttributes<HTMLNeoAccordionItemElement>;
      'neo-card': LocalJSX.NeoCard & JSXBase.HTMLAttributes<HTMLNeoCardElement>;
      'neo-card-content': LocalJSX.NeoCardContent & JSXBase.HTMLAttributes<HTMLNeoCardContentElement>;
      'neo-card-header': LocalJSX.NeoCardHeader & JSXBase.HTMLAttributes<HTMLNeoCardHeaderElement>;
      'neo-col': LocalJSX.NeoCol & JSXBase.HTMLAttributes<HTMLNeoColElement>;
      'neo-copy': LocalJSX.NeoCopy & JSXBase.HTMLAttributes<HTMLNeoCopyElement>;
      'neo-eyebrow': LocalJSX.NeoEyebrow & JSXBase.HTMLAttributes<HTMLNeoEyebrowElement>;
      'neo-grid': LocalJSX.NeoGrid & JSXBase.HTMLAttributes<HTMLNeoGridElement>;
      'neo-heading': LocalJSX.NeoHeading & JSXBase.HTMLAttributes<HTMLNeoHeadingElement>;
      'neo-img': LocalJSX.NeoImg & JSXBase.HTMLAttributes<HTMLNeoImgElement>;
      'neo-profile': LocalJSX.NeoProfile & JSXBase.HTMLAttributes<HTMLNeoProfileElement>;
      'neo-row': LocalJSX.NeoRow & JSXBase.HTMLAttributes<HTMLNeoRowElement>;
      'neo-slide': LocalJSX.NeoSlide & JSXBase.HTMLAttributes<HTMLNeoSlideElement>;
      'neo-slides': LocalJSX.NeoSlides & JSXBase.HTMLAttributes<HTMLNeoSlidesElement>;
      'neo-video': LocalJSX.NeoVideo & JSXBase.HTMLAttributes<HTMLNeoVideoElement>;
      'neo-wysiwyg': LocalJSX.NeoWysiwyg & JSXBase.HTMLAttributes<HTMLNeoWysiwygElement>;
      'scrub-bar': LocalJSX.ScrubBar & JSXBase.HTMLAttributes<HTMLScrubBarElement>;
    }
  }
}


