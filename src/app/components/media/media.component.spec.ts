import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MediaComponent ] // Import standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the page title \"Media & Resources\"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header h1')?.textContent).toContain('Media & Resources');
  });

  it('should render the \"Real Stories, Real Impact\" section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#videos h2')?.textContent).toContain('Real Stories, Real Impact');
  });
});
