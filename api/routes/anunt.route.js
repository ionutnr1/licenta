import express from "express"
import {getAnunt, getAnunturi, stergeAnunt, creeazaAnunt} from "../controllers/anunt.controller.js";
import { verificareToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", getAnunturi)
router.post("/", verificareToken, creeazaAnunt);
router.delete("/:id", verificareToken, stergeAnunt);
router.get("/single/:id", getAnunt);

export default router;