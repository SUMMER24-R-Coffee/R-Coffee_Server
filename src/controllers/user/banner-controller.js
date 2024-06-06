const BannerModel = require('../../models/user/banner-model');

class BannerController {
    //[GET]
    async getBanners(req, res) {
        try {
            const banners = await BannerModel.getBanners(); 
            res.send(banners);
        } catch (error) {
            console.error("Error fetching banners:", error);
            res.status(500).send({ error: "Failed to fetch banners" });
        }
    }
}

module.exports = new BannerController();
