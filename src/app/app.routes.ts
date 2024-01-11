import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'employee', component: EmployeeComponent,
        children: [{ path: ':id', component: EmployeeDetailComponent }]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];
