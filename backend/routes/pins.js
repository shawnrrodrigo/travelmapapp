const router = require("express").Router();
const Pin = require("../model/Pin");

router.post("/", async (req, res)=>{
    const pin = new Pin(req.body);
    try{
        const newPin = await pin.save();
        res.status(200).json(newPin);
    }catch(err){
        res.status(401).json(err);
    }
});


router.get("/", async (req, res)=>{
    try{
        const pin = await Pin.find();
        res.status(200).json(pin);
    }catch(err){
        res.status(401).json(err);
    }
})
module.exports = router;