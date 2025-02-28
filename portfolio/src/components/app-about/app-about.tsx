import { Component, h, Host, State } from '@stencil/core';

@Component({
    tag: 'app-about',
    styleUrl: 'app-about.css',
    shadow: false,
})
export class AppAbout {
    @State() curEmoji = 0;
    emojiList: string[] = ["👋", "🪿", "👾", "🤖", "🧔", "🍩", "🚲", "⛺"];

    swapEmoji() {
        const randomEmoji = Math.floor(Math.random() * this.emojiList.length);
        if (randomEmoji === this.curEmoji) {
            this.swapEmoji();
        }
        else {
            this.curEmoji = randomEmoji;
        }
    }
    render() {
        return (
            <Host>
                <ds-card head="Who I am" class="who">
                    <p class="emoji-line">
                        Hey!
                        <button
                            class="emoji"
                            onClick={() => this.swapEmoji()}>
                            {this.emojiList[this.curEmoji]}
                        </button>
                    </p>
                    <p>I'm Brian Kingsbury (he/him). I am a parent, accessibility advocate, and a user experience developer/ engineer based in Milwaukee, WI. I tend to collect sketchbooks and note apps, I have watched way too many episodes of This Old House, and I have a pitbull named Wrigley. Currently, I am <span class="status">looking for my next project!</span></p>
                </ds-card>

                <ds-card head="What I do" class="what">
                    <p>I primarily build design systems and improve web accessibility, but have also spent some time doing design. I have worked on 3 design systems so far in my career, having built 2 of them from scratch. I have also been known to dabble in different products, improving the UI, and making some pixel perfect adjustments. I am a designer's best friend, I try to build components to match designs as closely as possible down to the pixel (provided it's accessible).</p>
                </ds-card>
                <div class="halfsies">
                    <ds-card head="Hobbies & Interests" class="hobbies">
                        <ul>
                            <li>Woodworking</li>
                            <li>Birding</li>
                            <li>Biking</li>
                            <li>Camping</li>
                            <li>Gaming</li>
                            <li>Reading</li>
                            <li>Rebuilding portfolio sites</li>
                        </ul>
                    </ds-card>

                    <ds-card head="Contact" class="contact">
                        <div class="contact-list">
                            <i class="lni lni-linkedin" aria-hidden="true"></i>
                            <a href="https://www.linkedin.com/in/brian-kingsbury-37b274140/">LinkedIn</a>
                            <i class="lni lni-envelope-1" aria-hidden="true"></i>
                            <a href="mailto:briankingsbury.mke@gmail.com">Email me</a>
                            <i class="lni lni-github" aria-hidden="true"></i>
                            <a href="https://github.com/brian-codes-sometimes">Github</a>
                        </div>
                    </ds-card>
                </div>
            </Host>
        )
    }
}
