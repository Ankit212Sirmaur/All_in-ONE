const express = require("express");

const router = express.Router();
const registeruser = require("./UserController");

router.route("/login").post(registeruser);
router.route("/product").delete(registeruser);

module.exports = router;
