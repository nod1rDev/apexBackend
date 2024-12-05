const mongoose = require("mongoose");

// Foydalanuvchi sxemasi
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Foydalanuvchi nomi kiritilishi shart"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Parol kiritilishi shart"],
  },
});

// Foydalanuvchi modelini yaratish
const User = mongoose.model("User", userSchema);

module.exports = User;
