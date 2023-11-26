const router = express.Router();
const passport = require("../config/ppConfig");

// import models
const { holder } = require("../models");

router.get("/holder", (req, res) => {
  return res.render("holder/holder");
});
router.get("/holder/add", (req, res) => {
  return res.render("holder/add");
});
router.get("/holder/edit/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  // find the user by its ID and render it to the edit view
  holder.findById(id, (err, user) => {
    if (!user) {
      return res.redirect("/holder");
    } else {
      return res.render("holder/edit", { user: user });
    }
  });
});
// router.post("/holder/add", (req, res) => {
//                         let newholder = new holder({
//                             name: req.body.id,
//                             plateNumber: req.body.plateNumber,
//                             driver: req.body.driver,
//                             capacity: req.body.capacity,
//                             status: req.body.status,
//                             type: req.body.type,
//                             });
//                             newholder.save((err, data) => {
router.put("/holder/truckBrand", (req, res) => {
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

router.delete("holder/truckType", (req, res) => {
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
