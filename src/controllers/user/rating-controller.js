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
    //[INSERT]
    async insertRating(req, res){
        const [rating, review, product_id, email_user]= req.body;
        try {
            const insertValues =[rating, review, product_id, email_user]
            await RatingModel.insertRating(insertValues);
            res.status(200).json({ message: "Success" +error });
        } catch (error) {
            res.status(500).json({ message: "Error"+error });
            console.log('Error get reviews', error)
                        
        }
    }

}
module.exports= new ratingController()