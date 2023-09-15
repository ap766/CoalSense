const express = require('express');

const { getrfid, checkfault, checkadequate } = require('./controllers/esp32');

const router = express.Router();

//An endpoint to receive RFID data from the ESP32
//ESP32 will send the RFID data to this endpoint
router.post('/esp32-data', getrfid );

//An endpoint to get true or false from the esp32 if the empty height is faulty or not 
router.post('/esp32-data-fault', checkfault );

//An endpoint to know if the adequate-freight-height has been reached and send response to the flutter app so that it can give notification to the user.
router.post('/esp32-data-adequate', checkadequate);

module.exports = router;