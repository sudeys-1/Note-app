const  mongoose  = require("mongoose");

const NoteModel =mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    description:{
        type :String,
        required:true,
    },
   

})

module.exports = mongoose.model("Note", NoteModel)