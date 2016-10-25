export class Stop {

    constructor (
        public stopType: string,
        public cargoDescription: string,
        public arrivalTime: Date,
        public picture: string,
        public ladingType: string,
        public ladingComplete: string,
        public stopComplete: boolean
    ) {}
}