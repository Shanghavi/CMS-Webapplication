const router = require("express").Router();
const Conference = require("../models/conferenceModal");


//POST METHOD
//Adding approved conference details
router.route('/add').post((req, res) =>{
 
            const name =  req.body.name;
            const date = req.body.date;
            const topic =req.body.topic;
            const description =  req.body.description;
            const venue = req.body.venue;
            const type = req.body.type;
            const conductor = req.body.conductor;

const conference = new Conference({name, date,topic,description,venue,type,conductor});

conference.save()
    .then(() => res.json('conference added!'))
    .catch(err => res.status(400).json('Error: '+err));
});


//GET METHOD
//Displaying all approved conferences
router.route("/getconference/").get((req, res) => {
    Conference.find()
      .then((conference) => res.json(conference))
      .catch((err) => res.status(400).json("Error: " + err));
});




module.exports = router;