const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connection = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });

    if (connection) {
      return console.log(" connected to mongoDB !!");
    }
    console.log("unable to connect !");
  } catch (error) {
    console.log("connection error", error);
  }
};
