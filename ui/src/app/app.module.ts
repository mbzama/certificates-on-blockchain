import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';
import { ValidateComponent } from './validate/validate.component';

import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    StudentComponent,
    UniversityComponent,
    ValidateComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
