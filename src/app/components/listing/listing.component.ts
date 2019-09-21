import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobsService } from 'src/app/services/jobs.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  filteredJobs: any;
  filteredJobsSub: Subscription;
  showListings: boolean;
  jobsPerPage: number;
  currPage: number;
  company: string;

  // tslint:disable-next-line: variable-name
  constructor(private _jobsService: JobsService) {
    this.filteredJobs = _jobsService.filteredJobs;
    this.showListings = false;
    this.jobsPerPage = 2;
    this.company = '';
  }

  isThisCompany(job: any) {
    return job.companyname.includes(this.company);
  }

  filterByCompany() {
    this.filteredJobs.forEach(job => {
      if (!job.companyname.toLowerCase().includes(this.company.toLowerCase())) {
        this.filteredJobs.splice(this.filteredJobs.indexOf(job), 1);
        this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);
      }
    });
  }

  sortListings(sortBy: string) {
    this.filteredJobs.sort((a, b) => {
      const keyA = String(a[String(sortBy)]);
      const keyB = String(b[String(sortBy)]);
      // Compare the 2 dates
      if (keyA < keyB) { return -1; }
      if (keyA > keyB) { return 1; }
      return 0;
    });
    this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);
  }

  ngOnInit() {
    this.filteredJobsSub = this._jobsService
    .getFilteredJobsUpdatedListener()
    .subscribe(() => {
      this.showListings = true;
    });

    this.currPage = 1;
  }
}
