const BasketModel = require('../../models/user/basket-model')

class basketController{
    //[GET]
    async getBasket(req, res){
        const email_user = req.params.email_user;

        try {
            const baskets = await BasketModel.getBasket(email_user); 
            res.send(baskets);
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).send({ error: "Failed to fetch products" });
        }
    }
    //[POST]
    async insertBasket(req, res){
        
    }

}
module.exports=new basketController();