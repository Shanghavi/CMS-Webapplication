"use strict";
const ResearchPres = require("../models/researchPres.model");

const singleFileUpload = async (req, res, next) => {
  try {
    const file = new ResearchPres({
      rtitle: req.body.rtitle,
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.0
      customer: req.body.customer,
    });
    await file.save();
    res.status(201).send("File Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getallSingleFiles = async (req, res, next) => {
  try {
    const data = await ResearchPres.find({}).populate("customer", "name");
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
  singleFileUpload,
  getallSingleFiles,
 
};
