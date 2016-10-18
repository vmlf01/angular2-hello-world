import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'image-slider',
    styleUrls: [
        './image-slider.style.css'
    ],
    templateUrl: './image-slider.template.html'
})
export class ImageSliderComponent implements OnInit, OnDestroy {
    @Input() image: string;
    @Input() images: string[];

    private currentImageIndex: number;
    private sliderTimeout;

    ngOnInit() {
        this.currentImageIndex = 0;
        this.sliderTimeout = setInterval(() => this.showNextImage(), 4000);
    }

    ngOnDestroy() {
        clearInterval(this.sliderTimeout);
    }

    showNextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
}
