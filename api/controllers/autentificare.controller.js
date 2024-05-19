import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import creazaEroare from "../utils/creazaEroare.js";

export const inregistrare = async (req,res, next) => {

    try{
        const hide = bcrypt.hashSync(req.body.parola, 5);
        const newUser = new User({
            ...req.body,
            parola: hide
        });

        await newUser.save();
        res.status(200).send("Utilizatorul a fost creat cu succes!")
    }catch(err){
        next(err);
    }
};

export const conectare =  async (req, res, next) => {
    try {
        const utilizator = await User.findOne({utilizator: req.body.utilizator});
        const err = new Error();
        err.status = 404;
        err.message = "Utilizatorul nu exista"
        if (!utilizator) return next(creazaEroare(404, "Utilizatorul nu exista"));

        const verificareParola = bcrypt.compareSync (req.body.parola, utilizator.parola);
        if (!verificareParola) return next(creazaEroare(400, "Utilizator sau parola incorecta"));

        const token = jwt.sign({
           id: utilizator._id,
           isVanzator: utilizator.isVanzator,
        },
        process.env.JWTKEY
    );

        const {parola,...info} = utilizator._doc;
        res.cookie("accesToken", token,{
            httpOnly: true,
        }).status(201).send(info)
    } catch (err) {
      next(err);
    }
};

export const deconectare = async (req, res) => {
    res.clearCookie("accesToken", {
        sameSite:"none",
        secure: "true",
    }).status(200),send("Ati fost delogat.")
};