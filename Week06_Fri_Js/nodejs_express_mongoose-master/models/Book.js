const mongoose = require ('mongoose')

let bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        require: true,
        lowercase:true
    },
    price: Number,
    published_date: Date

})

module.exports = mongoose.model('book',bookSchema)