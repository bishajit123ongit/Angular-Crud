import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // allEmployee: Employee[];
  @Input() employee: Employee;
  @Output() employeeEdit: EventEmitter<Employee> = new EventEmitter();
  @Output() employeeDelete: EventEmitter<Employee> = new EventEmitter();
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    //this.getAllEmployee();
  }

  // getAllEmployee() {
  //   this.employeeService.getAllEmployees().subscribe(
  //     (data: Employee[]) => {
  //       this.allEmployee = data;
  //     }
  //   );
  // }

  // deleteEmployee(id: number) {
  //   this.employeeService.deleteEmployee(id).subscribe(
  //     (data: Employee) => {
  //       this.getAllEmployee();
  //     }
  //   );
  // }

  edit(emp: Employee) {
    this.employeeEdit.emit(emp);
  }

  deleteEmployee(emp: Employee) {
    this.employeeDelete.emit(emp);
  }
}
