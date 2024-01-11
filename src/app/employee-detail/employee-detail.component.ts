import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})

export class EmployeeDetailComponent implements OnInit {
  employee: any;
  id: any;

  constructor(private _Activatedroute: ActivatedRoute, private _router: Router,
    private _employeeService: EmployeeService) { }

  sub: any;
  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      let employee = this._employeeService.getEmployees();
      this.employee = employee.find(p => p.id == this.id);
    });
  }

  onBack(): void {
    this._router.navigate(['employee']);
  }

}
