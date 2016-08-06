/**
 * Created by hkhan on 7/30/16.
 */

module.exports = function (app) {
    var student = require('../controllers/studentController');

    app.get('/', (req, res, next) => {
        res.send("Here comes the rest api");
    });

    app.get('/hello/:name', (req, res, next) => {
        return res.send("Hello:" + req.params.name);
    });
    
    app.get('/students', student.getStudent);
    app.post('/student', student.createStudent);
};