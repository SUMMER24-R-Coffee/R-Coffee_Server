const RevenueModel = require('../../models/manager/revenue-model');

class HomeController {

    async getHome(req, res) {
        try {
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr');
            const user = req.session.user;
            const [
                amountLastMonth, 
                amountToday, 
                orderLastMonth, 
                orderToday, 
                itemOrdLastMonth, 
                itemOrdToday, 
                ordCancelToday, 
                ordCancelLastMonth, 
                revenueLast12Month, 
                totalAmountLast12Month,
                itemOrd12Month,
                ord12Month
            ] = await Promise.all([
                RevenueModel.getTotalAmount('last_month'),
                RevenueModel.getTotalAmount('today'),
                RevenueModel.getTotalOrders('last_month'),
                RevenueModel.getTotalOrders('today'),
                RevenueModel.getTotalItemsOrdered('last_month'),
                RevenueModel.getTotalItemsOrdered('today'),
                RevenueModel.getTotalOrders('today', 'cancelled'),
                RevenueModel.getTotalOrders('last_month', 'cancelled'),
                RevenueModel.getRevenueLast12Months(),
                RevenueModel.getTotalAmount('12_months'),
                RevenueModel.getTotalItemsOrdered('12_months'),
                RevenueModel.getTotalOrders('12_months')
            ]);

            const months = revenueLast12Month.map(row => row.month);
            const totalQuantities = revenueLast12Month.map(row => row.total_quantity);
            const totalAmounts = revenueLast12Month.map(row => row.total_amount);
            const totalOrders= revenueLast12Month.map(row => row.total_orders)
            
            console.log('Month 🔥🔥🔥:', months);
            console.log('quantity 😬😬😬😬:', totalQuantities);
            console.log('amount 🙄🙄🙄🙄', totalAmounts);
            console.log('totalOrders 🙄🙄🙄🙄', totalOrders);



            console.log('Amount Last Month:', amountLastMonth);
            console.log('Amount Today:', amountToday);
            console.log('Order Last Month:', orderLastMonth);
            console.log('Order Today:', orderToday);
            console.log('Item Order Last Month:', itemOrdLastMonth);
            console.log('Item Order Today:', itemOrdToday);
            console.log('Order Cancelled Today:', ordCancelToday);
            console.log('Order Cancelled Last Month:', ordCancelLastMonth);
            console.log('Revenue Last 12 Month:', revenueLast12Month);
            console.log('Total Amount Last 12 Month:', totalAmountLast12Month);
            console.log('Total Items Last 12 Month:', itemOrd12Month);
            console.log('Total ORder Last 12 Month:', ord12Month);

            console.log('User:', user);

            res.render('index', {
                notificationSuccess,
                notificationErr,
                user,
                amtLM: amountLastMonth[0],
                amtT: amountToday[0],
                ordLM: orderLastMonth[0],
                ordT: orderToday[0],
                ord12:ord12Month[0],
                itemOrdLM: itemOrdLastMonth[0],
                itemOrdT: itemOrdToday[0],
                itemOrd12: itemOrd12Month[0],
                ordCancelT: ordCancelToday[0],
                ordCancelLM: ordCancelLastMonth[0],
                rev12M: revenueLast12Month,
                amt12M: totalAmountLast12Month[0],
                months: months,
                quantities: totalQuantities,
                amounts: totalAmounts,
                orders: totalOrders
            });
        } catch (error) {
            console.error('Error fetching data for home page:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new HomeController();
