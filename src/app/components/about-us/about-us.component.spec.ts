import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AboutUsComponent ] // Import standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the \"Who We Are\" section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#who-we-are h2')?.textContent).toContain('Who We Are');
  });

  it('should render content for \"Our Vision\"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#our-vision p')?.textContent).toBeTruthy();
  });
});
