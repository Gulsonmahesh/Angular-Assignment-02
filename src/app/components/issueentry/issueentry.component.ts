import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-issueentry',
  templateUrl: './issueentry.component.html',
  styleUrls: ['./issueentry.component.scss']
})
export class IssueentryComponent implements OnInit {

  constructor() { }
  severity = [{name: 'critical'},{name: 'major'},{name: 'minor'}];
  status   = ['open', 'closed', 'in progress'];
  isError = false;
  issueEntryForm:any = null

  @Output() addIssue = new EventEmitter<any>();

  ngOnInit(): void {
    this.myFormValues();
  }

  myFormValues() {
    this.issueEntryForm = new FormGroup({
      description: new FormControl('', Validators.required),
      severity: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    if (this.issueEntryForm.value.description && this.issueEntryForm.value.severity &&
      this.issueEntryForm.value.status) {
        this.isError = false;
        this.addIssue.emit(this.issueEntryForm.value);
        this.myFormValues();
        this.issueEntryForm.reset(this.issueEntryForm.value);
      } else {
        this.isError = true;
      }
  }
}
