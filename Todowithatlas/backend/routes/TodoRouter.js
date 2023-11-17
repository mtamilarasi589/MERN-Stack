const express=require("express")
const {getTodo,saveTodo,updateTodo,deleteTodo}=require("../controllers/TodoController")
const router=express()
// router.get('/',(req,res)=>{
//     res.json("Hello")
// })

router.get('/get',getTodo)
router.post('/save',saveTodo)
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);




module.exports=router;