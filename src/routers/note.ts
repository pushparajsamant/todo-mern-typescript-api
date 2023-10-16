import { create } from "domain";
import { Router } from "express";
import {
  getAllNotes,
  getSingleNote,
  updateSingleNote,
  deleteNote,
  createNote,
} from "../controllers/note";

const router = Router();
router.get("/", getAllNotes);
router.get("/:id", getSingleNote);

router.post("/", createNote);
router.patch("/:id", updateSingleNote);
router.delete("/:id", deleteNote);

export default router;
