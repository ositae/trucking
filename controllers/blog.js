const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

// import models
const { blog } = require("../models");

router.get("/", (req, res) => {
  return res.render("blog/index");
});

router.get("/new", (req, res) => {
  return res.render("blog/new.ejs");
});
router.get("/:textBox/edit", (req, res) => {
  let textBox = req.params.textBox;
  console.log(textBox);
  // find the user by its ID and render it to the edit view
  blog.findById(textBox, (err, user) => {
    if (!user) {
      return res.redirect("/");
    } else {
      return res.render("blog/textBox", { user: user });
    }
  });
});
router.post('/', (req, res) => {
          let index = data.length;
          newTextBox.id = index; 
          data.push(newTextBox);
          let stringData = JSON.stringify(data);
          // write the data to the file
          fs.writeFile('./models/', stringData, 'utf8', (error, result) => {
              return res.redirect(`/textBox/${newTextBox.textBox}`);
          })
          
      });

router.put("/textBox", (req, res) => {
  let userTextBox = req.query.textBox;
  console.log("TextBox", userTextBox);
  blog.updateOne({ _textBox: userTextBox }, function (err, result) {
    if (!err) {
      console.log("Updated");
      res.send("Successfully updated!");
    } else {
      console.log("Error in updating: " + err);
      res.send("There was a problem with your update operation." + err);
    }
  });
});

router.delete("/textBox", (req, res) => {
  let deleteId = req.query.textBox;
  blog.remove({ _id: deleteId }, function (err, result) {
    if (!err) {
      res.send("Deleted Successfully!");
    } else {
      console.log("Error in deleting data: " + err);
      res.send("There was a problem with your deletion operation." + err);
    }
  });
});

module.exports = router;
