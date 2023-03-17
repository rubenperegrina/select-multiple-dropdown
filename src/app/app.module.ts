import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelect1Component } from './components/multi-select1/multi-select1.component';
import { MultiSelect2Component } from './components/multi-select2/multi-select2.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelect1Component,
    MultiSelect2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,

    MatNativeDateModule
  ],
  exports: [MatSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
