const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()


app.use(express.json())
app.use(cors())


// import the NtesSchema 
const NoteModel = require("./model/Nodeschema")

// connect to the database 
mongoose.connect("mongodb://localhost:27017/NodeApp").then(()=>{
    console.log("Connected to the mongodb")
}).catch((error)=>{
    console.log(error)
})

// API That create new notes 
app.post("/Create", async (req, res) =>{
    const NewNotes = NoteModel(req.body)
    const SaveNotes = await NewNotes.save()
    if (SaveNotes){
        res.send("Saved seccssefully ")
    }
})
// API That gets The New Notes
app.get("/Get", async (req, res) =>{
    const GetNotes = await NoteModel.find()
    res.send(GetNotes)
})

// API That gets The New Notes By title using put API
app.put("/Search/:title", async (req, res) =>{
    const searchNotes = await NoteModel.findOne({Title:req.params.title})
    if(searchNotes){
        res.send(searchNotes)       
    }else{
        res.send("Note not found")
    }
})

// API That gets The New Notes By title using get API

app.get("/Title/Get/:title", async (req, res) =>{
    const GetNotesTitle = await NoteModel.findOne({Title:req.params.title})
    if (GetNotesTitle){
        res.send(GetNotesTitle)
    }else{
        res.send("Note not found")
    }
})

// API That delete notes  using  _id 
app.delete("/Delete/:id", async (req, res) =>{
    const DeleteNotes = await NoteModel.deleteOne({_id :req.params.id})
    if (DeleteNotes){
        res.send("Deleted seccssefully ")
    }
})

// API Get Single 
app.get("/Note/single/:id", async (req, res) => {
    const getSingleNote = await NoteModel.findOne({_id: req.params.id})
    if (getSingleNote){
        res.send(getSingleNote)
    }
})

// API that Update notes using _id
app.put("/Update/:id"  , async (req, res)=>{
    const UpdateNotes = await NoteModel.updateOne(
        {_id:req.params.id},
        {$set:req.body }
    )
    if(UpdateNotes){
        res.send("notes Updated Successfully")
    }
 })









app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})