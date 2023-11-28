const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

// import models
const { trucking } = require("../models");

router.get("/trucking", (req, res) => {
  return res.render("trucking/trucking");
});
router.get("/trucking/add", (req, res) => {
  return res.render("trucking/add");
});
router.get("/trucking/edit/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  // find the user by its ID and render it to the edit view
  trucking.findById(id, (err, user) => {
    if (!user) {
      return res.redirect("/trucking");
    } else {
      return res.render("trucking/edit", { user: user });
    }
  });
});
// router.post("/trucking/add", (req, res) => {
//                         let newTrucking = new trucking({
//                             name: req.body.id,
//                             plateNumber: req.body.plateNumber,
//                             driver: req.body.driver,
//                             capacity: req.body.capacity,
//                             status: req.body.status,
//                             type: req.body.type,
//                             });
//                             newTrucking.save((err, data) => {
router.put("/trucking/endorsement", (req, res) => {
  let userId = req.query.id;
  console.log("Endorsement Id", userId);
  trucking.updateOne({ _id: userId }, function (err, result) {
    if (!err) {
      console.log("Updated");
      res.send("Successfully updated!");
    } else {
      console.log("Error in updating data: " + err);
      res.send("There was a problem with your update operation." + err);
    }
  });
});

router.delete("trucking/textBox", (req, res) => {
  let deleteId = req.query.textBox;
  trucking.remove({ _id: deleteId }, function (err, result) {
    if (!err) {
      res.send("Deleted Successfully!");
    } else {
      console.log("Error in deleting data: " + err);
      res.send("There was a problem with your deletion operation." + err);
    }
  });
});

module.exports = router;
