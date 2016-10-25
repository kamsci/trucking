export class Stop {
    
    public picture?: string = null;
    public ladingReceived?: Date = null;
    public ladingSigned?: Date = null;

    constructor (
        public stopType: StopType,
        public cargoDescription: string,
        public arrivalTime: string,
        public address: string
    ) {}
}