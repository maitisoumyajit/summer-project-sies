const mongoose = require('mongoose')
const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://common:common123@summer-project-mern.shx19.mongodb.net/<dbname>?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Success')
    }catch (err) {
        console.log(err)
    }
}

module.exports = connectDB