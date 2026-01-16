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

    if (Router.activePath === "/") {
      curPath = "about";
    }
    else {
      var curPath = Router.activePath.slice(1);
    }
    return (
      <Host>
        <app-nav>
        </app-nav>
        <header>
          <h1>{curPath}</h1>
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
          <div class="disclaim">
            <p>built by Brian</p>
            <button class="disclaimer-trigger" popoverTarget='disclaimer'>without AI</button>
          </div>
          <p class="copy">© Copyright - Brian Kingsbury 2026</p>
          <ds-popover popId="disclaimer">
            <p>This site was made entirely without the help of AI. No AI code was generated and no AI results were searched in the building of this site. While there may eventually be a positive use for AI, at the moment it is filled with errors, uses stolen work, perpetuates harmful bias, and contributes to global warming.</p>
          </ds-popover>
        </footer>
      </Host>
    );
  }
}
