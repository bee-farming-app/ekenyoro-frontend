import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FooterComponent ], // Moved from declarations
      // declarations: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the current year', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const currentYear = new Date().getFullYear().toString();
    expect(compiled.textContent).toContain(`© ${currentYear} Ekenyoro, Inc. All rights reserved.`);
  });

  it('should display the contact email', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Use the actual email value from the component's signal
    expect(compiled.textContent).toContain(`Email: ${component.email()}`);
  });

  it('should display the contact phone number', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    // Use the actual phone number value from the component's signal
    expect(compiled.textContent).toContain(`Phone: ${component.phoneNumber()}`);
  });
});
