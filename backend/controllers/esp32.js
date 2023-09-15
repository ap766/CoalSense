const Database = require('../models/data');

const getrfid = async (req, res) => {
  const rfidData = req.body; // Modify this to handle ESP32 data format
  // Send a response back to the ESP32
  res.status(200).send('Data received successfully');
}



const checkfault = async (req, res) => {
  // Handle data received from ESP32
  const data = req.body; // Modify this to handle ESP32 data format
  // Send a response back to the ESP32


  //RFID would have be received from the request body in the previous request
  if (data.fault === "Yes") {
    try {
      // Update the 'fault' column in the database to 'Yes' for the matching RFID
      const updatedEsp32 = await Database.findOneAndUpdate(
        { RFID: rfidData },
        { fault: "Yes" },
        { new: true }
      );

      if (updatedEsp32) {
        console.log(`Fault updated for RFID: ${rfidData}`);
      } else {
        console.error(`No record found for RFID: ${rfidData}`);
      }
    } catch (err) {
      console.error(`Error updating fault for RFID: ${rfidData}`, err);
      res.status(500).send('Internal Server Error');
      return;
    }
  }
  
  res.status(200).send('Data received successfully');
};





const checkadequate = async (req, res) => {
const adequatedata = req.body; // Modify this to handle ESP32 data format

//send a response to the frontend to notify the user that the adequate height has been reached

  res.status(200).send('Data received successfully');
};


module.exports = { getrfid, checkfault, checkadequate };

