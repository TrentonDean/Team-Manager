const mongoose = require('mongoose');

const TeamManagerSchema = new mongoose.Schema({ 
    name: {type:String, required:[true, "Name is required"], minLength:[2, "Name must be at least 2 characters"]},
    preferredPosition: {type:String, required:[true, "Position is required"], minLength:[2, "Position must be at least 2 characters"]},
    gameOneStatus: {type:String, enum:["Playing", "Not Playing", "Undecided"], default: "Undecided"},
    gameTwoStatus: {type:String, enum:["Playing", "Not Playing", "Undecided"], default: "Undecided"},
    gameThreeStatus: {type:String, enum:["Playing", "Not Playing", "Undecided"], default: "Undecided"}
}, { timestamps: true });

module.exports = mongoose.model('Player', TeamManagerSchema);