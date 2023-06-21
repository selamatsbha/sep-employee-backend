const router = require("express").Router();
const User = require("../model/user");

router.post("/user", async (req, res) => {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password, 
    });
  
    try {
      const savedUserData = await newUser.save();
      res.status(200).json(savedUserData);
    } catch (err) {
      res.status(500).json(err);
    }

});

router.get("/users", async (req, res) => {
    try {
      const getAllUser = await User.find({});
      res.status(200).json(getAllUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const findUser = await User.findById(req.params.id);
      res.status(200).json(findUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, 
        {
        $set: req.body,
        },
        { new: true }
        );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

    module.exports = router;