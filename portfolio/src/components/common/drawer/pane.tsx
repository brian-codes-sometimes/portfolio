import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
    tag: 'ds-pane',
    styleUrl: 'pane.css',
    shadow: false,
})
export class DsPane {
    @Prop({ mutable: true }) isOpen: boolean;
    @State() themeChoice: string;
    @Prop({ mutable: true }) contrastChoice: boolean;

    componentDidLoad() {
        var currentTheme = localStorage.getItem('theme');
        var currentContrast = localStorage.getItem('contrast');
        /* Set theme to stored theme if it exists */
        if (currentTheme) {
            this.themeChoice = currentTheme;
            document.documentElement.setAttribute('data-theme', currentTheme);
        }

        if (currentContrast) {
            this.contrastChoice = true;
            document.querySelector("html").setAttribute("data-contrast-theme", currentContrast)
        }

        const radioButtons = document.querySelectorAll('input[name="theme"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', (event: Event) => {
                const target = event.target as HTMLInputElement;
                /* Set current theme and save choice */
                this.themeChoice = target.value;
                document.documentElement.setAttribute('data-theme', target.value);
                localStorage.setItem('theme', target.value);
            });
        });
        // document.querySelector('input[name="contrast"]').addEventListener('change', (event: Event) => {
        //     const target = event.target as HTMLInputElement;
        //     // document.documentElement.style.
        //     if (target.checked) {
        //         this.contrastChoice = true;
        //         document.querySelector("html").setAttribute("data-contrast-theme", target.value)
        //         localStorage.setItem('contrast', target.value);
        //     }
        //     else {
        //         document.querySelector("html").removeAttribute("data-contrast-theme");
        //         localStorage.removeItem("contrast");
        //     }
        // })
    }

    render() {
        return (
            <Host>
                <aside class={this.isOpen ? "side-panel visible" : "side-panel"}>
                    <header>
                        <p>Settings</p>
                    </header>
                    <fieldset class="theme">
                        <legend>Theme</legend>
                        <div class="ds-radio">
                            <input id="dark" type="radio" name="theme" value="dark"
                                checked={this.themeChoice === "dark"} />
                            <label htmlFor="dark" class="dark">Dark</label>
                        </div>

                        <div class="ds-radio light">
                            <input id="light" type="radio" name="theme" value="light"
                                checked={this.themeChoice === "light"} />
                            <label htmlFor="light" class="light">Light</label>
                        </div>
                    </fieldset>

                    {/* <hr />
    
                        <fieldset class="contrast">
                            <input type="checkbox" id="highContrast" name="contrast" value="more" checked={this.contrastChoice} />
                            <label htmlFor="highContrast">MORE Contrast!</label>
                        </fieldset> */}
                </aside>
            </Host>
        );
    }
}
