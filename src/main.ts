/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app-routing.module'; // Import the exported routes
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // For animations
import { HttpClientModule } from '@angular/common/http'; // Example, if HttpClient is needed

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      BrowserAnimationsModule, // Add if animations are used
      HttpClientModule       // Add if HttpClient is used
      // Add other necessary NgModule-based providers here
    ),
    // Add any other standalone providers here
  ]
}).catch(err => console.error(err));
