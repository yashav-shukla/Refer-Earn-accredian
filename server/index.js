const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // ✅ CORS enabled
app.use(express.json()); // ✅ JSON middleware added

// 📌 Debugging API Route
app.post("/", (req, res) => {
  console.log("Received data:", req.body); // ✅ Log request data
  if (!req.body.referrerName || !req.body.referrerEmail) {
    console.error("❌ Missing fields:", req.body);
    return res.status(400).json({ error: "All fields are required!" });
  }
  res.json({ message: "Referral submitted successfully!" });
});

app.listen(3001, () => {
  console.log("✅ Server running on http://localhost:3001/");
});
