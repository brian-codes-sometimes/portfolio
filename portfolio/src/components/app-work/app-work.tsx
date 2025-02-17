import { Component, h, Host } from '@stencil/core';
import { getAssetPath } from '@stencil/core';

getAssetPath('assets/work/*')

@Component({
    tag: 'app-work',
    styleUrl: 'app-work.css',
    shadow: false,
})
export class AppWork {
    render() {
        return (
            <Host>
                <ds-card head="Element Design System" subhead="HTML / SCSS/ Web Components">
                    <p>Element Design System was a newly created component library built with web components. </p>
                    <div class="photos">
                    </div>
                </ds-card>

                <ds-card head="Rivet Design System" subhead="HTML / SCSS/ Angular">
                    <p>Rivet is an internal design system and component library built for both designers and developers. It consists of two parts, one being an NPM package containing all the components and styles for developers to import into their projects, and the other part being the documentation site. The documentation site showcased the components and styles, explained best practices and use cases, and provided examples with implementation standards.</p>
                    <div class="photos">
                        <img src="assets/work/rivet.png" />
                        <img src="assets/work/rivet-2.png" />
                        <img src="assets/work/rivet-3.png" />
                        <img src="assets/work/rivet-4.png" />
                        <img src="assets/work/rivet-5.png" />
                    </div>
                </ds-card>

                <ds-card  head="Cultivate Yoga MKE" subhead="HTML / SCSS/ Angular">
                    <p>A multi-page website showing upcoming events, full descriptions of regular classes, and more info about the style and teacher. Built using Angular to easily repeat classes over time, only needing to add dates to existing classes once they are confirmed. Integrates with Calendly to allow users to book classes from within the site.</p>
                    <div class="photos">
                        <button popoverTarget='cym1' class="img-pop-trigger">
                            <img src="assets/work/cym_1.png" />
                        </button>
                    </div>
                    <ds-popover popId="cym1">
                        <img src="assets/work/cym_1.png" />
                    </ds-popover>
                    {/* <div id="cym1" popover="auto">
                    <div class="overlay"></div>
                    <img src="assets/work/cym_1.png" class="lg-photo"/>
                    </div> */}
                </ds-card>


                <ds-card  head="Retro" subhead="HTML / SCSS/ React">
                    <p>A site inspired by my first childhood computer - using Macintosh OS 7 which was also my first introduction to design with Kid Pix. I'll occasionally add new features and content. For now, it's best viewed in Chrome on a desktop. Screenshots don't do it justice.</p>
                    <div class="photos">
                        <button popoverTarget="retro1" class="img-pop-trigger">
                            <img src="assets/work/retro_1.png" />
                        </button>
                    </div>
                    <ds-popover popId="retro1">

                        <img src="assets/work/retro_1.png" />
                    </ds-popover>
                </ds-card>
            </Host>
        )
    }
}
