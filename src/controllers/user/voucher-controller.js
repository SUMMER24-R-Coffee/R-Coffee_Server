const VoucherModel = require('../../models/user/voucher-model');

class VoucherController {
    //[GET]
    async getVouchers(req, res) {
        try {
            const vouchers = await VoucherModel();
            res.send(vouchers);
        } catch (error) {
            console.error("Error fetching vouchers:", error);
            res.status(500).send({ error: "Failed to fetch vouchers" });
        }
    }
}

module.exports = new VoucherController();