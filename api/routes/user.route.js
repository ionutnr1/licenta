import express from "express"
import { deleteUtilizator, getUtilizator } from "../controllers/user.controller.js";
import { verificareToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verificareToken, deleteUtilizator)
router.delete("/:id", verificareToken, getUtilizator);
router.get("/inregistrare",)
router.get("/conectare",);


export default router;