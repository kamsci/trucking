export class Job {

    constructor (
        public title: string,
        public referenceId: string,
        public jobComplete?: boolean
    ) {}
}