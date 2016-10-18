import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// App is our top level component
import { AppComponent } from './app.component';
import { AppLogoComponent } from '../app-logo';
import { EventDetailsComponent } from '../event-details';
import { ImageSliderComponent } from '../image-slider';

import { DataService } from '../providers';
import { APP_CONTAINERS } from '../containers';
import { APP_ROUTES } from './app.routes';


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        AppLogoComponent,
        EventDetailsComponent,
        ImageSliderComponent,
        ...APP_CONTAINERS
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        DataService
    ]
})
export class AppModule {
}

