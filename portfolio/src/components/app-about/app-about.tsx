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
                <ds-card head="Who I am" class="who">
                    <p>I am me and we are he and he are the walrus or something. I have a pitbull named Wrigley.</p>  
                </ds-card>

                <ds-card head="What I do" class="what">
                    <p>I primarily build design systems and improve web accessibility. I have worked on 3 design systems so far in my career, having built 2 of them from scratch. I am a designer's best friend, I will build components to match designs as closely as possible down to the pixel (provided it's accessible).</p>
                </ds-card>
                <div class="halfsies">
                    <ds-card head="Hobbies" class="hobbies">
                        <ul>
                            <li>Woodworking</li>
                            <li>Bird Watching</li>
                        </ul>
                    </ds-card>

                    <ds-card head="Interests" class="interests">
                        <ul>
                            <li>Something else</li>
                        </ul>
                    </ds-card>
                </div>
            </Host>
        )
    }
}
