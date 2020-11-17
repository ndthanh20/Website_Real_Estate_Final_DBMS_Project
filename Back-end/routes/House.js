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
    console.log(req.body)
    House.insertOne(data).then(response=>{					
            res.send('ok')
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
    console.log(search);
    House.find({}).then(response =>{
            const list = response.filter(cur => {
                const resultsArray = search.map(el => {
                    const houseTitle = cur.title.toLowerCase();
                    const companyName = cur.PropertyInfo.name.toLowerCase();;
                    const tagList = cur.tagList.map(cur => cur.toLowerCase());
                    return houseTitle.includes(el) || companyName.includes(el) || tagList.find(el => el.includes(el));
                });
                return resultsArray.find(el => el === true);
            })
            res.json(list);
          });
    });

module.exports = router;