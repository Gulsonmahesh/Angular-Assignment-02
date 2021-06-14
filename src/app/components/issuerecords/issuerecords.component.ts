import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-issuerecords',
  templateUrl: './issuerecords.component.html',
  styleUrls: ['./issuerecords.component.scss']
})
export class IssuerecordsComponent {

  constructor() { }

  @Input() issues:any = [];

}
