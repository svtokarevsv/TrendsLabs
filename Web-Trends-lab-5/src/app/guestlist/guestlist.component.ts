import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../people.service';
import {Person} from '../person';

@Component({
    selector: 'app-guestlist',
    templateUrl: './guestlist.component.html',
    styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

    guests: Person[];

    searchGuest: Person = new Person();


    FindPeople(queryPerson?: Person) {

        if (queryPerson !== undefined) {
            this.peopleService.getPeople(queryPerson).subscribe(data => this.guests = data);
        } else {
            this.peopleService.getPeople().subscribe(results => this.guests = results);
        }
    }

    constructor(private peopleService: PeopleService) {
    }

    ngOnInit() {
        this.FindPeople();
    }

}
