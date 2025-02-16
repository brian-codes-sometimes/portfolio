import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-experience',
  styleUrl: 'app-experience.css',
  shadow: false,
})
export class AppExperience {
  render() {
    return (
        <Host>
            <ds-card>
                <h2>Johnson Controls</h2>
            </ds-card>
        </Host>
    );
  }
}
