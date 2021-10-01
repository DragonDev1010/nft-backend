'use strict'
module.exports = function(app) {
    var userList = require('../controllers/userListController')

    app.route('/tasks')
        .get(userList.list_all_users)
        .post(userList.create_a_user)

    app.route('/tasks/:taskId')
        .get(userList.read_a_user)
        .put(userList.update_a_user)
        .delete(userList.delete_a_user)
}