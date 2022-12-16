const TeamManagerController = require('../controllers/TeamManager.controller');

module.exports = (app) => {
    app.get('/team', TeamManagerController.getAllPlayers);
    app.post('/player', TeamManagerController.createPlayer);
    app.get('/player/:id', TeamManagerController.getOnePlayer);
    app.put('/player/:id', TeamManagerController.updatePlayer);
    app.delete('/player/:id', TeamManagerController.deletePlayer);
}