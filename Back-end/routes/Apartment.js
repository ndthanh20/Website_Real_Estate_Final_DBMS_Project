const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Apartment = require('../model/Apartment')

router.get('/',(req,res) =>{
    Apartment.find({}).then(response=>{
            console.log('hello');
            res.json(response);
          });
    });

router.post('/',(req,res) =>{
    const data = req.body
    console.log(req.body)
    apartment = new Apartment(data)
    apartment.save(function (err) {
		if (err) return console.error(err);
	  }).then(response =>{
		  res.json(apartment);
	  });
    });

router.delete('/:title', async (req, res) => {
    const title = req.params.title
    Apartment.deleteOne({title: title})
        .then(response=>{
            res.send('ok')
        });
    });

router.get('/:name',(req,res) =>{
    const name = req.params.name;
    Apartment.find({}).then(response =>{
            const apartment = response.find(el => el.url.includes(name))
            res.json(apartment);
          });
    });


router.get('/search/:search',async (req,res) =>{
    let search = req.params.search.split(' ');
    search = search.map(el => el.toLowerCase());
    console.log(search);
    Apartment.find({}).then(response =>{
            const list = response.filter(cur => {
                const resultsArray = search.map(el => {
					const apartmentTitle = cur.title.toLowerCase();
					const apartmentLocation = cur.Location.toLowerCase();
                    //const companyName = cur.PropertyInfo.name.toLowerCase();;
                    //const tagList = cur.tagList.map(cur => cur.toLowerCase());
                    return apartmentTitle.includes(el) || apartmentLocation.includes(el) ;//;tagList.find(el => el.includes(el));
                });
                return resultsArray.find(el => el === true);
            })
            res.json(list);
          });
    });

module.exports = router;