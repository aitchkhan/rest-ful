/**
 * Created by hkhan on 7/30/16.
 */
'use strict';

function studentController() {
    var Student = require('../models/student.model');

    this.createStudent = function (req, res, next) {
        var name = req.params.name;
        var age = req.params.age;
        var city = req.params.city;
        var email = req.params.email;
        var dob = req.params.dob;

        Student.create({name, city, age, email, dob}, (error, result) => {
            if(error) {
                console.log(error);

                return res.send({
                    error
                });
            } else {
                return res.send({
                    result,
                    "success" : true
                });
            }
        });
    };

    this.getStudent = function (req, res, next) {
        Student.find({}, (error, result) => {
            if(error) {
                console.log(error);

                return res.send({
                    error
                });
            } else {
                return res.send({
                    result,
                    "success": true
                });
            }
        });
    };

    return this;

}

module.exports = new studentController();