/**
 * Created by hkhan on 7/30/16.
 */
'use strict';

module.exports = (function StudentSchema() {
    const mongoose = require('../db');

    const schema = {
        name: String,
        age: Number,
        city: String,
        email: String,
        dob: Date
    };

    var collectionName = 'student';

    var StudentSchema = mongoose.Schema(schema);

    var Student = mongoose.model(collectionName, StudentSchema);

    return Student;
})();