import { Component } from '@angular/core';

@Component({
    selector: 'app-logo',
    styles: [
        `
            .logo-container {
                width: 100%
            }
        `
    ],
    template: `
        <div class="logo-container">
            <img class="img-responsive" src="assets/images/logo.png" alt="logo">
        </div>
    `
})
export class AppLogoComponent {
}
