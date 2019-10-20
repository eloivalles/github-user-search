import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material'

import { GithubAPIService } from './services/githubAPI.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewerComponent } from './pages/viewer/viewer.component';
import { SafeurlPipe } from './core/pipes/safeurl';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewerComponent,
    SafeurlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [GithubAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
