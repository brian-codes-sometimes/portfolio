import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ds-popover',
  styleUrl: 'popover.css',
  shadow: false,
})
export class DsPopover {
  @Prop() popId: string;

  render() {
    return (
      <Host>
        <div id={this.popId} popover="auto" class="pop">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
