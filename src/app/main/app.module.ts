import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App is our top level component
import { AppComponent } from './app.component';
import { AppLogoComponent } from '../app-logo';
import { EventDetailsComponent } from '../event-details';

import { DataService } from '../providers';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AppLogoComponent,
        EventDetailsComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        DataService
    ]
})
export class AppModule {
}

