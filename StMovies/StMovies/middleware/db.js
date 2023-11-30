const mongoose = require('mongoose')

const uri = "mongodb+srv://ashu:ashu@cluster0.6u8vayi.mongodb.net/";

exports.connectToDb = () => {
    mongoose.connect(uri)
    .then(() => {(console.log("DB connected"))})
    .catch((err) => {(console.log("Not connected", err))});
}