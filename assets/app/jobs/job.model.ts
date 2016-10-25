import { Stop } from './stop.model';

export class Job {

    public jobComplete: boolean = false;
    public stops: Array<Stop>;

    constructor (
        public title: string,
        public referenceId: string
    ) {}
}