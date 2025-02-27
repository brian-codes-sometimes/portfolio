import { Component, h, Host } from '@stencil/core';
import { getAssetPath } from '@stencil/core';

getAssetPath('assets/work/*');

@Component({
    tag: 'app-work',
    styleUrl: 'app-work.css',
    shadow: false,
})
export class AppWork {
    render() {
        return (
            <Host>
                <ds-card head="Element Design System" subhead="HTML / SCSS / Web Components">
                    <p>
                        Element Design System was a newly created component library built with web components. Web components were chosen to ensure maximum flexibility with a wide variety of products and frameworks being used. The components were packaged up into an NPM package and also had React and Angular packages for use in common products. A full documentation site was also developed to inform developers how to use and install the package and it's components, as well as showcase varying styles, variables, and component examples with code snippets.
                    </p>
                    <div class="photos">
                        <button popoverTarget='eds1' class="img-pop-trigger">
                            <img src="assets/work/eds/eds-home.png" />
                        </button>
                        <button popoverTarget='eds2' class="img-pop-trigger">
                            <img src="assets/work/eds/eds-button.png" />
                        </button>
                    </div>
                    <ds-popover popId="eds1">
                        <img src="assets/work/eds/eds-home.png" />
                    </ds-popover>
                    <ds-popover popId="eds2">
                        <img src="assets/work/eds/eds-button.png" />
                    </ds-popover>
                </ds-card>

                <ds-card head="Rivet Design System" subhead="HTML / SCSS / Angular">
                    <p>Rivet was an internal design system and component library built for both designers and developers. It consisted of two parts, one being an NPM package containing all the components and styles for developers to import into their projects, and the other part being the documentation site. The documentation site showcased the components and styles, explained best practices and use cases, and provided examples with implementation standards.</p>
                    <div class="photos">
                        <img src="assets/work/rivet/rivet.png" loading="lazy" />
                        <img src="assets/work/rivet/rivet-2.png" loading="lazy" />
                        <img src="assets/work/rivet/rivet-3.png" loading="lazy" />
                        <img src="assets/work/rivet/rivet-4.png" loading="lazy" />
                        <img src="assets/work/rivet/rivet-5.png" loading="lazy" />
                    </div>
                </ds-card>

                <ds-card head="Cultivate Yoga MKE" subhead="HTML / SCSS / Angular">
                    <p>A multi-page website showing upcoming events, full descriptions of regular classes, and more info about the style and teacher. Built using Angular to easily repeat classes over time, only needing to add dates to existing classes once they are confirmed. Integrates with Calendly to allow users to book classes from within the site.</p>

                    <div class="photos">
                        <button popoverTarget='cym1' class="img-pop-trigger">
                            <img src="assets/work/cym/cym_1.png" />
                        </button>
                        <button popoverTarget='cym2' class="img-pop-trigger">
                            <img src="assets/work/cym/cym_2.png" />
                        </button>
                        <button popoverTarget='cym3' class="img-pop-trigger">
                            <img src="assets/work/cym/cym_3.png" />
                        </button>
                    </div>
                    <ds-popover popId="cym1">
                        <img src="assets/work/cym/cym_1.png" />
                    </ds-popover>
                    <ds-popover popId="cym2">
                        <img src="assets/work/cym/cym_2.png" />
                    </ds-popover>

                    <ds-popover popId="cym3">
                        <img src="assets/work/cym/cym_3.png" />
                    </ds-popover>

                    <p>
                        Feel free to visit the <a href="www.cultivateyogamke.com" target="_blank">live site</a></p>

                </ds-card>


                <ds-card head="Retro" subhead="HTML / SCSS / React">
                    <p>An alternate portfolio site inspired by my first childhood computer - using Macintosh OS 7. It was also my first introduction to design through Kid Pix. I mainly use it as a way to learn new and different approaches to with HTML, CSS, & JS by trying mimic the traditional design and functionality of old operating systems.  I'll occasionally add new features and content. For now, it's best viewed in Chrome on a desktop. Screenshots don't do it justice.</p>
                    <div class="photos">
                        <button popoverTarget="retro1" class="img-pop-trigger">
                            <img src="assets/work/retro_1.png" />
                        </button>
                    </div>
                    <ds-popover popId="retro1">
                        <img src="assets/work/retro_1.png" />
                    </ds-popover>
                    <p>
                        Check out the <a href="https://thriving-tartufo-af75bb.netlify.app/" target="_blank">live version</a>
                    </p>
                </ds-card>
            </Host>
        )
    }
}
