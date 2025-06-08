import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { GetInvolvedComponent } from './components/get-involved/get-involved.component';
import { MediaComponent } from './components/media/media.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Ekenyoro Foundation - Home' },
  { path: 'about-us', component: AboutUsComponent, title: 'About Us - Ekenyoro Foundation' },
  { path: 'our-work', component: OurWorkComponent, title: 'Our Work - Ekenyoro Foundation' },
  { path: 'get-involved', component: GetInvolvedComponent, title: 'Get Involved - Ekenyoro Foundation' },
  { path: 'media', component: MediaComponent, title: 'Media - Ekenyoro Foundation' },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard redirect
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
