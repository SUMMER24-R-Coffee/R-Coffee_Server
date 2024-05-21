class productController {
    async product(req, res) {
        res.render('product')
    }
}
module.exports = new productController()