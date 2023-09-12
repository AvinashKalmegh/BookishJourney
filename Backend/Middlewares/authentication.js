const jwt = require("jsonwebtoken");

const authentication = async(req,res,next)=>{
    try {
        let token = req?.headers?.authorization;

        if(!token){
            res.send({result: "Not a authorized user !"});
        }

        // token = req.headers.authorization.split(" ")[1];

        const validToken = await jwt.verify(token, process.env.KEY);

        if(!validToken){
            res.send({result: "Not a authorized user !"})
        }

        req.body.userId = validToken.userId;
        next();
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = authentication;