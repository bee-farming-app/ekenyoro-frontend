import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Routes = [{ path: '', component: HomeComponent }]; // Export routes

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Use appRoutes
  exports: [RouterModule],
})
export class AppRoutingModule {}
