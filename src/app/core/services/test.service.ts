import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor() {
    }

    public greet(): string {
        return 'Hello World';
    }
}
