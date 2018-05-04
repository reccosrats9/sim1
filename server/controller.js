module.exports={
    getInventory: (req, res)=>{
        console.log(req)
        req.app.get('db').get_inventory()
        .then((inventory)=> res.status(200).send(inventory)
    )    },

    createProduct:(req,res)=>{
       let  {name, price, img} = req.body;
       req.app.get('db').add_product(name, price, img)
       .then(()=>res.sendStatus(200) )
    },

    deleteProduct:(req, res)=>{
        let{id}=req.params
        req.app.get('db').delete_product(id)
        .then( ()=>res.sendStatus(200) )
    }

}