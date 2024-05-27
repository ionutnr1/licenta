import userModel from "../models/user.model.js";
import User from "../models/user.model.js";
import creazaEroare from "../utils/creazaEroare.js";

export const deleteUtilizator = async (req,res, next) =>{

    const utilizator = await User.findById(req.params.id)

        if(req.userID!==userModel._id.toString()){
            return next(creazaEroare(403, "Poti sterge doar contul tau!"))
        }
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).send("Utilizator sters!")
};

export const getUtilizator = async (req, res, next) => {
  const utilizator = await User.findById(req.params.id);

  res.status(200).send(utilizator);
};