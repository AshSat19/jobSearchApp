import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  jobsUpdated = new Subject();
  filteredJobs: any;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    this.filteredJobs = [];
  }

  fetchAllJobs() {
    return this._http.get(environment.remoteJSONurl + '?callback=foo');
  }

  getFilteredJobsUpdatedListener() {
    return this.jobsUpdated.asObservable();
  }
}
