const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResearchSchema = new Schema({
  rtitle: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  fileSize: {
    type: String,
    required: true,
  },
 
 customer: { type: mongoose.Schema.Types.ObjectId, required: false, ref: "customer" },
});

const research = mongoose.model("research", ResearchSchema);
module.exports = research;
