const AddressController = require('../../models/user/address-model');

class BannerController {
    //[GET]
    async getAddress(req, res) {
        const email_user = req.params.email_user
        try {
            const banners = await AddressController.getAdress(email_user) 
            res.send(banners);
        } catch (error) {
            console.error("Error fetching banners:", error);
            res.status(500).send({ error: "Failed to fetch banners" });
        }
    }

    //POST
    async insertAddress(req, res){
        const location = req.body.location
        const email_user = req.body.email_user

        try {

            const insertValues =[location,email_user]
            await AddressController.insertAddress(insertValues)
            res.send({status:"success", message:"Adding to address successfully" });

        } catch (error) {
            res.send({status:"error", message:"Failed add to address" });
            console.error("error Adding to address successfully",error)

        }
    }
}

module.exports = new BannerController();
