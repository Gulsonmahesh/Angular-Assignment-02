import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IssuerecordsComponent } from './components/issuerecords/issuerecords.component';
import { IssueentryComponent } from './components/issueentry/issueentry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IssuerecordsComponent,
    IssueentryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
