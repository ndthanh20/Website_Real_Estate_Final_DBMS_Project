const { response } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const House = require('../model/House')

router.get('/',(req,res) =>{
    House.find({}).then(response=>{
            console.log('hello');
            res.json(response);
          });
    });

router.post('/',(req,res) =>{
	const data = req.body
	console.log(House)
	house = new House(data)
    house.save(function (err) {
		if (err) return console.error(err);
	  }).then(response =>{
		  res.json(house);
	  });
    });

router.delete('/:title', async (req, res) => {
    const title = req.params.title
    House.deleteOne({title: title})
        .then(response=>{
            res.send('ok')
        });
    });

router.get('/:name',(req,res) =>{
	const name = req.params.name;
	console.log(name)
    House.find({}).then(response =>{
            const house = response.find(el => el.url.includes(name))
            res.json(house);
          });
    });


router.get('/search/:search',async (req,res) =>{
    let search = req.params.search.split(' ');
    search = search.map(el => el.toLowerCase());
    House.find({}).then(response =>{
            const list = response.filter(cur => {
                const resultsArray = search.map(el => {
					console.log(el)
                    const houseTitle = cur.title.toLowerCase();
                    const houseLocation = cur.Location.toLowerCase();
                    return houseTitle.includes(el) || houseLocation.includes(el);
                });
                return resultsArray.find(el => el === true);
            })
            res.json(list);
          });
    });

module.exports = router;