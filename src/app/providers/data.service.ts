import { Injectable } from '@angular/core';

import { EventModel } from '../models';

// @Injectable() makes TypeScript generate metadata
// for this class, which allows us to use DI to
// inject dependencies into this class if needed
@Injectable()
export class DataService {
    getEvent(): EventModel {
        return {
            title: 'Angular 2 Welcome Party',
            images: [
                'assets/images/slider/bg1.jpg',
                'assets/images/slider/bg2.jpg',
                'assets/images/slider/bg3.jpg',
                'assets/images/slider/bg4.jpg',
                'assets/images/slider/bg5.jpg',
                'assets/images/slider/bg6.jpg'
            ]
        };
    }
}
