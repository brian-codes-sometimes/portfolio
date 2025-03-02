import { Component, h } from '@stencil/core';
import { Router } from "../../";

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
  shadow: false,
})
export class AppNav {
  render() {
    const activePath = Router.activePath;
    return (
      <nav class="top-nav">
        <p class="me">Brian Kingsbury</p>
        <div class="links">
            <a class={{'active': activePath === '/about'}} href="/about">About</a>
            <a class={{'active': activePath === '/work'}} href="/work">Work</a>
            <a class={{'active': activePath === '/experience'}} href="/experience">Experience</a>
        </div>
      </nav>
    );
  }
}
