import { Observable } from 'rxjs';

export interface Employee {
  id: string;
  name: string;
  address: string;
}

export abstract class EmployeeData {
  abstract getAll(): Observable<Employee[]>;
  abstract getOne(id: string): Observable<Employee>;
  abstract add(person: Employee): Observable<Employee>;
  abstract update(person: Employee): Observable<Employee>;
  abstract delete(id: string);
}
