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
        <ds-card head="Johnson Controls" subhead="March 2023 - January 2025">
          <ul>
            Roles:
            <li>Senior UI/UX Developer</li>
          </ul>
          <ul>
            Responsibilities
            <li>Researched and chose direction of new design system to ensure the most flexibility with various products and frameworks, pitched it to design and development managers</li>
            <li>Developed component library using custom built web components and style variables</li>
<li>Packaged up design system components for web components, Angular, and React</li>
<li>Built custom documentation site showing installation instructions, working component examples, code snippets, and design guidelines</li>
<li>Member of accessibility group, suggested accessibility improvements and shared insights with larger org</li>
          </ul>
          <ul>
            Accomplishments
            <li></li>
          </ul>
        </ds-card>
        <ds-card head="InvestCloud" subhead="March 2021 - June 2022">
          <ul>
            Roles:
            <li>Senior Designer</li>
          </ul>
          <ul>
            Responsibilities
            <li></li>
          </ul>
          <ul>
            Accomplishments
            <li></li>
          </ul>
        </ds-card>
        <ds-card head="Advicent Solutions" subhead="April 2016 - March 2021">
          <ul>
            Roles:
            <li>Senior UX Developer</li>
            <li>UX Developer</li>
            <li>Associate UX Developer</li>
          </ul>
          <ul>
            Responsibilities
            <li></li>
          </ul>
          <ul>
            Accomplishments
            <li></li>
          </ul>
        </ds-card>
        <p>or you can download my resume <a href="">here</a></p>
      </Host >
    );
  }
}
