// const API_URL = "mongodb://127.0.0.1:27017/postdb";
const API_URL = "mongodb+srv://manjunath-1546:mj123@cluster0.u0jyrui.mongodb.net/?retryWrites=true&w=majority";
const { connect } = require('mongoose');

async function connectWithDB () {
    try {
        await connect(API_URL);
        console.log("connected with DB")
    } catch (err) {
        console.log("not connect with db")
    }
}

module.exports = connectWithDB;