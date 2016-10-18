import { Routes } from '@angular/router';

import { HomeContainer } from '../containers/home-container';
import { ContactContainer } from '../containers/contact-container';

export const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeContainer
    },
    {
        path: 'contact',
        component: ContactContainer
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
