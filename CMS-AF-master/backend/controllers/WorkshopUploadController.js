"use strict";
const WorkshopPres = require("../models/workshopPres");

const workshopFileUpload = async (req, res, next) => {
  try {
    const file = new WorkshopPres({
      wtitle: req.body.wtitle,
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
      customer: req.body.customer,
      venue: req.body.venue,
      date: req.body.date,
    });
    await file.save();
    res.status(201).send("work File Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getallWorkshopFiles = async (req, res, next) => {
  try {
    const data = await WorkshopPres.find({}).populate("customer", "name age");
    res.status(200).send({ data });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

module.exports = {
  workshopFileUpload,
  getallWorkshopFiles,
};
