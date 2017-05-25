import {Location} from './location';

export class Event {
    name:string;
    date: Date;
    time: string;
    location?: Location
    constructor(location:Location){
        this.location= location;
    }
}
 