const { Schema , model} = require('mongoose');


const EmployeeSchema = Schema({
    empName : String,
    empDOB : String,
    empEmail : String,
    empAddress : String,
    deptId : String
});

const DepartmentSchema = Schema({
    deptName : String
});

const Employee = model('employeesData', EmployeeSchema);
const Department = model('departmentdatas', DepartmentSchema);

module.exports = { Employee , Department };