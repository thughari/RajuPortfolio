
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
  certifications = [
    {
      name: 'AWS Certified Associate - Developer',
      issuer: 'Amazon Web Services',
    },
    {
      name: 'AWS Partner: Generative AI Essentials (Business)',
      issuer: 'AWS',
    },
    {
      name: 'PostgreSQL Certified',
      issuer: 'Udemy',
    }
  ];
}
