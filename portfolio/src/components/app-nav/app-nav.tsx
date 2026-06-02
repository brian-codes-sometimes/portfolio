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
  @State() rainbowMode: boolean = false;


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

  changeRainbow() {
    this.rainbowMode = !this.rainbowMode;
    if (this.rainbowMode) {
      localStorage.setItem('rainbow', "colorful");
      document.body.classList.add('rainbow');
    }
    else {
      localStorage.removeItem('rainbow');
      document.body.classList.remove('rainbow');
    }
  }


  componentWillLoad() {
    var currentTheme = localStorage.getItem('theme');
    var currentRainbow = localStorage.getItem('rainbow');

    if (currentRainbow) {
      this.rainbowMode = true;
      document.body.classList.add('rainbow');
    }
    else if (this.rainbowMode) {
      document.body.classList.add('rainbow');
    }
    else {
      this.rainbowMode = false;
      document.body.classList.remove('rainbow');
    }

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
            <div class="extra-settings">
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
              <div class="rainbow-check">
                <label htmlFor="rainbow">🌈
                  <span class="sr-only">Rainbow mode</span>
                </label>
                <input id="rainbow" type="checkbox"
                  onChange={() => this.changeRainbow()} checked={this.rainbowMode} />
              </div>
            </div>
          </div>
        </nav>

      </Host>
    );
  }
}
