const express = require("express");
const router = express.Router();
const employeeController = require('../controller/employee')

router.get('/get-all-employees',employeeController.readAllEmployeeDetails);
router.post('/create-employee',employeeController.createEmployeeDetails);
router.post('/update-employee',employeeController.updateEmployeeDetails);
router.post('/delete-employee',employeeController.deleteEmployeeDetails);

module.exports = router;