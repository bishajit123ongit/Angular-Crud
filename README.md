## for proxy error run npm config delete proxy, npm config delete http-proxy, npm config delete https-proxy
## Install Json Server-> npm install json-server -g then -> json-server -v
## cd src/cd assets/json-server --watch db.json
## http://localhost:3000/Employee  // for watch json

## Generate Service-> For generate more than one cmp and this service have used both then needed the service. For generate service the command is ->ng g service modules/shared/employee

## For used both cmp its needed to add providers to the parents module ts file and it is ->providers:[EmployeeService]

## For used json by this path http://localhost:3000/Employee need to used HttpClientModule. import { HttpClientModule} from '@angular/common/http'; from app.module.ts.

## For used get/put/delete method need to make 'Reference' of HttpClient into the service. Make http variable type of HttpClient private http: HttpClient into the constructor. And import this.

## Headers: headers is the media. Its communicated between the json server and angular application. Make headers by const const headerOption = {
## headers: new HttpHeaders({'content-type':'application/json'}) //we create headers according to our json
## };

## For use method get/put/delete.. its return type is observeable. 

## ------------edit-----------
## Initialize employee at service for blank at first time or page load
## edit employee =-> 1/  Import FormsModule at employee.module.ts 2/ EmployeeComponent Input file use ngModule. then create a employee 



# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


