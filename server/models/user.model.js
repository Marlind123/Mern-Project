const mongoose = require('mongoose');

const newUser=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"This field is required"]
    },
    imageUrl:{
        type:String,
        required:[true,"This field is required"]
    },
    treasureChest:{
        type:Number,
        required:[true,"This field is required"],
        min:[0,"Number of chest is 0 or positiv"]
    },
    phrase:{
        type:String,
        required:[true,"This field is required"],
    },
    position:{
        type:String,
        required:[true,"This field is required"],
        enum:["captain","firstMate","quarterMaster","boatSwain","powderMonkey"]
    },
    pegLeg:{
        type:Boolean,
        default:true

    },
    eyePatch:{
        type:Boolean,
        default:true
    },
    hookHand:{
        type:Boolean,
        default:true
    }
},{timespan:true})

const User=mongoose.model('User', newUser);

module.exports = User