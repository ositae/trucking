const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

// import models
const { user } = require("../models");

router.get("/user", (req, res) => {
  return res.render("user/user");
});
router.get("/user/profession", (req, res) => {
  return res.render("user/profession");
});
router.get("/user/edit/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  // find the user by its ID and render it to the edit view
  user.findById(id, (err, user) => {
    if (!user) {
      return res.redirect("/user");
    } else {
      return res.render("user/edit", { user: user });
    }
  });
});
// router.post("/user/add", (req, res) => {
//                         let newuser = new user({
//                             name: req.body.id,
//                             plateNumber: req.body.plateNumber,
//                             driver: req.body.driver,
//                             capacity: req.body.capacity,
//                             status: req.body.status,
//                             type: req.body.type,
//                             });
//                             newuser.save((err, data) => {
router.put("/user/profession", (req, res) => {
  let professionId = req.query.profession;
  console.log("Profession Id", professionId);
  user.updateOne({ _id: professionId }, function (err, result) {
    if (!err) {
      console.log("Updated");
      res.send("Successfully updated!");
    } else {
      console.log("Error in updating data: " + err);
      res.send("There was a problem with your update operation." + err);
    }
  });
});

router.delete("user/holder", (req, res) => {
  let deleteId = req.query.holder;
  user.remove({ _id: deleteId }, function (err, result) {
    if (!err) {
      res.send("Deleted Successfully!");
    } else {
      console.log("Error in deleting data: " + err);
      res.send("There was a problem with your deletion operation." + err);
    }
  });
});

module.exports = router;
