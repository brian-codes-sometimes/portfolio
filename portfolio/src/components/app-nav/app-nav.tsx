import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
  shadow: false,
})
export class AppNav {
  render() {
    return (
      <nav class="top-nav">
        <p class="name">Brian Kingsbury</p>
        <div class="links">
            <a href="../about">About</a>
            <a href="../work">Work</a>
            <a href="../experience">Experience</a>
            <button>
              <img src="../../assets/settings.svg" alt="settings icon"/>
            </button>
        </div>
      </nav>
    );
  }
}
