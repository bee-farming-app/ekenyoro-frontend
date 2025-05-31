import { Component, signal } from '@angular/core';

// import { CommonModule } from '@angular/common'; // No longer needed after removing *ngIf

@Component({
  selector: 'ekenyoro-header',
  standalone: true,
  imports: [], // CommonModule removed
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
