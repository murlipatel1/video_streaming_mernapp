const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Video = require("../models/Videos");
const fetchuser = require("../middleware/fetchuser");

router.get("/fetchallvideos", fetchuser, async (req, res) => {
  try {
    const notes = await Video.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/addvideo",
  fetchuser,
  [
    body("title").isLength({ min: 3 }),
    body("description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description , link } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const video = new Video({
        title,
        description,
        link,
        user: req.user.id,
      });
      const saveVideo = await video.save();
      res.json(saveVideo);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.put("/updatevideo/:id", fetchuser, async (req, res) => {
  try {
    const { title, description,link } = req.body;
    const newVideo = {};
    if (title) {
      newVideo.title = title;
    }
    if (description) {
      newVideo.description = description;
    }
    if (link) {
      newVideo.link = link;
    }
    let video = await Video.findById(req.params.id);
    
    if (!video) {
      return res.status(404).send("Not Found");
    }
    if (video.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    video = await Video.findOneAndUpdate(
      req.params.id,
      { $set: newVideo },
      { new: true }
    );
    res.json({ video });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/deletevideo/:id", fetchuser, async (req, res) => {
  try {
    let video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).send("Not Found");
    }
    if (video.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    video = await Video.findOneAndDelete(req.params.id);
    res.json({ Success: "deleted succesfully", video: video });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/comment/:id", fetchuser, async (req, res,next) => {
  const newComment = new Video({ ...req.body, user: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    next(err);
  }
})

router.put("/like/:id", fetchuser, async (req, res,next) => {
  const id = req.user.id;
  try {
        await Video.findByIdAndUpdate(id,{
          $addToSet:{like:id},
        })
        res.status(200).json("The video has been liked.")
      } catch (err) {
        next(err);
      }
})

module.exports = router;
