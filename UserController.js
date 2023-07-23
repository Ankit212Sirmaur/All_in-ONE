const registeruser = (req,res) =>{
    const userName = req.body.name;
    const email = req.body.email;
    const password = req.body.pass;

    res.json({
        success:true
    });
};

module.exports = registeruser;