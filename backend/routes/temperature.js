const express = require('express'),
    router = express.Router(),
    controller = require('../controller/temperature');

router.route('/')
    .post(controller.updateTemperature);

router.route('/ai-comments')
    .post(controller.getAiUpdates)
    
module.exports = router;