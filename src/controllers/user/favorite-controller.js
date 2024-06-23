const FavoriteModel = require('../../models/user/favorite-model')

class favoriteController{
    //POST
    async addOrDeleteFav(req, res){
        const { product_id, user_id}=req.body
        try {
            const result = await FavoriteModel.addOrDeleteFav(product_id, user_id);
            res.send({ status: "success", message: `Favorite successfully`+ result });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send({ status: "error", message: "An error occurred", error });
        }
    }

}
module.exports =  new favoriteController()