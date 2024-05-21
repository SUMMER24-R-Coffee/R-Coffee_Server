class homeController {
    async home(req, res) {
        res.render('index')
    }
}
module.exports = new homeController()