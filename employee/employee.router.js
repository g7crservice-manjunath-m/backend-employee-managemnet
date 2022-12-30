const { Router } = require('express');
const { getEmployeeData ,postEmployeeData, deleteEmployeeData, putEmployeedata } = require('./employee.controller');

const employeeRouter = Router();

employeeRouter.get('/', getEmployeeData);
employeeRouter.post('/',postEmployeeData );
employeeRouter.delete('/:id',deleteEmployeeData);
employeeRouter.put('/',putEmployeedata)


module.exports = {
    employeeRouter
}