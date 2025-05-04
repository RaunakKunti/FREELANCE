const Service = require("../models/service_model.js");

const serviceController = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      return res.status(401).json({
        message: "Services data not fetched",
        data: response,
      });
    }
    return res.status(200).json({ msg: response });
  } catch (error) {
    return res.status(401).json({
      msg: "Something went wrong while sending services data",
    });
  }
};

module.exports = serviceController;
