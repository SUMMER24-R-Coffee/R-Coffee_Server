const CatoryModel = require('../../models/user/category-model')

class CatoryController{

    // [GET]
    async getCategory(req, res){
        try {
            const categories = await CatoryModel.getCategorys(); 
            res.send(categories);
        } catch (error) {
            console.error("Error fetching categories:", error);
            res.status(500).send({ error: "Failed to fetch categories" });
        }
    }

}

module.exports= new CatoryController();