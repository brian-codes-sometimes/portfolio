import { Component, h, Host } from '@stencil/core';

@Component({
    tag: 'app-about',
    styleUrl: 'app-about.css',
    shadow: false,
})
export class AppAbout {
    render() {
        return (
            <Host>
                <ds-card>
                    <h2>Who I am</h2>
                    <p>I am me and we are he and he are the walrus or something. I have a pitbull named Wrigley.</p>
                </ds-card>

                <ds-card>
                    <h2>What I do</h2>
                    <p>I build design systems and improve web accessibility. I have worked on 3 design systems so far in my career, having built 2 of them from scratch.</p>
                </ds-card>
                <div class="halfsies">
                    <ds-card>
                        <h2>Hobbies</h2>
                        <ul>
                            <li>Woodworking</li>
                            <li>Something</li>
                        </ul>
                    </ds-card>

                    <ds-card>
                        <h2>Interests</h2>
                        <ul>
                            <li>Something else</li>
                        </ul>
                    </ds-card>
                </div>
            </Host>
        )
    }
}
