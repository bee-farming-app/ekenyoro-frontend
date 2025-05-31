import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Removed

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [/* AppComponent, HeaderComponent, FooterComponent, HomeComponent */],
  imports: [/* BrowserModule, AppRoutingModule */], // BrowserModule & AppRoutingModule are not needed here anymore
  providers: [],
  // bootstrap: [AppComponent], // AppComponent is bootstrapped via bootstrapApplication in main.ts
})
export class AppModule {}
