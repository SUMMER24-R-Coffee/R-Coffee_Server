const BasketModel = require('../../models/user/basket-model')

class basketController{
    //[GET]
    async getBasket(req, res){
        const email_user = req.params.email_user;

        try {
            const baskets = await BasketModel.getBasket(email_user); 
            res.send(baskets);
        } catch (error) {
            console.error("Error fetching basket:", error);
            res.send({status:"error", message:"Failed to fetch basket" });
        }
    }
    //[POST]
    async insertBasket(req, res){
        const email_user = req.body.email_user;
        const quantity = req.body.quantity;
        const product_id = req.body.product_id

        try {
            const insertValues=[quantity, product_id, email_user]
            await BasketModel.insertBasket(insertValues)
            res.send({status:"success", message:"Add to basket successfully" });

        } catch (error) {
            console.error("Error adding basket:", error);
            res.send({status:"error", message:"Failed to add basket" });

        }
    }

    async updateBasket(req, res){
        const basket_id = req.params.basket_id
        const quantity = req.body.quantity
        try {
            const updateValue=[quantity, basket_id]
            await BasketModel.updateBasket(updateValue)
            res.send({status:"success", message:"Update to basket successfully" });

        } catch (error) {
            console.error("Error Updateing basket:", error);
            res.send({status:"error", message:"Failed to Update basket" });

        }
    }

    async deleteBasket(req, res){
        const basket_id = req.params.basket_id
        try {
            await BasketModel.deleteBasket(updateValue)
            res.send({status:"success", message:"Delete to basket successfully" });

        } catch (error) {
            console.error("Error Deleting basket:", error);
            res.send({status:"error", message:"Failed to Delete basket" });

        }
    }

        //[POST]
    async addToBasket(req, res) {
        const { email_user, product_id } = req.body;
        console.log("Email user, product id 🫰🫰🫰🫰", email_user+product_id)

        try {
            await BasketModel.addToBasket(product_id, email_user);
            res.send({ status: "success", message: "Added to basket successfully" });
        } catch (error) {
            console.error("Error adding to basket:", error);
            res.status(500).send({ status: "error", message: "Failed to add to basket" });
        }
    }

}
module.exports=new basketController();