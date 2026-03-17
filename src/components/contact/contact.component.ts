
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  email = 'Bandaram.raju@gmail.com';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      // Here you would typically send the data to a backend service
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    }
  }
}
