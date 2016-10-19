import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'contact-form',
    styleUrls: [
        './contact-form.style.css'
    ],
    templateUrl: './contact-form.template.html'
})
export class ContactFormComponent {
    @Output() formSubmit = new EventEmitter();
    errors: any;

    onSubmit(form) {
        this.errors = this.collectFormErrors(form);
        if (form.valid) {
            this.formSubmit.emit(form.value);
        }
    }

    collectFormErrors(form) {
        return Object.keys(form.controls).reduce(
            (previousValue, field) => {
                if (form.controls[field].errors) {
                    previousValue.push({ [field]: form.controls[field].errors});
                }
                return previousValue;
            },
            []
        );
    }
}
