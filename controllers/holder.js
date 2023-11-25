const router = express.Router();
const passport = require('../config/ppConfig');

// import models
const { user } = require('../models');

router.get("/holder", (req, res) => {
    return res.render("holder/holder");
  });