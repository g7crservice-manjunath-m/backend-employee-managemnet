const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectWithDB = require('./db/db');
const { employeeRouter } = require('./employee/employee.router');
const departmentRouter = require('./department/department.router');
require('dotenv').config()

mongoose.set('strictQuery', true);
app.use(express.json());

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))


app.use('/employee',employeeRouter);
app.use('/department',departmentRouter);


app.listen(process.env.PORT || 8380, async () => { 
    await connectWithDB();
    console.log(`express server is running at http://localhost:8380`);

})