const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('./mongo');
const User = require('./Model');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/getByEmail', async (req, res) => {
    const { username } = req.query;
  
    try {
      const user = await User.findOne({ username });
      res.json({ email: user.email });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
app.get('/prof', async (req, res) => {
    console.log("Received POST request to /prof");
    console.log("Request body:", req.body);
  
    const { usernamee, editedPhone, editedProfession } = req.body;
  
    try {
      // Find the user by username and update the phone and profession
      console.log("hey, I am called2");
      const user = await User.findOneAndUpdate(
        { $set: {username: usernamee }},
        { $set: { phone: editedPhone, profession: editedProfession } },
                { new: true } // This option returns the updated user
      );
  
      res.json(user); // Return the updated user as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });



// Handle POST request for sign-up and log-in
app.post("/sig", async (req, res) => {
    const { username, email, password, action } = req.body;

    if (action === "signup") {
        try {
            const existingUser = await User.findOne({ $or: [{ username: username }, { email: email }] });

            if (existingUser) {
                res.json("exist"); // User already exists
            } else {
                const newUser = new User({
                    username: username,
                    email: email,
                    password: password
                });

                await newUser.save();
                res.json("success"); 
            }
        } catch (e) {
            res.json("fail");
        }
    } else if (action === "login") {
        try {
            const user = await User.findOne({ $or: [{ username: username }, { email: email }] });

            if (user) {
                // Compare password using user.password field (ensure you hash passwords before saving)
                if (user.password === password) {
                    res.json("exist"); // Successful login
                } else {
                    res.json("invalid"); // Invalid password
                }
            } else {
                res.json("notexist"); // User not found
            }
        } catch (e) {
            res.json("fail");
        }
    } else {
        res.json("invalidaction"); // Invalid action
    }
});

app.listen(8000, () => {
    console.log("Server listening on port 8000");
});
