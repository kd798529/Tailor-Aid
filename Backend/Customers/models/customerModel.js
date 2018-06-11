const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema(
    {
        lastname:{
            type: String,
            required : true
        },
        firstname:{
            type: String,
            required : true
        },
        age:{
            type : Number,
            required: true
                },
        bust: {
            type: Number,
            required: true
                    },
        waist: {
            type: Number,
            required: true
                    },
        hip: {
            type: Number,
            required:  true
                },
        thigh: {
            type: Number,
            required: true
                    },
        acrossBack: {
            type: Number
                    },
        blouseLength: {
            type: Number
                        },
        dressLength: {
            type: Number
                    	},
        skirtLength: {
            type: Number
                    	},
        topArm: {
            type: Number
                        },
        aroundArm: {
            type: Number
                        },
        bustLevel: {
            type: Number
                        },
        bustSeparation: {
            type: Number
                        },
        shortSleeve: {
            type: Number
                        },
        longSleeve: {
                type: Number
                        },
        crotchLevel: {
                type: Number
                        },
        createdOn: {
            type: Date,
            default: Date.now
                    	}
    }
)

const customerModel = mongoose.model('Customer', DataSchema)

module.exports = customerModel
