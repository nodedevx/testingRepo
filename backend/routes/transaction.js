const express = require("express");
const router = express.Router();
const trsnsactionSchema = require("../models/transaction");
router.post("/newTransaction", async (req, res) => {
  console.log(req.body);
  const { sender, email, amount, reciever, currency } = req.body;

  try {
    const newTransaction = new trsnsactionSchema({
      sender,
      email,
      amount,
      reciever,
      currency,
    });
    const nTransaction = await newTransaction.save();

    if (nTransaction) {
      return res.json({
        success: true,
        message: "successfuly created new transaction",
        nTransaction,
      });
    }

    return res.json({
      success: false,
      message: "unable to create new transaction",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "unable to create new transaction",
    });
  }
});

router.get("/getTransactions", async (req, res) => {
  const allTransactions = await trsnsactionSchema.find({});

  if (allTransactions) {
    return res.json({
      message: "found result",
      success: true,
      allTransactions,
    });
  }
});

router.get("/getspecific/:type", async (req, res) => {
  const typeIs = req.params.type;
  let fetchResult = [];
  switch (typeIs) {
    case "maxamount":
      fetchResult = await trsnsactionSchema.find().sort({ amount: -1 });
      return res.json({
        fetchResult,
        success: true,
        message: "successfuly retrieved data in descending order",
      });

    case "minamount":
      fetchResult = await trsnsactionSchema.find().sort({ amount: 1 });
      return res.json({
        fetchResult,
        success: true,
        message: "successfuly retrieved data in ascending  order",
      });

    case "olddate":
      fetchResult = await trsnsactionSchema.find().sort({ _id: 1 });
      console.log("date descending order", fetchResult);
      return res.json({
        fetchResult,
        success: true,
        message: "successfuly retrieved data in descending  date",
      });
    case "newdate":
      fetchResult = await trsnsactionSchema.find({}).sort({ _id: -1 });
      return res.json({
        fetchResult,
        success: true,
        message: "successfuly retrieved data in accesnding dates  ",
      });
    default:
      fetchResult = await trsnsactionSchema.find({});
      return res.json({
        fetchResult,
        success: true,
        message: "successfuly retrieved default data",
      });
  }
});

module.exports = router;
