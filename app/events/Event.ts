import {Location} from './location';

export class Event {
    id: Number;
    name:string;
    date: string;
    time: string;
    location?: Location
    constructor(location:Location){
        this.location= location;
    }
}
 