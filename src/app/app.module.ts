import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistartionComponent } from './components/registartion/registartion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NumbersOnlyDirective } from './numbers-directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistartionComponent,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
