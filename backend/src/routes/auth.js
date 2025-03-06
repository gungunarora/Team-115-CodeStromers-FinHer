// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const authMiddleware = require("../middleware/authMiddleware");

// router.put("/update-profile", authMiddleware, async (req, res) => {
//     try {
//       const { name, email, phone, dob, country, occupation, amount } = req.body;
//       const updatedUser = await User.findByIdAndUpdate(
//         req.user.id,
//         { name, email, phone, dob, country, occupation, amount },
//         { new: true }
//       );
//       res.json(updatedUser);
//     } catch (error) {
//       res.status(500).json({ message: "Profile update failed." });
//     }
//   });
  

// router.get("/profile", authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

router.put("/update-profile", authMiddleware, async (req, res) => {
    try {
        const { name, email, phone, dob, country, occupation, amount } = req.body;
        
        // Check for missing fields
        if (!name || !email || !phone || !dob || !country || !occupation || !amount) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Ensure user exists
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Update user details
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.dob = dob;
        user.country = country;
        user.occupation = occupation;
        user.amount = amount;

        await user.save();
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Profile update failed." });
    }
});

router.get("/profile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
