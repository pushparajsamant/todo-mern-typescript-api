//create a server
import express from "express";
import "./db";
import Note, { NoteSchemaInterface } from "./models/note";
import {
  create,
  deleteNote,
  getAllNotes,
  getSingleNote,
  updateSingleNote,
} from "./controllers/note";
import noteRouter from "./routers/note";
import cors from "cors";
const app = express();
//This will parse request coming from fetch.post()
app.use(express.json());
//This will parse request coming from html form
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//Middle ware function for all requests but requests can come from different places like fetch.post of form action so we use express middleware
// app.use((req, res, next) => {
//         req.on('data', chunk => {
//             req.body = JSON.parse(chunk);
//             next();
//         })
//     }
// );
// app.get('/', getAllNotes)
// app.get('/:id', getSingleNote)

// app.post('/', create);
//Middleware function for endpoint to parse body
// (req, res, next) => {
//     req.on('data', chunk => {
//         req.body = JSON.parse(chunk);
//         next();
//     })
// },
// async (req, res) => {
//     // const note = new Note<NoteSchemaInterface>({
//     //     title: (req.body as NoteSchemaInterface).title,
//     //     description: (req.body as NoteSchemaInterface).description
//     // })
//     // await note.save();
//     await Note.create<NoteSchemaInterface>({
//         title: (req.body as NoteSchemaInterface).title,
//         description: (req.body as NoteSchemaInterface).description
//     })
//     res.json({ data: 'Post function called'});
// }
// );
// app.patch('/:id', updateSingleNote)
// app.delete('/:id', deleteNote)

app.use("/note", noteRouter);
//listen to port
app.listen(8000, () => {
  console.log("server started");
});
