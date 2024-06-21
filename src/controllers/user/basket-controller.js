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
    //[GET]
    async getBasketByOrd(req, res){
        const order_id = req.params.order_id;
        try {
            const result = await BasketModel.getBasketByOrd(order_id)
            console.log('RS', result)
            res.send(result);
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

    //[PUT]
    async updateBasket(req, res){
        const basket_id = req.params.basket_id
        const quantity = req.body.quantity
        try {
            const updateValue=[quantity, basket_id]
            const result= await BasketModel.updateBasket(updateValue)
            if (result.affectedRows > 0) {
                res.status(200).send({status:"success", message:"Success" });
            }else{
                res.status(404).send({status:"error", message:"Failed" });

            }
        } catch (error) {
            console.error("Error Updateing basket:", error);
            res.send({status:"error", message:"Failed to Update basket" });

        }
    }

    async deleteBasket(req, res){
        const basket_id = req.params.basket_id
        try {
            const result = await BasketModel.deleteBasket(basket_id)
            if (result.affectedRows > 0) {
                res.status(200).send({status:"success", message:"Delete to basket successfully" });
            }else{
                res.status(404).send({status:"error", message:"Delete to basket failed" });

            }

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

    //[POST]
    async updateToBasket(req, res) {
        const {quantity, email_user, product_id } = req.body;
        console.log("Email user, product id 🫰🫰🫰🫰", quantity+ email_user+ product_id)
        
        try {
            await BasketModel.updateToBasket(quantity, product_id, email_user);
            res.send({ status: "success", message: "Added to basket successfully" });
        } catch (error) {
            console.error("Error adding to basket:", error);
            res.status(500).send({ status: "error", message: "Failed to add to basket" });
        }
    }    
    // [PUT]
    async updateOrderIDBasket(req, res) {
        const { order_id, basket_id } = req.body;

        if (!Array.isArray(basket_id)) {
            return res.status(400).send({ status: "error", message: "basket_ids must be an array" });
        }
        console.log("Request Update", order_id +basket_id)

        try {
            await BasketModel.updateOrderIdBasket(order_id, basket_id);
            res.send({ status: "success", message: "Updated order ID for baskets successfully" });
        } catch (error) {
            console.error("Error updating order ID for baskets:", error);
            res.status(500).send({ status: "error", message: "Failed to update order ID for baskets" });
        }
    }

}
module.exports=new basketController();