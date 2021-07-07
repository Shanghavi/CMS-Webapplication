"use strict";

const express = require("express");
const { upload } = require("../helpers/filehelper");
const {
  workshopFileUpload,
  getallWorkshopFiles,

} = require("../controllers/WorkshopUploadController");
const router = express.Router();

router.post("/addworkshop", upload.single("file"), workshopFileUpload);
router.get("/getworkshop", getallWorkshopFiles);


module.exports = {
  routes: router,
};
