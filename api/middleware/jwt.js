import jwt from "jsonwebtoken"
import creazaEroare from "../utils/creazaEroare.js";

export const verificareToken = (req, res, next) => {
    
    const Token = req.cookies.accesToken;
    if (!Token){
        console.log("Token missing");
        return next(creazaEroare(401, "Nu sunteti autentificat!"));
    } 
    
    jwt.verify(Token, process.env.JWTKEY, async (err, payload) => {
        if (err) {
            console.log("Token invalid", err);
            return next(creazaEroare(403, "Token invalid!"));
        } 
        console.log("Token valid, payload:", payload);
        req.userID=payload.id;
        req.isVanzator = payload.isVanzator;
        next();
    });
}

