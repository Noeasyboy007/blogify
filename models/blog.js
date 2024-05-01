const { Schema, model } = require("mongoose")

const blogSchema = new Schema({
    titel: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    coverImageURL: {
        type: String,
        required: false
    },
    createBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });

const  Blog =  model("blog",blogSchema);

module.exports=Blog; 