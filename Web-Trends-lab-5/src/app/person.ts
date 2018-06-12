export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    // getAge(): number {
    //     const ageDifMs = Date.now() - this.dateOfBirth.getTime();
    //     const ageDate = new Date(ageDifMs);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}
