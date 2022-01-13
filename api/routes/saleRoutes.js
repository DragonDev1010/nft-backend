'use strict'
module.exports = function(app) {
    var sale = require('../controllers/saleController')

    app.route('/sales')
        .get(sale.list_all_sales)
        .post(sale.create_a_sale)
    app.route('/sales/:nftId')
        .get(sale.read_a_sale)
        .put(sale.update_a_sale)
        .delete(sale.delete_a_sale)
}