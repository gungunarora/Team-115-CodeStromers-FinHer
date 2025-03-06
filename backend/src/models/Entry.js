const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  date: String,
  total: Number,
  used: Number,
  savings: Number,
  savingsPercent: Number,
  notes: String,
});

module.exports = mongoose.model("Entry", entrySchema);