import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  allEmployee: Employee[];
  @Output() employeeCreateAndEdit: EventEmitter<Employee> = new EventEmitter();
  constructor(
    public employeeService: EmployeeService
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

  createAndUpdate(currentEmployee: Employee) {
    // if (currentEmployee.id != null) {
    //   this.updateEmployee(currentEmployee);

    // }
    // else {
    //   this.createEmployee(currentEmployee);
    // }

    this.employeeCreateAndEdit.emit(currentEmployee);
  }

  

  createEmployee(emp: Employee) {
    this.employeeService.createEmployee(emp).subscribe();
    this.refreshEmployeeList();

  }
  updateEmployee(emp: Employee) {
    this.employeeService.updateEmployee(emp).subscribe();
    this.refreshEmployeeList();
    
  }

  refreshEmployeeList(){
    this.employeeService.getAllEmployees().subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
      }
    );
  }

  clear(){
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
