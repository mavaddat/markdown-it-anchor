import MarkdownIt = require('markdown-it');
import Token = require('markdown-it/lib/token');
import State = require('markdown-it/lib/rules_core/state_core');

declare namespace anchor {
  export type RenderHref = (slug: string, state: State) => string;
  export type RenderAttrs = (slug: string, state: State) => Record<string, string | number>;

  export interface PermalinkOptions {
    class?: string,
    symbol?: string,
    renderHref?: RenderHref,
    renderAttrs?: RenderAttrs
  }

  export interface LinkAfterHeaderPermalinkOptions extends PermalinkOptions {
    style?: 'visually-hidden' | 'aria-label' | 'aria-describedby' | 'aria-labelledby',
    assistiveText?: (title: string) => string,
    visuallyHiddenClass?: string,
    space?: boolean,
    placement?: 'before' | 'after'
  }

  export interface LinkInsideHeaderPermalinkOptions extends PermalinkOptions {
    space?: boolean,
    placement?: 'before' | 'after',
    ariaHidden?: boolean
  }

  export interface AriaHiddenPermalinkOptions extends PermalinkOptions {
    space?: boolean,
    placement?: 'before' | 'after'
  }

  export type PermalinkGenerator = (slug: string, opts: PermalinkOptions, state: State, index: number) => string;

  export interface AnchorInfo {
    slug: string;
    title: string;
  }

  export interface AnchorOptions {
    level?: number | number[];

    slugify?(str: string): string;

    uniqueSlugStartIndex?: number;
    permalink?: PermalinkGenerator;

    callback?(token: Token, anchor_info: AnchorInfo): void;

    tabIndex?: number | false;
  }

  export const permalink: {
    headerLink: () => PermalinkGenerator
    linkAfterHeader: (opts: LinkAfterHeaderPermalinkOptions) => PermalinkGenerator
    linkInsideHeader: (opts: LinkInsideHeaderPermalinkOptions) => PermalinkGenerator
    ariaHidden: (opts: AriaHiddenPermalinkOptions) => PermalinkGenerator
  };
}

declare function anchor(md: MarkdownIt, opts?: anchor.AnchorOptions): void;

export default anchor;
