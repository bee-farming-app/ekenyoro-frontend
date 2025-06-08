import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkComponent } from './our-work.component';

describe('OurWorkComponent', () => {
  let component: OurWorkComponent;
  let fixture: ComponentFixture<OurWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OurWorkComponent ] // Import standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page title \"Our Work\"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header h1')?.textContent).toContain('Our Work');
  });

  it('should render the \"Bees4Life\" project title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#bees4life h2')?.textContent).toContain('Bees4Life');
  });
});
