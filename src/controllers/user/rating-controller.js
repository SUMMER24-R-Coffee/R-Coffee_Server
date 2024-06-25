const RatingModel = require('../../models/user/rating-model')

class ratingController{
    //[GET]
    async getRating(req, res){
        const product_id= req.params.product_id;

        try {
            const results = await RatingModel.getRatings(product_id);
            res.send(results)
    
        } catch (error) {
            res.status(404).json({ message: "Error"+error });
            console.log('Error get reviews', error)
            
        }
    }
    //[GET]

    async getRatingsByBasketIds(req, res) {
        const basketIds = req.query.basket_ids.split(',').map(Number);

        try {
            const results = await RatingModel.getRatingsByBasketIds(basketIds);
            console.log('Query results:', results); 
            res.send(results);
        } catch (error) {
            res.status(404).json({ message: "Error: " + error });
            console.log('Error getting reviews', error);
        }
    }
    //[POST]
    async insertRating(req, res){
        const {rating, review, product_id, basket_id, email_user}= req.body;
        
        try {
            const insertValues =[rating, review,product_id, basket_id, email_user]
            await RatingModel.insertRating(insertValues);
            res.status(200).json({ message: "Success" });
        } catch (error) {
            res.status(500).json({ message: "Error"+error });
            console.log('Error get reviews', error)
                        
        }
    }

}
module.exports= new ratingController()