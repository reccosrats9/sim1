module.exports={
    getInventory: (req, res)=>{
        req.app.get('db').get_inventory()
        .then((inventory)=> res.status(200).send(inventory)
    )    },

    createProduct:(req,res)=>{
        // console.log('before destructure', req.body)
       let  {name, price, img} = req.body.newItem;
    //    console.log('after destructure', name, price, img);
       req.app.get('db').add_product([name, price, img])
       .then(
           (products)=>res.status(200).send(products))
    },

    deleteProduct:(req, res)=>{
        let{id}=req.params
        req.app.get('db').delete_product(id)
        .then( ()=>res.sendStatus(200) )
    },

    edit: (req, res)=>{
        let {id, name, price, img}=req.params
        req.app.get('db').update_product([id, name, price, img])
        .then( (newProduct)=>res.status(200).send(newProduct) )
    }

}