const express = require("express");
const Entry = require("../models/Entry");

const router = express.Router();

// Add a new budget entry
router.post("/add", async (req, res) => {
  try {
    const entry = new Entry(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: "Error adding entry", error });
  }
});

router.get("/all", async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entries", error });
  }
});

// Delete an entry
router.delete("/delete/:id", async (req, res) => {
  try {
    await Entry.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting entry", error });
  }
});

module.exports = router;
