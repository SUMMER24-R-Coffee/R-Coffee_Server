const VoucherModel = require('../../models/manager/voucher-model')
const dateTimeFormat =  require('../../utils/date-time-format')

class voucherController{
    async getVoucher(req,res){
        try {
            const vouchers = await VoucherModel.getVouchers();
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr'); 
            const user = req.session.user;   
    
            const today = new Date();
    
            const formattedVouchers = vouchers.map(voucher => {
                let statusClass = 'badge-success';
                let statusText = 'Valid';
                const expDate = new Date(voucher.exp_date);
                if (expDate < today) {
                    statusClass = 'badge-warning';
                    statusText = 'Expired';
                }
            
                return {
                    ...voucher,
                    formatted_valid_date: dateTimeFormat.formatDateTime(voucher.valid_date),
                    formatted_exp_date: dateTimeFormat.formatDateTime(voucher.exp_date),
                    statusClass,
                    statusText
                };
            }); 
            

            res.render('voucher', {
                notificationErr: notificationErr,
                notificationSuccess: notificationSuccess,   
                user: user,  
                vouchers: formattedVouchers           
            });            
        } catch (error) {
            console.error('err', error);
            res.status(500).send('Internal Server Error');
        }                   
    }

    async insertVoucher(req, res){
        try {
            const {voucher_code, percent, valid_date, exp_date} = req.body;

            const insertValues = [
                voucher_code,
                percent,
                valid_date,
                exp_date
            ]
            console.log('🌶️🌶️🌶️🌶️', insertValues)

            await VoucherModel.insertVoucher(insertValues)

            req.flash("notificationSuccess", "Voucher added");
            res.redirect("/voucher");
        } catch (error) {
            req.flash("notificationErr", "Error"+error);
            console.log('🥹🥹🥹', error)
            res.redirect("/voucher");
            
        }

    }

    async updateVoucher(req, res){
        try {
            const voucher_id = req.params.voucher_id;
            const {voucher_code, percent, valid_date, exp_date} = req.body;

            const updateValues = [
                voucher_code,
                percent,
                valid_date,
                exp_date,
                voucher_id
            ]
            console.log('🌶️🌶️🌶️🌶️', updateValues)

            await VoucherModel.updateVoucher(updateValues)

            req.flash("notificationSuccess", "Voucher added");
            res.redirect("/voucher");
        } catch (error) {
            req.flash("notificationErr", "Error"+error);
            console.log('🥹🥹🥹', error)
            res.redirect("/voucher");
            
        }       

    }

    async deleteVoucher(req, res){
        try {
            const voucher_id = req.params.voucher_id;
            await VoucherModel.deleteVoucher(voucher_id);            
            
            req.flash("notificationSuccess", "Voucher deleted");
            res.redirect("/voucher");
        } catch (error) {
            req.flash("notificationErr", "Error"+error);
            console.log('🥹🥹🥹', error)
            res.redirect("/voucher");
            
        }

    }

}
module.exports=new voucherController()