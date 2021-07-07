const router = require("express").Router();
let customer = require("../models/user.model");

//get all users
router.route("/getuser/").get((req, res) => {
  customer.find()
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a user
router.route("/adduser").post((req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const phone = req.body.phone;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const qualification = req.body.qualification;
  

  const newUser = new customer({
    email,
    name,
    phone,
    city,
    state,
    country,
    qualification,

   
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/getuser/:id").get((req, res) => {
  customer.findById(req.params.id)
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
