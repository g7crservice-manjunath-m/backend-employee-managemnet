const { Department } = require("../db/model");
async function getDepartment(req, res) {
  let data = await Department.find();
  console.log(data);
  res.json(data);
}

async function postDepartment(req, res) {
  let department = new Department({
    deptName: req.body.deptName,
  });
  await department.save();
  res.json(department);
  console.log(department);
}

module.exports = {
  getDepartment,
  postDepartment,
};
