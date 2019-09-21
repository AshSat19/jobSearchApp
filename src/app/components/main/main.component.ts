import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  experience: string;
  location: string;
  skill: string;
  allJobsList: any;
  filteredJobs: any;
  showListings: boolean;
  showSpinner: boolean;
  showError: boolean;

  // tslint:disable-next-line: variable-name
  constructor(private _jobsService: JobsService) {
    this.experience = '';
    this.location = '';
    this.skill = '';
    this.allJobsList = [];
    this.filteredJobs = [];
    this.showListings = false;
    this.showSpinner = false;
    this.showError = false;
  }

  ngOnInit() {
    this._jobsService.fetchAllJobs()
    .subscribe((jobs: {data: any, len: any}) => {
      this.allJobsList = jobs.data;
    });
  }

  oneSearch() {
    for (const job of this.allJobsList) {
      if (this.experience !== '' &&
        job.experience.toLowerCase().includes(this.experience.toLowerCase()) &&
        this._jobsService.filteredJobs.indexOf(job) === (-1)
      ) {
        this.showSpinner = false;
        this._jobsService.filteredJobs.push(job);
        this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);
      } else if (this.location !== '' &&
        job.location.toLowerCase().includes(this.location.toLowerCase()) &&
        this._jobsService.filteredJobs.indexOf(job) === (-1)
      ) {
        this.showSpinner = false;
        this._jobsService.filteredJobs.push(job);
        this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);
      } else if (this.skill !== '' &&
        job.skills.toLowerCase().includes(this.skill.toLowerCase()) &&
        this._jobsService.filteredJobs.indexOf(job) === (-1)
      ) {
        this.showSpinner = false;
        this._jobsService.filteredJobs.push(job);
        this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);
      }
    }
  }

  twoSearch() {
    for (const job of this.allJobsList) {
      if ((this.experience !== '' && this.location !== '') &&
        (job.experience.toLowerCase().includes(this.experience.toLowerCase()) &&
        job.location.toLowerCase().includes(this.location.toLowerCase())) &&
        this._jobsService.filteredJobs.indexOf(job) === (-1)
      ) {
        this.showSpinner = false;
        this._jobsService.filteredJobs.push(job);
        this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);
      } else if ((this.skill !== '' && this.location !== '') &&
        (job.skills.toLowerCase().includes(this.skill.toLowerCase()) &&
        job.location.toLowerCase().includes(this.location.toLowerCase())) &&
        this._jobsService.filteredJobs.indexOf(job) === (-1)
      ) {
        this.showSpinner = false;
        this._jobsService.filteredJobs.push(job);
        this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);
      } else if ((this.experience !== '' && this.skill !== '') &&
        (job.experience.toLowerCase().includes(this.experience.toLowerCase()) &&
        job.skills.toLowerCase().includes(this.skill.toLowerCase())) &&
        this._jobsService.filteredJobs.indexOf(job) === (-1)
      ) {
        this.showSpinner = false;
        this._jobsService.filteredJobs.push(job);
        this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);
      }
    }
  }

  allSearch() {
    for (const job of this.allJobsList) {
      if ((this.experience !== '' && this.location !== '' && this.skill !== '') &&
        (job.experience.toLowerCase().includes(this.experience.toLowerCase()) &&
        job.location.toLowerCase().includes(this.location.toLowerCase()) &&
        job.skills.toLowerCase().includes(this.skill.toLowerCase())) &&
        this._jobsService.filteredJobs.indexOf(job) === (-1)
      ) {
        this.showSpinner = false;
        this._jobsService.filteredJobs.push(job);
        this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);
      }
    }
  }

  onSearch() {
    this.showSpinner = true;
    this.showError = false;
    this._jobsService.filteredJobs.length = 0;
    this._jobsService.jobsUpdated.next(this._jobsService.filteredJobs);

    if (this.location === '' && this.experience === '' && this.skill === '') {
      this.showError = true;
      this.showSpinner = false;
      return;
    } else if ((this.location !== '' && this.experience === '' && this.skill === '') ||
      (this.location === '' && this.experience !== '' && this.skill === '') ||
      (this.location === '' && this.experience === '' && this.skill !== '')
    ) {
      this.oneSearch();
    } else if ((this.location !== '' && this.experience !== '' && this.skill === '') ||
      (this.location === '' && this.experience !== '' && this.skill !== '') ||
      (this.location !== '' && this.experience === '' && this.skill !== '')
    ) {
      this.twoSearch();
    } else if ((this.location !== '' && this.experience !== '' && this.skill !== '')) {
      this.allSearch();
    }
  }
}
