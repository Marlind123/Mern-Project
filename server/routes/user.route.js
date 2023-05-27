const User = require('../controllers/user.controller');
 
module.exports = app => {
    app.post('/api/pirates', User.createOne);
    app.get('/api/pirates', User.findAll);
    app.get('/api/pirates/:id', User.findOne);
    app.put('/api/pirates/:id', User.UpdateOne);
    app.delete('/api/pirates/:id', User.deleteOneAuthor);
}