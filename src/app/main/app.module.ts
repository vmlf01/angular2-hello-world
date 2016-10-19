import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// App is our top level component
import { AppComponent } from './app.component';
import { AppLogoComponent } from '../app-logo';
import { EventDetailsComponent } from '../event-details';
import { ImageSliderComponent } from '../image-slider';
import { ContactFormComponent } from '../contact-form';
import { CommentsListComponent } from '../comments-list';

import { DataService } from '../providers';
import { EmailValidator } from '../providers';

import { APP_ROUTES } from './app.routes';
import { APP_CONTAINERS } from '../containers';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        ...APP_CONTAINERS,
        AppComponent,
        AppLogoComponent,
        EventDetailsComponent,
        ImageSliderComponent,
        ContactFormComponent,
        EmailValidator,
        CommentsListComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        FormsModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        DataService
    ]
})
export class AppModule {
}

