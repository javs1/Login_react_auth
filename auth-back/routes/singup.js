const router = require("express").Router();
const {jsonResponse} = require("../lib/jsonResponse")

router.post("/", (req,res)=>{
    const {username,email,password} = req.body;

    if(!!username || !!email || !!password){
        return res.status(400).json(jsonResponse(400, {
            error:"Required fields not fund"
        }))
    }

    res.status(200).json(jsonResponse(200, {
        message: "User created successfully"
    }));

    res.send("signup");
});

module.exports = router;