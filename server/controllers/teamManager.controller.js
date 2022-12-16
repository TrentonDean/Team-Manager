const Player = require('../models/player.model');

module.exports = {

    getAllPlayers:(req,res) => {            // gets all players
        Player.find({})
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json({err})     // so we can send any errors
        })
    },

    createPlayer:(req,res) => {             // create a player
        Player.create(req.body)
        .then((player) => {
            res.json({player})
        })
        .catch((err) => {
            res.status(400).json({err})
        })
    },

    getOnePlayer:(req,res) => {                // get one player by id
        Player.findOne({_id:req.params.id})
            .then((onePlayer) => {
                res.json(onePlayer)
            })
            .catch((err) => {
                res.status(400).json({err})
            });
    }, 

    deletePlayer:(req,res) => {             // delete player
        Player.deleteOne({_id: req.params.id})
        .then((deletedPlayer) => {
            res.json({deletedPlayer})
        })
        .catch((err) => {
            res.status(400).json({err})
        })
    },

    updatePlayer:(req, res) => {            // update player
        Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedPlayer) => {
            res.json(updatedPlayer);
            })
            .catch((err) => res.status(400).json(err));
    }
}