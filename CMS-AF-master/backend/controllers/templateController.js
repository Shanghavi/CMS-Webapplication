'use strict';
const router = require('express').Router();
const Template = require('../models/template.model');



const templateUpload = async (req, res, next) => {
    try{
        const file = new Template({
            templatename:req.body.templatename,
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
             await file.save();
             res.status(201).send('File Uploaded Successfully');
     }catch(error) {
             res.status(400).send(error.message);
        }
}

const getallTemplates = async (req, res, next) => {
    Template.find()
        .then(templates => res.json(templates))
        .catch(err => res.status(400).json('Error: ' +err));
}

const getTemplates = async (req, res, next) => {
    Template.findById(req.params.id)
        .then(template => res.json(template))
        .catch(err => res.status(400).json('Error: '+err));
}


const deleteTemplate = async (req, res, next) => {
    Template.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error: '+err));
    
}  

const updateTemplate = async (req, res, next) => {
    Template.findById(req.params.id)
        .then(file => {
            file.templatename = req.body.templatename,
            file.fileName = req.file.originalname,
            file.filePath = req.file.path,
            file.fileType = req.file.mimetype,
            file.fileSize = fileSizeFormatter(req.file.size, 2) // 0.00

            file.save()
            .then(() => res.json('Template updated !'))
            .catch(err => res.status(400).json('Error: '+err));
            })
            .catch(err => res.status(400).json('Error: '+err));
 }
        

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

module.exports = {
    templateUpload,
    getallTemplates,
    getTemplates,
    deleteTemplate,
    updateTemplate
}