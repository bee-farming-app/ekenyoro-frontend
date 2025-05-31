import { Component } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'ekenyoro-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
