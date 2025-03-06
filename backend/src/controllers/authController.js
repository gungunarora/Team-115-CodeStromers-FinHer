const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const jwt = require("jsonwebtoken");

// @desc    Register User
// @route   POST /api/auth/signup
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, dob, country, occupation, amount, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // Create new user
    const user = await User.create({ name, email, phone, dob, country, occupation, amount, password });

    // Send response
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // 1️⃣ Validate Input
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
      }
  
      // 2️⃣ Check if User Exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials." });
      }
  
      // 3️⃣ Compare Passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials." });
      }
  
      // 4️⃣ Generate JWT Token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" } // Token expires in 7 days
      );
  
      // 5️⃣ Send Response
      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

module.exports = { registerUser, loginUser };
