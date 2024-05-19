import express from "express"
import { deleteUtilizator } from "../controllers/user.controller.js";
import { verificareToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verificareToken, deleteUtilizator)
router.get("/inregistrare",)
router.get("/conectare",);


export default router;