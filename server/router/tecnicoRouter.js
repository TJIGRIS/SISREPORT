import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import { login, registrar, logout, checkLogin } from "../controllers/tecnicoController.js";

const router = express.Router();

router.post("/registrar", registrar);
router.post("/login", login);
router.get("/logout", logout);
router.get('/check-login', checkAuth, checkLogin)


export default router;
