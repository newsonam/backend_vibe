require('../db/connection.js');
require("dotenv").config();
const Emp = require('../model/empSchema.js');

const getEmployees = (req, res) => {

    Emp.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {

            console.log({ data: data }, data);
            res.status(200).json({ data: data });
        }
    });

};



const postEmpData = async (req, res) => {
    console.log(req.body);
    const { id, name, position, salary } = req.body;
    if (!id, !name, !position, !salary) {
        return res.status(422).json({ error: "plz fill all filled" });
    }

    const empnewdata = new Emp({ id, name, position, salary })
    const empresult = await empnewdata.save();
    if (empresult) {
        return res.status(201).json({ message: "Employee Data Posted" });
    }
};

const editEmpbyId=async (req, res) => {
    console.log(req.params.id);
    Emp.findById(req.params.id, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {

            console.log({ data: data }, data);
            res.status(200).json({ data: data });
        }
    });

};

const updateEmpById=(req, res) => {
    var data = {
        id: req.body.id,
        name: req.body.name,
        position: req.body.position,
        salary: req.body.salary


    };
    Emp.findByIdAndUpdate(req.params.id, data, { new: true }, function (
        err,
        data
    ) {
        if (err) {
            console.log("err", err);
            return res.status(404).json({ error: "Employee data not updated" })
        } else {
            console.log("success");
            return res.status(201).json({ message: "Employee updated", data });
        }
    });

};



const deleteEmpData = async (req, res) => {
    console.log(req.params.id);
    try {
        const empData = await Emp.deleteOne
            ({ _id: req.params.id });

        if (empData) {

            res.status(201).json({ message: "Employee deleted" });
        }
    } catch (error) {
        console.log(error);
    }

};



module.exports = { getEmployees,postEmpData, deleteEmpData,editEmpbyId,updateEmpById };


