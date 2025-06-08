import { Component, signal } from '@angular/core';

@Component({
  selector: 'ekenyoro-footer',
  standalone: true,
  imports: [], // No specific imports needed for its own template for now
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = signal(new Date().getFullYear());
  email = signal('info@ekenyoro.org'); // Placeholder updated
  phoneNumber = signal('+254 7XX XXX XXX'); // Placeholder updated
}
