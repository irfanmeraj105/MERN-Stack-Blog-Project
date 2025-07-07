const jwt= require('jsonwebtoken')
const registerModel= require('../models/registerModel')

// middleware to check the user is login or not 
const isLogin= async(req, res, next)=>{
    try {
        const token = req.cookies.token;
    
        if (!token) {
          return res.status(401).json({ success: false, msg: "Unauthorized" });
        }
    
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await registerModel.findById(decoded.id);
    
        if (!user) {
          return res
            .status(401)
            .json({ success: false, msg: "Unauthorized, user not found" });
        }
    
        req.user = user;
        next();
      } catch (error) {
        console.error(error);
        return res
          .status(500)
          .json({ success: false, msg: "Internal Server Error" });
      }
}

// export 
module.exports= isLogin;