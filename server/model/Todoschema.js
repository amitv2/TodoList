const mongoose = require('mongoose');
const TodoSchema=mongoose.Schema({

todoName:
{
    type:String
}

})

const TodoModel=mongoose.model('todolist',TodoSchema);
module.exports=TodoModel;