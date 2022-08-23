import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from '../shared/employee.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // EmployeeComponent,
    EmployeesComponent,
    EmployeeListComponent
  ],
  exports:[EmployeesComponent,EmployeeListComponent],
  providers:[EmployeeService],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeeModule { }
