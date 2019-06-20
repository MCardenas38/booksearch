var mongoose= require("mongoose");

var Schema= mongoose.Schema;

var BookSchema= new Schema({
    title:{
        type: String,
        require: true
    },
    authors:{
        type: Array,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    imgsrc:{
        type: String
    },
    link:{
        type: String
    },
    id:{
        type: String
    }
});

var Books= mongoose.model("books",BookSchema);

module.exports= Books;