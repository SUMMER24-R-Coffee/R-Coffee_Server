class bannerController{
    async banner(req,res){
        res.render('banner')
    }

}
module.exports=new bannerController();