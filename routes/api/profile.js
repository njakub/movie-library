const express = require("express");
const axios = require("axios");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
// const { check, validationResult } = require("express-validator");
// bring in normalize to give us a proper url, regardless of what user entered
// const normalize = require("normalize-url");
const checkObjectId = require("../../middleware/checkObjectId.js");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post("/", auth, async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  // destructure the request - not required for now
  const { ...rest } = req.body;

  // build a profile
  const profileFields = {
    user: req.user.id,
    ...rest,
  };

  try {
    // Using upsert option (creates new doc if no match is found):
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//@route    GET api/profile/user/:user_id
//@desc     Get profile by user ID
//@access   Public
router.get(
  "/user/:user_id",
  checkObjectId("user_id"),
  async ({ params: { user_id } }, res) => {
    try {
      const profile = await Profile.findOne({
        user: user_id,
      }).populate("user", ["name", "avatar"]);

      if (!profile) return res.status(400).json({ msg: "Profile not found" });

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);

module.exports = router;
