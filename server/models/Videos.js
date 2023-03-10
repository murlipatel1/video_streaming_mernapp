const mongoose = require('mongoose')
const {Schema} = mongoose
const VideoSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type: String ,
        required : true
    },
    description:{
        type: String 
    },
    like:{
        type:[String]
        
    },
    comments:{
        type: [String]
    }
})
const Videos =mongoose.model('videos', VideoSchema)

module.exports = Videos