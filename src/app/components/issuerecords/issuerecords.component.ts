import { Component, Input, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';


@Component({
  selector: 'app-issuerecords',
  templateUrl: './issuerecords.component.html',
  styleUrls: ['./issuerecords.component.scss']
})
export class IssuerecordsComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  loadError = false;
  errorMessage = '';
  issues:any  = [];

  getIssueData() {
    this.issueService.getIssueList().subscribe(
      data=> {
        this.loadError = false;
        this.issues = data;
      },
      error => {
        console.log(error)
        this.errorMessage = error;
        this.loadError = true;
      }
    )
  }

  ngOnInit(): void {
    this.getIssueData();
  }

  addIssueEntry(event: any) {
    console.log(event);
    this.issues.push(event);
  }
}
