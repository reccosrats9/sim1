module.exports={
    getInventory: (req, res)=>{
        req.app.get('db').get_inventory()
        .then(products=> res.status(200).send(products)
    )
    }
}