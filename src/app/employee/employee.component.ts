import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  pro_obj: any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.pro_obj = this.employeeService.getEmployees();
  }
}
