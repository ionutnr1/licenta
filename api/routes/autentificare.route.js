import express from "express";
import {
  inregistrare,
  conectare,
  deconectare,
} from "../controllers/autentificare.controller.js";

const router = express.Router();

router.post("/inregistrare", inregistrare);
router.post("/conectare", conectare);
router.post("/deconectare", deconectare);

export default router;
