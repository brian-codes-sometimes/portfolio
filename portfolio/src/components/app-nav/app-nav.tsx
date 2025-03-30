import { Component, h, Host, State } from '@stencil/core';
import { Router } from "../../";
import { getAssetPath } from '@stencil/core';

getAssetPath('assets/*');

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
  shadow: false,
})
export class AppNav {
  @State() isLightMode: boolean;
  @State() themeChoice: string;


  toggleMode() {
    this.isLightMode = !this.isLightMode;
    this.checkMode();
  }

  checkMode() {
    if (this.isLightMode) {
      this.themeChoice = "light";
    }
    else {
      this.themeChoice = "dark";
    }

    document.documentElement.setAttribute('data-theme', this.themeChoice);
    localStorage.setItem('theme', this.themeChoice);
  }

  componentWillLoad() {
    var currentTheme = localStorage.getItem('theme');
    /* Set theme to stored theme if it exists */
    if (currentTheme) {
      this.themeChoice = currentTheme;
      if (this.themeChoice === "light") {
        this.isLightMode = true;
      }
      else {
        this.isLightMode = false;
      }
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.isLightMode = false;
      document.documentElement.setAttribute('data-theme', "dark");
    }
    else {
      this.isLightMode = true;
      document.documentElement.setAttribute('data-theme', "light");
    }

  }

  render() {
    const activePath = Router.activePath;
    return (
      <Host>
        <nav class="top-nav">
          <p class="me">Brian Kingsbury</p>
          <div class="links">
            <a class={{ 'active': activePath === '/about' }} href="/about">About</a>
            <a class={{ 'active': activePath === '/work' }} href="/work">Work</a>
            <a class={{ 'active': activePath === '/experience' }} href="/experience">Experience</a>
            <button 
            class="settings" 
            onClick={() => this.toggleMode()}
            aria-label={this.isLightMode ? "Switch to dark mode" : "Switch to light mode"}>
              {this.isLightMode ?
                <i class="lni lni-sun-1" aria-hidden="true"></i>
                :
                <i class="lni lni-moon-half-right-5" aria-hidden="true"></i>
              }
            </button>
          </div>
        </nav>

      </Host>
    );
  }
}
