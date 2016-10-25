import { Job } from './job.model';
import { Stop } from './stop.model';
import { Http } from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class JobService {
    jobs: Job[];

    constructor(private http: Http) {};

    getJobs(){
        return this.http.get('http://localhost:3000/jobs')
            .map(response  => {
                const data = response.json().result;
                let jobArray: any[] = [];
                let pickupArray: any[] = [];
                let dropoffArray: any[] = [];
                for(var i = 0; i < data.length; i++) {
                    let job = new Job(data[i].title, data[i].referenceId);
                    jobArray.push(job);
                    console.log("data", data, "length", data[0].stops.length )
                    //     for(var k = 0; k < data[i].stops.length; k++) {
                    //         let stop = data[i].stops[k];
                    //         let addStop = new Stop(stop.stopType, stop.cargoDescription, stop.arrivalTime, stop.address);
                    //         console.log("pickupStop", addStop)
                    //         if(k = 0) { jobArray.push(addStop)}
                    // }
                }
                console.log("getJobs", jobArray);
                return jobArray;
            })
            .catch(error => Observable.throw(error.json()));
    }
    getStops(){
        return this.http.get('http://localhost:3000/stops')
            .map(response  => {
                const data = response.json().result;
                let jobArray: any[] = [];
                for(var i = 0; i < data.length; i++) {
                    let job = new Job(data[i].title, data[i].referenceId, data[i].jobComplete);
                    jobArray.push(job);
                }
                console.log("getJobs", jobArray);
                return jobArray;
            })
            .catch(error => Observable.throw(error.json()));
    }

}