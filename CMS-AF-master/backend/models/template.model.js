const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const templateSchema = new Schema({
    templatename: {type: String, required: true},
    fileName: {type: String,required: true },
    filePath: { type: String, required: true},
    fileType: { type: String,required: true },
    fileSize: {type: String,required: true}
}, {
    timestamps: true
});

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;