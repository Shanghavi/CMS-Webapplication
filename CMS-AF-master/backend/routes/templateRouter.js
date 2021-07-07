'use strict';
const express = require('express');

const {upload} = require('../helpers/filehelper');
const {templateUpload,getallTemplates,getTemplates,deleteTemplate,updateTemplate} = require('../controllers/templateController');
const router = express.Router();

router.post('/template', upload.single('file'),templateUpload);

router.get('/', getallTemplates);
router.get('/:id', getTemplates);
router.post('/update/:id',upload.single('file'),updateTemplate);

router.delete('/:id', upload.single('file'),deleteTemplate);


module.exports = {
    routes: router
}