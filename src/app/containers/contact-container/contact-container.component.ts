import { Component } from '@angular/core';

@Component({
    selector: 'contact-container',
    styles: [
        `
            .contact-section {
                background-color: #f7ab24;
                background-image: url("assets/images/contact-bg.jpg");
            }

            .megaphone {
                position: absolute;
                left: 100px;
                top: 150px;
            }

            #contact .container {
                padding: 50px 0px 500px 200px;
            }
        `
    ],
    template: `
        <section id="contact">
            <div class="contact-section">
                <div class="megaphone">
                    <img class="img-responsive" src="assets/images/megaphone.png" alt="">
                </div>
                <div class="container">
                    <div class="row">
                        <contact-form
                            (formSubmit)="onFormSubmit($event)"></contact-form>
                    </div>
                </div>
            </div>
        </section>
        <!--/#contact-->


    `
})
export class ContactContainer {
    onFormSubmit(formData) {
        console.log('Form submitted:', formData);
    }
}
