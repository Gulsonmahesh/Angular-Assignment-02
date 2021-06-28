import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issueentry',
  templateUrl: './issueentry.component.html',
  styleUrls: ['./issueentry.component.scss']
})
export class IssueentryComponent implements OnInit {

  constructor(private issueService: IssueService) { }
  severity = [{name: 'critical'},{name: 'major'},{name: 'minor'}];
  status   = ['open', 'closed', 'in progress'];
  isError = false;
  issueEntryForm:any = null
  @Output() issueEntry = new EventEmitter();

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
  addIssue(formValues: any) {
    this.issueService.addIssue(formValues).subscribe(
      data=> {
        this.issueEntry.emit(formValues);
      },
      error => {}
    );
  }
  onSubmit() {
    if (this.issueEntryForm.value.description && this.issueEntryForm.value.severity && this.issueEntryForm.value.status) {
      this.isError = false;
      this.addIssue(this.issueEntryForm.value);
      this.myFormValues();
      this.issueEntryForm.reset(this.issueEntryForm.value);
    } else {
      this.isError = true;
    }
  }
}
