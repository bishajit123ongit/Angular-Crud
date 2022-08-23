import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  allEmployee: Employee[];
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
      }
    );
  }

  deleteEmployee(emp: Employee) {
    this.employeeService.deleteEmployee(emp.id).subscribe(
      (data: Employee) => {
        this.getAllEmployee();
      }
    );
  }

  edit(emp: Employee) {
    this.employeeService.currentEmployee = Object.assign({}, emp);
  }

  createAndUpdate(currentEmployee: Employee) {
    if (currentEmployee.id != null) {
      this.updateEmployee(currentEmployee);
    }
    else {
      this.createEmployee(currentEmployee);
    }
    this.clear();
  }

  createEmployee(emp: Employee) {
    this.employeeService.createEmployee(emp).subscribe();
    this.refreshEmployeeList();
  }

  updateEmployee(emp: Employee) {
    this.employeeService.updateEmployee(emp).subscribe();
    this.refreshEmployeeList();
  }

  refreshEmployeeList() {
    this.employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
      }
    );
  }

  clear() {
    this.employeeService.currentEmployee = {
      id: null!,
      firstName: '',
      lastName: '',
      contactNumber: null!,
      code: '',
      address: '',
      designation: ''
    };
  }
}
