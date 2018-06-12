import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  people: Person[] = [
    { id: 1, firstName: 'Bill',
     lastName: 'Wright',
     dateOfBirth: new Date('01/01/1950') },
    { id: 2,
      firstName: 'Guy',
      lastName: 'Some',
      dateOfBirth: new Date('02/11/1966') },
    { id: 3,
      firstName: 'Oliver',
      lastName: 'Pierce',
      dateOfBirth: new Date('03/04/1999') },
  ];

  getPeople(peopleOfInterest?: Person): Observable<Person[]> {

  if (peopleOfInterest !== undefined) {
    // return a list of people
    // tslint:disable-next-line:label-position
    let peopleResults: Person[] = [];

    for (let p of this.people) {

        if (peopleOfInterest.firstName&&peopleOfInterest.firstName.toLowerCase() === p.firstName.toLowerCase()) {
          peopleResults.push(p);
        } else if (peopleOfInterest.lastName&&peopleOfInterest.lastName.toLowerCase() === p.lastName.toLowerCase()) {
          peopleResults.push(p);
        }
      

    }
    return of(peopleResults);
  }

    return of(this.people);

  }

  constructor() { }
}
