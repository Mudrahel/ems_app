import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  public getEmployees() {
    let P_obj: Employee[];
    P_obj = [
      new Employee(101, "Greg M", "IT", 555667788, "22 Stu Street, Jersey City"),
      new Employee(102, "John Doe", "HR", 555112233, "123 Main Street, Anytown"),
      new Employee(103, "Alice Smith", "Finance", 555998877, "456 Oak Avenue, Cityville"),
      new Employee(104, "Bob Johnson", "Marketing", 555334455, "789 Pine Street, Townsville"),
      new Employee(105, "Jane Williams", "Operations", 555776655, "101 Elm Road, Villagetown")
    ]

    return P_obj;
  }

  public getProduct(id: any)  //1013
  {
    let employees: Employee[] = this.getEmployees();
    return employees.find(p => p.id == id)
  }

  constructor() { }
}