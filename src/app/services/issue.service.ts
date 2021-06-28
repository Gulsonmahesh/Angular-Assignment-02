import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ISSUE_LIST } from '../config';
import { throwError } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpclient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getIssueList() {
    return this.httpclient.get(`${ISSUE_LIST}`).pipe(
      retry(3),
      timeout(1000),
      catchError(this.handleError)
    )
  }

  getSingleIssue(issueId:number) {
    return this.httpclient.get(`${ISSUE_LIST}/?id=${issueId}`).pipe(
      retry(1),
      timeout(1000),
      catchError(this.handleError)
    )
  }

  addIssue(issue:any) {
    return this.httpclient.post(`${ISSUE_LIST}`, issue).pipe(
      timeout(1000),
      catchError(this.handleError)
    )
  }
}
