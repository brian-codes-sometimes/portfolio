import { Component, h, Host } from '@stencil/core';
import { getAssetPath } from '@stencil/core';

getAssetPath('assets/experience/brian_kingsbury_resume.pdf');

@Component({
  tag: 'app-experience',
  styleUrl: 'app-experience.css',
  shadow: false,
})
export class AppExperience {
  render() {
    return (
      <Host>
        <ds-card head="In a nutshell" class="full">
          <ul>
            <li>~9 years experience in UI and design systems</li>
            <li>Have worked on 3 design systems</li>
            <li>Expert in HTML & CSS (+ SCSS & LESS)</li>
            <li>Experience with Angular JS, Angular, React, Web Components, Javascript, and Typescript</li>
            <li>Plenty of experience in Sketch and Figma</li>
            <li>Knowledge and skills in accessibility guidelines (WCAG)</li>
          </ul>
        </ds-card>
        <ds-card head="Artisan Partners (contract)" subhead="March 2026 - Current">
          <h3>Role(s):</h3>
          <ul>
            <li>Front-End Engineer</li>
          </ul>
          <h3>Responsibilities:</h3>
          <ul>
            <li>None! I'm new and still learning.</li>
          </ul>
          <h3>Accomplishments</h3>
          <ul>
            <li>Set an alarm for the first time in years.</li>
          </ul>

        </ds-card>
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
            <li>Collaborated with designers on component implementation</li>
            <li>Helped review new components, patterns, and styles from designers</li>
            <li>Built library of web components</li>
            <li>Developed full documentation site</li>
            <li>Packaged components for installation with NPM</li>
            <li>Regularly released updated versions</li>
            <li>Assisted developers on installation and implementation</li>
          </ul>
          <h3>Accomplishments</h3>
          <ul>
            <li>Joined internal accessibility group, suggested improvements, and shared insights with larger org</li>
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
            <li>Fully restyled our design system customized for prospective client</li>
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
            <li>Collaborated with designers on new components</li>
            <li>Reviewed new component designs for implementation difficulty</li>
            <li>Performed accessibility audits of multiple products</li>
            <li>Assisted UI developer teams with UX focused improvements</li>
            <li>Reviewed UI code from product teams</li>
            <li>Built demo UIs for new products for user testing</li>
            <li>Refactored design system from AngularJS to Angular 2+</li>
          </ul>
          <h3>Accomplishments</h3>
          <ul>
            <li>Assisted with a major UI redesign of main legacy product</li>
            <li>Presented on design system at a local meetup</li>
            <li>Created an accessibility roadmap for company compliance</li>
            <li>Presented to larger org on accessibility best practices</li>
            <li>Joined DEI group to help improve company policies and hiring practices</li>
          </ul>
        </ds-card>
        {/* <ds-card class="spacer"></ds-card> */}
        <ds-card class="full" head="Education" subhead="University of Wisconsin - Milwaukee">
          <h3>Bachelor of Fine Arts - Design and Visual Communication</h3>
        </ds-card>
        <ds-card class="full download">
          <p>You can also download my <a href="assets/experience/brian_kingsbury_resume.pdf" download="brian_kingsbury_resume.pdf">resume</a> if you like.</p>

          <a class="icon" href="assets/experience/brian_kingsbury_resume.pdf" download="brian_kingsbury_resume.pdf"><i class="lni lni-download-1"></i>
          <span class="sr-only">Download resume</span></a>
        </ds-card>
      </Host >
    );
  }
}
