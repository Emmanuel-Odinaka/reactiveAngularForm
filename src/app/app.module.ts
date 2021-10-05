import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FomanticUIModule } from 'ngx-fomantic-ui';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FeatureComponent } from './components/feature/feature.component';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './components/route/route.component';

@NgModule({
  declarations: [AppComponent, FeatureComponent, RouteComponent],
  imports: [
    BrowserModule,
    FomanticUIModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    RouterModule.forRoot([
      { path: '', component: FeatureComponent },
      { path: 'route', component: RouteComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
