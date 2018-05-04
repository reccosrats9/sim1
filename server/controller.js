module.exports={
    getInventory: (req, res)=>{
        console.log(req)
        req.app.get('db').get_inventory()
        .then((inventory)=> res.status(200).send(inventory)
    )    },

    createProduct:(req,res)=>{
        // req.app.post('db').add_product()
       let  {name, price, img} = req.body;
       req.app.get('db').add_product(name, price, img)
       .then(()=>res.sendStatus(200) )
    },

}