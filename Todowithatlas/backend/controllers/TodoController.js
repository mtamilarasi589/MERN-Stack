const Todomodel=require("../models/TodoModel")

module.exports.getTodo=async(req,res)=>{
    const todo=await Todomodel.find();
    res.send(todo);
};

module.exports.saveTodo=async(req,res)=>{
    const {text}=req.body
   Todomodel.create({text})
   .then((data)=>{
    console.log("Added successfully");
    console.log(data)
    res.send(data)
   })
};
   module.exports.updateTodo=async(req,res)=>{
    const { id } = req.params;
    const { text } = req.body;
  
   Todomodel
   .findByIdAndUpdate(id,{text})
   .then(()=>res.send("Updated successfully"))
   .catch((err)=>console.log(err))
   };
   
   module.exports.deleteTodo=async(req,res)=>{
    const { id } = req.params;
   Todomodel
   .findByIdAndDelete(id)
   .then(()=>res.send("Deleted successfully"))
   .catch((err)=>console.log(err))
   };
   