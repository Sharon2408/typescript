"use strict";
class Employee {
    constructor(empid, emp_name, emp_designation, emp_salary, emp_project) {
        this.empid = empid;
        this.emp_name = emp_name;
        this.emp_designation = emp_designation;
        this.emp_salary = emp_salary;
        this.emp_project = emp_project;
    }
    getEmpDetails() {
        console.log(`Emp_Id:${this.empid}`);
        console.log(`Emp_Name:${this.emp_name}`);
        console.log(`Emp_Designation:${this.emp_designation}`);
        console.log(`Emp_Salary:${this.emp_salary}`);
        console.log(`Emp_Project:${this.emp_project}`);
    }
}
let displayEmpDetails = new Employee(145, "Sharon", "Developer", 50000, "WEBUI");
displayEmpDetails.getEmpDetails();
