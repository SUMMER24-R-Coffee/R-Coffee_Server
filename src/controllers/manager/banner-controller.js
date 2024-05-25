const BannerModel=require('../../models/manager/banner-model')
const cloudinary=require('../../middlewares/cloundinary')
const upload = require('../../middlewares/upload')

class bannerController{
    // get banner
    async banner(req,res){
        try {
            const banners = await BannerModel.getBanner();
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr');   
            res.render('banner',{
                banners:banners,
                notificationErr: notificationErr,
                notificationSuccess: notificationSuccess,                
            })            
        } catch (error) {
            console.error('err',error)
        }

    }

    // insert banner
    async insertBanner(req, res) {
        upload.single("img")(req, res, async (err) => {
            if (err) {
                console.error("Error uploading image:", err);
                req.flash("notificationErr", "Error uploading image");
                return res.redirect("/banner");
            }
    
            if (!req.file) {
                req.flash("notificationErr", "No image selected");
                console.log("No image selected")
                return res.redirect("/banner");
            }
    
            try {
                const result = await cloudinary.uploader.upload(req.file.path, {
                    resource_type: "image",
                    folder: "rcoffee/banner",
                });
                const imgUpload = result.secure_url;
    
                await BannerModel.insertBanner(imgUpload); 
    
                req.flash("notificationSuccess", "Banner added successfully");
                console.log("added successfully");
                res.redirect("/banner");
            } catch (error) {
                if (error.name === 'CloudinaryError') {
                    console.error("Error uploading image to Cloudinary:", error);
                    req.flash("notificationErr", "Error uploading image to Cloudinary");
                } else {
                    console.error("Error adding banner:", error);
                    req.flash("notificationErr", "Error adding banner");
                }
                res.redirect("/banner");
            }
        });
    }

    // delete banner
    async deleteBanner(req, res) {
        const bannerId = req.params.banner_id;
        const img = req.body.img;
    
        const publicIdMatch = img.match(/\/v\d+\/(.+?)\.\w+$/);
    
        let publicId;
    
        if (publicIdMatch && publicIdMatch[1]) {
            publicId = publicIdMatch[1]; 
            console.log('banner id', bannerId);
            console.log('banner', img);
            console.log("Public ID:", publicId);
    
            try {
                if (publicId) {
                    await cloudinary.uploader.destroy(publicId);
                }
                await BannerModel.deleteBanner(bannerId);
    
                req.flash('notificationSuccess', 'Delete Successful');
                res.redirect('/banner');
            } catch (err) {
                console.error('Error:', err.message);
                req.flash("notificationErr", "Error: " + err.message);
                res.redirect("/banner");
            }
        } else {
            console.error("Can't extract Public ID");
        }
    }
    
    
    


}
module.exports=new bannerController();