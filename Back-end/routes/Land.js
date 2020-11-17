const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Land = require('../model/Land')

router.get('/',(req,res) =>{
    Land.find({}).then(response=>{
            console.log('hello');
            res.json(response);
          });
    });

router.post('/',(req,res) =>{
    const data = req.body
    console.log(req.body)
    Land.insertOne(data).then(response=>{
            res.send('ok')
        });
    });

router.delete('/:title', async (req, res) => {
    const title = req.params.title
    Land.deleteOne({title: title})
        .then(response=>{
            res.send('ok')
        });
    });

router.get('/:name',(req,res) =>{
    const name = req.params.name;
    Land.find({}).then(response =>{
            const land = response.find(el => el.url.includes(name))
            res.json(land);
          });
    });


router.get('/search/:search',async (req,res) =>{
    let search = req.params.search.split(' ');
    search = search.map(el => el.toLowerCase());
    console.log(search);
    Land.find({}).then(response =>{
            const list = response.filter(cur => {
                const resultsArray = search.map(el => {
                    const landTitle = cur.title.toLowerCase();
                    //const companyName = cur.PropertyInfo.name.toLowerCase();;
                    //const tagList = cur.tagList.map(cur => cur.toLowerCase());
                    return landTitle.includes(el); //|| companyName.includes(el) || tagList.find(el => el.includes(el));
                });
                return resultsArray.find(el => el === true);
            })
            res.json(list);
          });
    });

module.exports = router;