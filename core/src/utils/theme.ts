import { Color, CssClassMap } from "../interface";

export const hostContext = (selector: string, el: HTMLElement): boolean => {
  return el.closest(selector) !== null;
};

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
export const createColorClasses = (color: Color | undefined | null): CssClassMap | undefined => {
  return (typeof color === 'string' && color.length > 0) ? {
    'neo-color': true,
    [`neo-color-${color}`]: true
  } : undefined;
};
