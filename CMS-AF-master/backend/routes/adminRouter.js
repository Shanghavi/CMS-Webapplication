const router = require ('express').Router();
const Admin = require('../models/admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register
router.post('/register', async (req,res) => {

   try{
       var emailExist = await Admin.findOne({email:req.body.email});
       
       if(emailExist){
           return res.status(400).json("Email already exists");
       }

        //password hash
        var hash = await bcrypt.hash(req.body.password,10);

        const admin = new Admin({
            name:req.body.name,
            email:req.body.email,
            password:hash,
        });
     
        var data = await admin.save();
        res.json(data);
        res.json(admin);
     
        } catch(err){

           res.status(400).json(err);
        }

    
});

// login

router.post('/login',async (req,res) => {
     
        try{
                 var userData = await Admin.findOne({email:req.body.email});

                if(!userData){
                return res.status(400).json("Email not exists");
                }

                var validPsw = await bcrypt.compare(req.body.password,userData.password);

                if(!validPsw){
                return res.status(400).json("Password not valid");
                }

                var userToken = await jwt.sign({email:userData.email},'secretkey');

                 res.header('auth', userToken).send(userToken);


             } catch(err){

                res.status(400).json(err);
             }

})


module.exports = router;