const {MongoClient} = require('mongodb');

let dbConection;

module.exports = {
    conection : (cb)=>{
        MongoClient.connect('mongodb+srv://saragud:saragud@panaderia.kzq4tmx.mongodb.net/?retryWrites=true&w=majority').then((client)=>{
            dbConection = client.db();
            return cb();
        }).catch(err=>{
            console.log('su error es' + err);
            return cb(err);
        })
    },
    getDB:()=>dbConection
}