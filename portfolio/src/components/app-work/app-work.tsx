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
                            <img
                                src="assets/work/eds/eds-home.png"
                                alt="Thumbnail of Element Design System landing page"
                            />
                        </button>
                        <button popoverTarget='eds2' class="img-pop-trigger">
                            <img
                                src="assets/work/eds/eds-button.png"
                                alt="Thumbnail for button component page"
                            />
                        </button>
                        <button popoverTarget='eds3' class="img-pop-trigger">
                            <img
                                src="assets/work/eds/eds-colors.png"
                                alt="Thumbnail for colors page"
                            />
                        </button>
                        <button popoverTarget='eds4' class="img-pop-trigger">
                            <img
                                src="assets/work/eds/eds-grid.png"
                                alt="Thumbnail for grid page" />
                        </button>
                        <button popoverTarget='eds5' class="img-pop-trigger">
                            <img
                                src="assets/work/eds/eds-changelog.png"
                                alt="Thumbnail for changelog page" />
                        </button>
                        <button popoverTarget='eds6' class="img-pop-trigger">
                            <img
                                src="assets/work/eds/eds-tooltip.png"
                                alt="Thumbnail for tooltip page" />
                        </button>
                    </div>
                    <ds-popover popId="eds1">
                        <img
                            src="assets/work/eds/eds-home.png"
                            loading="lazy"
                            alt="A simple landing page for Element Design System" />
                    </ds-popover>
                    <ds-popover popId="eds2">
                        <img
                            src="assets/work/eds/eds-button.png"
                            loading="lazy"
                            alt="Documentation for a button component including a playground to test out different variants and states. Also shows live examples, implementation standards, and code snippets for developers." />
                    </ds-popover>
                    <ds-popover popId="eds3">
                        <img
                            src="assets/work/eds/eds-colors.png"
                            loading="lazy"
                            alt="Documentation for color variables with swatches of every color type and tone" />
                    </ds-popover>
                    <ds-popover popId="eds4">
                        <img
                            src="assets/work/eds/eds-grid.png"
                            loading="lazy"
                            alt="Documentation for grid styles including implementation instructions, code snippets, and visual examples" />
                    </ds-popover>
                    <ds-popover popId="eds5">
                        <img
                            src="assets/work/eds/eds-changelog.png"
                            loading="lazy"
                            alt="Documentation for a changelog listing all the released versions of the design system including what was added, changed or fixed. Latest release was v0.5.1 released on January 3rd and included changes to icon font styles and fixed an icon render issue" />
                    </ds-popover>
                    <ds-popover popId="eds6">
                        <img
                            src="assets/work/eds/eds-tooltip.png"
                            loading="lazy"
                            alt="Documentation for the tooltip component showing live examples, code snippets, implementation standards, and various properties" />
                    </ds-popover>
                </ds-card>

                <ds-card head="Rivet Design System" subhead="HTML / SCSS / Angular">
                    <p>Rivet was an internal design system and component library built for both designers and developers. It consisted of two parts, one being an NPM package containing all the components and styles for developers to import into their projects, and the other part being the documentation site. The documentation site showcased the components and styles, explained best practices and use cases, and provided examples with implementation standards.</p>
                    <div class="photos">
                        <button popoverTarget='rivet1' class="img-pop-trigger">
                            <img src="assets/work/rivet/rivet_1.png" />
                        </button>
                        <button popoverTarget='rivet2' class="img-pop-trigger">
                            <img src="assets/work/rivet/rivet_2.png" />
                        </button>
                        <button popoverTarget='rivet3' class="img-pop-trigger">
                            <img src="assets/work/rivet/rivet_3.png" />
                        </button>
                        <button popoverTarget='rivet4' class="img-pop-trigger">
                            <img src="assets/work/rivet/rivet_4.png" />
                        </button>
                        <button popoverTarget='rivet5' class="img-pop-trigger">
                            <img src="assets/work/rivet/rivet_5.png" />
                        </button>
                        <button popoverTarget='rivet6' class="img-pop-trigger">
                            <img src="assets/work/rivet/rivet_6.png" />
                        </button>
                    </div>
                    <ds-popover popId="rivet1">
                        <img
                            src="assets/work/rivet/rivet_1.png"
                            loading="lazy"
                            alt="A landing page for Rivet Design System featuring a geometric design on a purple header, the latest version of 5.14.0, and a mission statement"
                        />
                    </ds-popover>
                    <ds-popover popId="rivet2">
                        <img
                            src="assets/work/rivet/rivet_2.png"
                            loading="lazy"
                            alt="Documentation for button components feature use cases, live examples, and code snippets."
                        />
                    </ds-popover>
                    <ds-popover popId="rivet3">
                        <img
                            src="assets/work/rivet/rivet_3.png"
                            loading="lazy"
                            alt="Documentation for color tokens featuring a swatch, variable name, HSL value, HEX value, and RGB value."
                        />
                    </ds-popover>
                    <ds-popover popId="rivet4">
                        <img
                            src="assets/work/rivet/rivet_4.png"
                            loading="lazy"
                            alt="Documentation for icons including a search feature, and tiles of all available icons containing an icon example and class name."
                        />
                    </ds-popover>
                    <ds-popover popId="rivet5">
                        <img
                            src="assets/work/rivet/rivet_5.png"
                            loading="lazy"
                            alt="Documentation for a Spacing page with implementation instructions, and a table of spacing size, variables, default value, and a graphic representation of the spacing."
                        />
                    </ds-popover>
                    <ds-popover popId="rivet6">
                        <img
                            src="assets/work/rivet/rivet_6.png"
                            loading="lazy"
                            alt="A theming panel that showcases various theming experiments including a dark mode toggle, dense or relaxed layout toggle, custom theme color picker, text size adjustor, and spacing adjustor."
                        />
                    </ds-popover>
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
                        <img
                            src="assets/work/cym/cym_1.png"
                            loading="lazy"
                            alt="Landing page for a yoga website featuring a list of upcoming classes, with light pastel colors." />
                    </ds-popover>
                    <ds-popover popId="cym2">
                        <img
                            src="assets/work/cym/cym_2.png"
                            loading="lazy"
                            alt="Web page of full descriptions of current classes offered, including details and an image of kids in a circle of yoga mats doing poses" />
                    </ds-popover>

                    <ds-popover popId="cym3">
                        <img
                            src="assets/work/cym/cym_3.png"
                            loading="lazy"
                            alt="Web page of a full FAQ about yoga and classes offered, with a subtle seedling illustration in the background"/>
                    </ds-popover>

                    <p>Feel free to visit the <a href="www.cultivateyogamke.com" target="_blank">live site</a></p>

                </ds-card>


                <ds-card head="Retro" subhead="HTML / SCSS / React">
                    <p>An alternate portfolio site inspired by my first childhood computer - using Macintosh OS 7. It was also my first introduction to design through Kid Pix. I mainly use it as a way to learn new and different approaches to with HTML, CSS, & JS by trying mimic the traditional design and functionality of old operating systems.  I'll occasionally add new features and content. <br />For now, it's best viewed in Chrome on a desktop. Screenshots don't do it justice.</p>
                    <div class="photos">
                        <button popoverTarget="retro1" class="img-pop-trigger">
                            <img src="assets/work/retro_3.png" />
                        </button>
                    </div>
                    <ds-popover popId="retro1">
                        <img
                            src="assets/work/retro_2.png"
                            loading="lazy"
                            alt="A basic grayscale portfolio website that is made to look like an old Macintosh 7 operating system" />
                    </ds-popover>
                    <p>
                        Check out the <a href="https://thriving-tartufo-af75bb.netlify.app/" target="_blank">live version</a>
                    </p>
                </ds-card>
            </Host>
        )
    }
}
