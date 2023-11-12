const Course = require('../models/course')
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    //[GET] /
    index(req, res, next) {
        Course.find({}) 
        .then(course => {
            res.render('home', { 
                course: mutipleMongooseToObject(course)
            });
        })
        .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
