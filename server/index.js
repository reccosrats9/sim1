const express= require('express'),
    bodyParser= require('body-parser'),
    controller= require('./controller'),
    massive = require('massive');
require('dotenv').config();



const app= express();
const port= 3005;

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance)
}).catch(err=>console.log(err))


app.get('/api/inventory', controller.getInventory)
app.post('/api/product',controller.createProduct)
app.delete('/api/product/:id', controller.deleteProduct)
app.put('/api/product/:id', controller.edit)


app.listen(port, ()=>console.log(`Listening on port ${port}`))
