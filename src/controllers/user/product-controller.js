const ProductModel = require('../../models/user/product-model')

class ProductController{

    //[GET]
    async getProducts (req,res){
        try {
            const products = await ProductModel.getProducts(); 
            res.send(products);
        } catch (error) {
            console.error("Error fetching products:", error);
            res.status(500).send({ error: "Failed to fetch products" });
        }
    }

}
module.exports=new ProductController();