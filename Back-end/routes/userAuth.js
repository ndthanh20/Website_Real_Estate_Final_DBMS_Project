const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/User');

router.get('/', async (req,res) =>{
    User.find({}).then(response =>{
            res.json(response);
          });
    });

router.delete('/:userName', async (req, res) => {
    const userName = req.params.userName
    User.deleteOne({userName: userName})
        .then(response=>{
            res.send('ok')
        });
    });

router.get('/:userId', async (req,res) =>{
    const id = req.params.userId;
    User.find({_id: mongoose.Types.ObjectId(id)}).then(response =>{
            res.json(response);
          });
    });

router.get('/users/:userName', async (req,res) =>{
    const name = req.params.userName;
    User.find({userName: name}).then(response =>{
			console.log(response)
			res.json(response);
          });
    });

router.post('/', (req,res) =>{
	const data = req.body
	
    if(req.body.type === 'candidate'){
        user = new User(data)
    }
    if(req.body.type === 'employer'){
        newUser = new User({
            userName: req.body.userName,
            password: req.body.password,
            type: 'employer',
            fullName: req.body.fullName,
            address: req.body.address
        });
	}
    user.save(function (err) {
		if (err) return console.error(err);
	  }).then(response =>{
		  res.json(user);
	  });
});

router.patch('/users/:userName', (req,res) =>{
    let data;
    if(req.body.type ==='candidate'){
        data = {
            // userName: req.body.userName,
            // password: req.body.password,
            // type: req.body.type,
            fullName: req.body.fullName,
            sex: req.body.sex,
            dateOfBirth: req.body.dateOfBirth,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            hobbies: req.body.hobbies,
            literacy: req.body.literacy,
            gpa: req.body.gpa,
            skills: req.body.skills,
            experiences: req.body.experiences
        }
    }
    if(req.body.type === 'employer')
        data = {
            // userName: req.body.userName,
            // password: req.body.password,
            // type: req.body.type,
            fullName: req.body.fullName,
            activeDate: req.body.activeDate,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            major: req.body.major,
            skills: req.body.skills,
            overviews: req.body.overviews,
            benefits: req.body.benefits
        }
    User.updateOne({userName: req.body.userName},{$set: data},()=>{
            console.log(req.body);
            res.send('ok');
    })});


module.exports = router;
