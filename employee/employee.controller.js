const { Employee } = require("../db/model");

async function  getEmployeeData(req, res) {
  const page = Number(req.query.page);
  Employee.find()
    .then((data) => {
      let end = page * 4;
      res.json(Array.from(data).slice(end - 4,end));
      console.log(data);
    })
    .catch((err) => console.log(err));
}

async function postEmployeeData(req, res) {
  try {
    let employee = await new Employee({
      empName: req.body.empName,
      empDOB: req.body.empDOB,
      empEmail: req.body.empEmail,
      empAddress: req.body.empAddress,
      deptId: req.body.deptId,
    });
    await employee.save();
    res.status(200).json(employee);
    console.log(employee);
  } catch (error) {
    res.status(404).json({});
    console.log(error);
  }
}

async function deleteEmployeeData(req, res) {
  let employeeId = req.params.id;
  console.log(employeeId);
  Employee.findByIdAndDelete(employeeId)
    .then((response) => {
      res.json();
      console.log("deleted successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
async function putEmployeedata(req, res) {
  let employeeId = req.body.empid;
  let updatedemployee = {
    empAddress: req.body.empAddress,
  };
  Employee.findByIdAndUpdate(employeeId, updatedemployee)
    .then((response) => {
      res.json("updated Succesfuly");
      console.log("updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = {
  getEmployeeData,
  postEmployeeData,
  deleteEmployeeData,
  putEmployeedata,
};
