const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const adminRouter = require('./routes/adminRouter');
const conferenceRouter = require('./routes/conference');
const templateRouter = require('./routes/templateRouter');
const workshop = require("./routes/workshop");
const customer = require("./routes/user");
const research = require("./routes/research");
const app = express();
const morgan = require('morgan');

app.use(cors());
app.use(bodyParser.json());
dotenv.config();
app.use(express.json())
app.use('/api',adminRouter,conferenceRouter,templateRouter.routes);
app.use("/api/research", research.routes);
app.use("/api/workshop", workshop.routes);
app.use("/api/user",customer);
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;
const ATLAS_URI = process.env.ATLAS_URI;

mongoose.connect(ATLAS_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {

    if(error){
        console.log('Database Error:', error.message);
    }
});

mongoose.connection.once('open', () =>{
    console.log('Database Synced');
});

app.route('/').get((req, res) => {
    res.send('SLIIT AF FINAL');
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));





app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
})
