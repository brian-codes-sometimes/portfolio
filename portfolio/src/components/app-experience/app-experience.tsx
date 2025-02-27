import { Component, h, Host } from '@stencil/core';
import { getAssetPath } from '@stencil/core';

getAssetPath('assets/experience/*');

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
          <h3>Role(s):</h3>
          <ul>
            <li>Senior UI/UX Developer</li>
          </ul>
          <h3>Responsibilities:</h3>
          <ul>
            <li>Sole developer on design system team</li>
            <li>Decided on framework (web components)</li>
            <li>Pitched framework decision to stakeholders</li>
            <li>Built library of web components</li>
            <li>Developed full documentation site</li>
            <li>Packaged components for installation</li>
            <li>Regularly released updated versions</li>
          </ul>
          <h3>Accomplishments</h3>
          <ul>
            <li>Joined internal accessibility group, suggested improvements and shared insights with larger org</li>
            <li>Built up a brand new component library</li>
          </ul>
        </ds-card>
        <ds-card head="InvestCloud" subhead="March 2021 - June 2022">
          <h3>Role(s):</h3>
          <ul>
            <li>Senior Designer</li>
          </ul>
          <h3>Responsibilities</h3>
          <ul>
            <li>Created new user flows for internal products</li>
            <li>Designed UI mock-ups for new functionality</li>
            <li>Customized branded design systems for client projects</li>
            <li>Designed layouts for print and digital product books</li>
          </ul>
          <h3>Accomplishments</h3>
          <ul>
            <li>Delivered 100s of mockups and a 50+ page product book to a large client</li>
          </ul>
        </ds-card>
        <ds-card head="Advicent Solutions" subhead="April 2016 - March 2021">
          <h3>Role(s):</h3>
          <ul>
            <li>Senior UX Developer</li>
            <li>UX Developer</li>
            <li>Associate UX Developer</li>
          </ul>
          <h3>Responsibilities</h3>
          <ul>
            <li>Maintained and added to Angular component library</li>
            <li>Continually updated documentation site of design system</li>
            <li>Performed accessibility audits of multiple products</li>
            <li>Assisted UI teams with UX focused improvements</li>
            <li>Built demo UIs for new products for user testing</li>
            <li>Refactored design system from AngularJS to Angular 2+</li>
          </ul>
          <h3>Accomplishments</h3>
          <ul>
            <li>Created an a11y roadmap for company compliance</li>
            <li>Presented to larger org on accessibility best practices</li>
            <li>Joined DEI group to help improve company standards</li>
          </ul>
        </ds-card>
        <ds-card full>
          <p>You can also download my <a href="assets/brian_kingsbury_resume.pdf" download>resume</a> if you like.</p>
        </ds-card>
      </Host >
    );
  }
}
