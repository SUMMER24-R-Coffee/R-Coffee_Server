const bannerModel=require('../../models/manager/banner-model')

class bannerController{
    // get banner
    async banner(req,res){
        try {
            const banners = await bannerModel.getBanner();
            console.log('banner',banners)
            res.render('banner',{
                banners:banners
            })            
        } catch (error) {
            console.error('err',error)
        }

    }

}
module.exports=new bannerController();