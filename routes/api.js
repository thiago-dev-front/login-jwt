const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

const db = "mongodb+srv://admin:admin@cluster0.d5omcyp.mongodb.net/mydatabase?readWriteAnyDatabase=true&w=majority";


mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true}, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
}, );



router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})

router.get('/special', (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})

router.post('/register', async (req, res) => {
    try {
      let userData = req.body;
      let user = new User(userData);
      await user.save();
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error registering user');
    }
  });
  

  router.post('/login', async (req, res) => {
    try {
      let userData = req.body;
      let user = await User.findOne({ email: userData.email })
      if (!user) {
        res.status(401).send('Invalid Email');
      } else if (user.password !== userData.password) {
        res.status(401).send('Invalid Password');
      } else {
        res.status(200).send(user);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send('Error logging in');
    }
  });
  

module.exports = router;