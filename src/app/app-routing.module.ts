import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IssuerecordsComponent } from './components/issuerecords/issuerecords.component';
import { AboutComponent } from './components/about/about.component';
import { IssuedetailComponent } from './components/issuedetail/issuedetail.component';

const routes: Routes = [
  { path:'issues', component: IssuerecordsComponent},
  { path:'issuedetail/:id', component: IssuedetailComponent},
  { path:'about', component: AboutComponent},
  { path:'', component: AppComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
