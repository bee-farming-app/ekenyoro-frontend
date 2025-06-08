import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvolvedComponent } from './get-involved.component';

describe('GetInvolvedComponent', () => {
  let component: GetInvolvedComponent;
  let fixture: ComponentFixture<GetInvolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GetInvolvedComponent ] // Import standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page title \"Get Involved\"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header h1')?.textContent).toContain('Get Involved');
  });

  it('should render the \"Ways to Support Ekenyoro\" section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#ways-to-support h2')?.textContent).toContain('Ways to Support Ekenyoro');
  });
});
