import { Component, OnInit, Output } from '@angular/core';
import { Job } from './jobs/job.model';
import { Stop } from './jobs/stop.model';
import { JobService } from './jobs/job.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ JobService ]
})
export class AppComponent implements OnInit {
    jobs: Job[];

    constructor(private _jobService: JobService) {}
    
    ngOnInit() {
        this._jobService.getJobs()
            .subscribe(
                jobs => {
                    // console.log("app job", jobs);
                    this.jobs = jobs;
                    this._jobService.jobs = jobs;
                }
            )
    }
}