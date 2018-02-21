import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
     {id:1,name: 'Anna',gender: 'girl', math: 98, eng:95},
     {id:2,name: 'Bob',gender: 'boy', math: 93, eng:90},
     {id:3,name: 'Cath',gender: 'girl', math: 100, eng:88},
     {id:4,name: 'David',gender: 'boy', math: 70, eng:78},
     {id:5,name: 'Emma',gender: 'girl', math: 60, eng:78},
     {id:4,name: 'Frank',gender: 'boy', math: 98, eng:50}
     

    ];
    return {students};
  }
}