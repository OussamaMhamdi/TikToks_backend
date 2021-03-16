const express = require('express');
const EventController = require('../Controller/EventController');
const Event = require('../Model/Event');
const {authenticateToken} = require('../Core/jwt')
const router = express.Router();



router.post('/', authenticateToken, EventController.add_Event);
module.exports = router;