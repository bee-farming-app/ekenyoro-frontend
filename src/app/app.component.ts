import { Component, signal } from '@angular/core'; // Import signal

import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { HeaderComponent } from './components/header/header.component'; // Import HeaderComponent

@Component({
  selector: 'app-root',
  standalone: true, // Add standalone: true
  imports: [RouterOutlet, HeaderComponent], // Import necessary modules/components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = signal('ekenyoro-frontend'); // Convert to signal
}
