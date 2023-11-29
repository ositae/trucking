const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");

// import models
const { holder } = require("../models");

router.get("/", (req, res) => {
    const { id, truckBrand, truckTrans, workType, truckType } = req.user.get(); 
    res.render('holder/index', { id, truckBrand, truckTrans, workType, truckType });
  });
router.get("/add", (req, res) => {
  return res.render("holder/index");
});
router.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  // find the user by its ID and render it to the edit view
  holder.findById(id, (err, user) => {
    if (!user) {
      return res.redirect("/");
    } else {
      return res.render("holder/index", { user: user });
    }
  });
});
// router.post("/", (req, res) => {
//     // print the data that the user submits
//     console.log(req.body);
//     // create a new account
//     let newAccount = new Account(
//       // faker.finance.accountName(),
//       req.body.accountName,
//       faker.finance.accountNumber(),
//       Number(req.body.amount),
//       faker.finance.routingNumber(),
//       faker.finance.pin()
//   );
//     // print the newAccount
//     console.log("new account", newAccount);
//     fs.readFile("./data/accounts.json", "utf8", (error, data) => {
//       if (error) {
//         return res.json({ message: "Error occured. Please try again" });
//       } else {
//         data = JSON.parse(data); // array
//         let index = data.length;
//         newAccount.id = index; // the new account has an id now.
//         data.push(newAccount);
//         let stringData = JSON.stringify(data);
//         // write the data to the file
//         fs.writeFile(
//           "./data/accounts.json",
//           stringData,
//           "utf8", (error, result) => {
//           return res.redirect(`/accounts/${newAccount.accountNumber}`);
//             // return res.json({ account: newAccount });
//           });
//         }
//       })
//   });
  router.put("/truckBrand", (req, res) => {
  let truckBrandId = req.query.truckBrand;
  console.log("Truck Brand Id", truckBrandId);
  holder.updateOne({ _id: truckBrandId }, function (err, result) {
    if (!err) {
      console.log("Updated");
      res.send("Successfully updated!");
    } else {
      console.log("Error in updating data: " + err);
      res.send("There was a problem with your update operation." + err);
    }
  });
});

router.delete("/truckType", (req, res) => {
  let deleteId = req.query.truckType;
  holder.remove({ _id: deleteId }, function (err, result) {
    if (!err) {
      res.send("Deleted Successfully!");
    } else {
      console.log("Error in deleting data: " + err);
      res.send("There was a problem with your deletion operation." + err);
    }
  });
});

module.exports = router;
