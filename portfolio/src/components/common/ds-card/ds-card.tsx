import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-card',
  styleUrl: 'ds-card.css',
  shadow: false,
})
export class DsCard {
  render() {
    return (
      <Host>
        <article>
          <slot></slot>
        </article>
      </Host>
    );
  }
}
