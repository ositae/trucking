const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

// import models
const { holderstyle } = require("../models");

router.get("/", (req, res) => {
  return res.render("holderstyle/index");
});

router.get("/new", (req, res) => {
  return res.render("holderstyle/new.ejs");
});
router.get("/:id/edit", (req, res) => {
  let id = req.params.id;
  console.log(id);
  // find the user by its ID and render it to the edit view
  holderstyle.findById(id, (err, user) => {
    if (!user) {
      return res.redirect("/");
    } else {
      return res.render("holderstyle/id", { user: user });
    }
  });
});
router.post('/', (req, res) => {
          let index = data.length;
          newid.id = index; 
          data.push(newid);
          let stringData = JSON.stringify(data);
          // write the data to the file
          fs.writeFile('./models/', stringData, 'utf8', (error, result) => {
              return res.redirect(`/id/${newid.id}`);
          })
          
      });

router.put("/id", (req, res) => {
  let userid = req.query.id;
  console.log("id", userid);
  holderstyle.updateOne({ _id: userid }, function (err, result) {
    if (!err) {
      console.log("Updated");
      res.send("Successfully updated!");
    } else {
      console.log("Error in updating: " + err);
      res.send("There was a problem with your update operation." + err);
    }
  });
});

router.delete("/id", (req, res) => {
  let deleteId = req.query.id;
  holderstyle.remove({ _id: deleteId }, function (err, result) {
    if (!err) {
      res.send("Deleted Successfully!");
    } else {
      console.log("Error in deleting data: " + err);
      res.send("There was a problem with your deletion operation." + err);
    }
  });
});

module.exports = router;
