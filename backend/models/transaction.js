const mongoose = require("mongoose");
const schema = mongoose.Schema;

const transactionSchema = new schema(
  {
    sender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    reciever: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("transactions", transactionSchema);
