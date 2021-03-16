require('dotenv').config()
const Event = require('../Model/Event');


exports.add_Event = async function(req,res){
     console.log("aaaaa");
    console.log(req.body);
    const event = new Event({
        title: req.body.title ,
        price: req.body.price,
        Date: req.body.data,
        duration: req.body.duration,
        location: req.body.location ,
        limit: req.body.limit,

    });
    const resultData = await Event.create(req.body).catch(err => err);
    res.send({ msg: 'OK', data: resultData})
}