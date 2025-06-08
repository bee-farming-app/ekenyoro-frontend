import { Component, signal } from '@angular/core';

// import { CommonModule } from '@angular/common'; // No longer needed after removing *ngIf

import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'ekenyoro-header',
  standalone: true,
  imports: [RouterModule], // Add RouterModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  signedIn = signal(true);

  // expanding links
  // programExpanded: boolean = false; // Removed
  // resourcesExpanded: boolean = false; // Removed
  // libraryExpanded: boolean = false; // Removed

  // getCurrentYear
  currentYear = signal(new Date().getFullYear());
}
