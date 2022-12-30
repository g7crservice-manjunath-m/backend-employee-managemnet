const { Router } = require("express");
const { postDepartment, getDepartment } = require("./department.controller");

const departmentRouter = Router();

departmentRouter.get('/',getDepartment);
departmentRouter.post('/',postDepartment);

module.exports = departmentRouter;