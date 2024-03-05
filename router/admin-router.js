const express = require('express');
const adminController = require('../controllers/admin-controller');
const userAuthantication = require('../middlewares/userAuth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const router = express.Router();

router
.route("/users")
.get(userAuthantication,adminMiddleware,adminController.getAllUsers)

router
.route("/users/:id")
.get(userAuthantication,adminMiddleware,adminController.getUserById)

router
.route("/users/update/:id")
.patch(userAuthantication,adminMiddleware,adminController.updateUserById)

router
.route("/users/delete/:id")
.delete(userAuthantication,adminMiddleware,adminController.deleteUser)

router
.route('/contacts')
.get(userAuthantication,adminMiddleware,adminController.getAllContacts)

router
.route('/contacts/delete/:id')
.delete(userAuthantication,adminMiddleware,adminController.deleteContactsById)

router
.route('/services/delete/:id')
.delete(userAuthantication,adminMiddleware,adminController.deleteServiceById)

module.exports = router