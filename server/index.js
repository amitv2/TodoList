const express = require('express');
const cors = require('cors');
const TodoModel = require('./model/Todoschema');
const mongoose = require('mongoose');
const app=express();
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/TodoList')

app.post('/add',(req,res)=>
{
    const body=req.body;
TodoModel.create({
    todoName:body.todoName
}).then((res)=>res.json(res)).catch((err)=>res.json(err))
})
app.get('/get',(req,res)=>{
    TodoModel.find({}).then((todo)=>res.json(todo))
    .catch((todo)=>res.json(err))
}) 
app.delete('/remove/:id',(req,res)=>
{
    const id=req.params.id;
    TodoModel.findByIdAndDelete({_id:id})
    .then((todo)=>res.json(todo))
    .catch((todo)=>res.json(err))
})

app.listen(9000,console.log("server is created"))
