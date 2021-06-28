import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../../services/issue.service';
@Component({
  selector: 'app-issuedetail',
  templateUrl: './issuedetail.component.html',
  styleUrls: ['./issuedetail.component.scss']
})
export class IssuedetailComponent implements OnInit {

  issueDatail:any = [];
  errorDetails:string = '';

  constructor(private route: ActivatedRoute, private issueService: IssueService,
    private router:Router) { }

  getParticularIssue(issueId: number) {
    this.issueService.getSingleIssue(issueId).subscribe (
      data=> {
        this.issueDatail = data;
        this.issueDatail = this.issueDatail[0]
        console.log(this.issueDatail)
        this.errorDetails = '';
      },
      error=> {
        this.errorDetails = error;
      }
    );
  }
  gobacktoissuelist() {
    this.router.navigate(['/issues']);
  }
  ngOnInit(): void {
    this.getParticularIssue(parseInt(this.route.snapshot.params.id));
  }
}
