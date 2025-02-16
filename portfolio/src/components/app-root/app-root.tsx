import { Component, h, Host } from '@stencil/core';
import { Router } from "../../";
import { Route } from "stencil-router-v2";

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {

  render() {
    return (
      <Host>
          <app-nav></app-nav>
          <header>
            <h1>{Router.activePath}</h1>
          </header>

          <main>
            <Router.Switch>
              <Route path="/" to="/about">
                <app-about></app-about>
              </Route>
              <Route path="/about">
                <app-about></app-about>
              </Route>
              <Route path="/work">
                <app-work></app-work>
              </Route>
              <Route path="/experience">
                <app-experience></app-experience>
              </Route>
            </Router.Switch>
          </main>
          <footer>
            <p>built by Brian</p>
            
            <button class="popover-trigger" popoverTarget='disclaimer'>without AI</button>
            
            <div id="disclaimer" popover="auto">
              <p>This site was made entirely without the help of AI. No AI code was generated and no AI results were searched in the building of this site. While I think there may eventually be a positive use for AI, at the moment I think it is filled with errors, perpetuates bias, and harms the environment.</p>
            </div>
          </footer>
      </Host>
    );
  }
}
