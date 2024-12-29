import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AppartementComponent } from './appartement/appartement.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateResidenceComponent } from './update-residence/update-residence.component'

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    ResidenceDetailsComponent,
    AppartementComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AddResidenceComponent,
    FormAppartementComponent,
    UpdateResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
