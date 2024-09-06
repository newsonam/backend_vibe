const express = require('express');
const router = express.Router();
const { getEmployees, postEmpData, editEmpbyId, updateEmpById, deleteEmpData } = require("../controllers/empdata");


router.route('/api/employees').get(getEmployees);
router.route('/api/employees').post(postEmpData);
router.route('/editdata/:id').get(editEmpbyId);
router.route('/update/:id').post(updateEmpById);
router.route('/api/employees/:id').delete(deleteEmpData);


module.exports = router;