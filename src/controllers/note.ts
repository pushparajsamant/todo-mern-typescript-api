import { RequestHandler } from "express-serve-static-core";
import { NoteSchemaInterface } from "src/models/note";
import Note from "../models/note";

export const createNote: RequestHandler = async (req, res) => {
  // const note = new Note<NoteSchemaInterface>({
  //     title: (req.body as NoteSchemaInterface).title,
  //     description: (req.body as NoteSchemaInterface).description
  // })
  // await note.save();
  //console.log(req.body);
  const newNote = await Note.create<NoteSchemaInterface>({
    title: (req.body as NoteSchemaInterface).title,
    description: (req.body as NoteSchemaInterface).description,
  });
  res.json(newNote);
};
export const getAllNotes: RequestHandler = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};
export const getSingleNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const notes = await Note.findById(id);
  res.json(notes);
};
export const deleteNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const deleteNote = await Note.findByIdAndDelete(id);
  if (!deleteNote) {
    res.json({ error: "Note not found" });
  }
  res.send({ message: "note deleted successfully" });
};
export const updateSingleNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);

    if (!note) {
      res.json({ error: "Note not found" });
    }
    const { title, description } = req.body as NoteSchemaInterface;

    if (title) note.title = title;
    if (description) note?.description = description;
    await note.save();
    res.json(note);
  } catch (e) {
    console.log(e);
  }
};
