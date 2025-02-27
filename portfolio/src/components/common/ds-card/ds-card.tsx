import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ds-card',
  styleUrl: 'ds-card.css',
  shadow: false,
})
export class DsCard {
  @Prop() full: boolean;
  @Prop() head: string;
  @Prop() subhead?: string;
  render() {
    return (
      <Host>
        <article>
          <header>
            <h2>{this.head}</h2>
            {this.subhead ? <p class="subhead">{this.subhead}</p> : null}
          </header>
          <slot></slot>
        </article>
      </Host>
    );
  }
}
