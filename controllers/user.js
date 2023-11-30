const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const isLoggedIn = require('../middleware/isLoggedIn');

// import models
const { user } = require("../models");

router.get("/", isLoggedIn, (req, res) => {
    const { id, name, email, profession, holder } = req.user.get(); 
    res.render('profile', { id, name, email, profession, holder });
  });
router.get("/", (req, res) => {
  return res.render("user/index");
});
router.get("/:id/edit", (req, res) => {
  let id = req.params.id;
  console.log(id);
  // find the user by its ID and render it to the edit view
  user.findById(id, (err, user) => {
    if (!user) {
      return res.redirect("/");
    } else {
      return res.render("user/index.ejs", { user: user });
    }
  });
});
router.post('/', (req, res) => {
  let index = data.length;
  newProfesion.id = index; 
  data.push(newProfession);
  let stringData = JSON.stringify(data);
  // write the data to the file
  fs.writeFile('./models/', stringData, 'utf8', (error, result) => {
      return res.redirect(`/Profession/${newProfession.Profession}`);
  })
  
});
router.put("/profession", (req, res) => {
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

router.delete("/holder", (req, res) => {
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
