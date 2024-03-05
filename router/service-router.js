const express = require('express')
const serviceContraller = require('../controllers/service-contraller')
const router = express.Router()

router.route('/services').get(serviceContraller.getService)


module.exports = router;