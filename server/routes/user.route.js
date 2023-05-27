const User = require('../controllers/user.controller');
 
module.exports = app => {
    app.post('/pirates', User.createOne);
    app.get('/pirates', User.findAll);
    app.get('/pirates/:id', User.findOne);
    app.put('/pirates/:id', User.UpdateOne);
    app.delete('/pirates/:id', User.deleteOneAuthor);
}