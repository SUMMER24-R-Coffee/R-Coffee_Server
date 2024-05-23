class productController {
    async product(req, res) {
        res.render('product')
    }

    async addProduct(req, res){
        res.render('add_product')
    }
}
module.exports = new productController()