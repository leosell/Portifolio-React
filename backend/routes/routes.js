import express from "express";
import contact from "./contact.routes.js";

const router = express.Router()

router.use('/contact', contact)

export default router;