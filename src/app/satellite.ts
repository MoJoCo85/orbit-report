export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    shouldShowWarning: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean, shouldShowWarning: boolean){
        this.name = name
        this.orbitType = orbitType
        this.type = type
        this.operational = operational
        this.launchDate = launchDate
        this.shouldShowWarning = shouldShowWarning
    }
}
