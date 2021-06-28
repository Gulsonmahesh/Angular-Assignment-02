import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IssuerecordsComponent } from './components/issuerecords/issuerecords.component';
import { IssueentryComponent } from './components/issueentry/issueentry.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { IssuedetailComponent } from './components/issuedetail/issuedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IssuerecordsComponent,
    IssueentryComponent,
    AboutComponent,
    IssuedetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
