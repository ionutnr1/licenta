import Anunt from "../models/anunt.model.js";
import creazaEroare from "../utils/creazaEroare.js";

export const creeazaAnunt = async (req, res, next) => {
  if (!req.isVanzator)
    return next(creazaEroare(403, "Doar vanzatorii pot adauga anunturi"));

  const anuntNou = new Anunt({
    userId: req.userId,
    ...req.body,
  });
  try {
    const anuntSalvat = await anuntNou.save();
    res.status(201).json(anuntSalvat);
  } catch (err) {
    next(err);
  }
};
export const stergeAnunt = async (req, res, next) => {
  try {
    const anunt = await Anunt.findById(req.params.id);
    if (anunt.userId !== req.userId)
      return next(creazaEroare(403, "Poti sterge doar anunturile postate de tine"));

    await Anunt.findByIdAndDelete(req.params.id);
    res.status(200).send("Anuntul dumneavoastra a fost sters!");
  } catch (err) {
    next(err);
  }
};
export const getAnunt = async (req, res, next) => {
  try {
    const anunt = await Anunt.findById(req.params.id);
    if (!anunt) next(creazaEroare(404, "Anuntul dumneavoastra nu a fost gasit"));
    res.status(201).send(anunt);
  } catch (err) {
    next(err);
  }
};
export const getAnunturi = async (req, res, next) => {
  const interog = req.query;
  const filtrare = {
    ...(interog.userId && { userId: interog.userId }),
    ...(interog.cat && { cat: interog.cat }),
    ...((interog.min || interog.max) && {
      price: {
        ...(interog.min && { $gt: interog.min }),
        ...(interog.max && { $lt: interog.max }),
      },
    }),
    ...(interog.search && { title: { $regex: interog.search, $options: "i" } }),
  };
  try {
    const anunturi = await Anunt.find(filtrare).sort({ [interog.sort]: -1 });
    res.status(201).send(anunturi);
  } catch (err) {
    next(err);
  }
};