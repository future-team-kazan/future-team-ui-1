import { Observable } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  age: number;
  price: number;
}

export abstract class EmployeeData {
  abstract getAll(): Observable<Employee[]>;
  abstract getOne(id: number): Observable<Employee>;
  abstract add(person: Employee): Observable<Employee>;
  abstract update(person: Employee): Observable<Employee>;
  abstract delete(id: number);
}
