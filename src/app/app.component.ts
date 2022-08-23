import { Component } from '@angular/core';
// import { EMPLOYEE } from 'src/assets/employee.const';
import { Employee } from './model/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bishajit';
  // emp: Employee = {
  //    id: 1,
  //    name: 'Bishajit',
  //    address: "CTG"
  // };

  // allEmployee: Employee[]= [
  //   {id: 1 , name: 'Ovi', address:'CTG'},
  //   {id: 2 , name: 'Bishajit', address:'Dhaka'},
  // ];
  // allEmployeeConst: Employee[]=EMPLOYEE;
}
