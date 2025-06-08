import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component'; // Import FooterComponent

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomeComponent, FooterComponent ], // Moved from declarations
      // declarations: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the new hero headline', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#home h1')?.textContent).toContain('Empowering Rural Resilience Through Innovation');
  });
});
