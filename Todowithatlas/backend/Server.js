const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
require("dotenv").config()
const app=express()

const PORT=process.env.port || 3000
const routes=require("./routes/TodoRouter")

app.use(cors());
app.use(express.json())
mongoose
 .connect(process.env.MONGODB_URL)
 .then(()=>console.log("MongoDB is connected"))
 .catch((err)=>console.log(err))

 app.use("/api", routes);


app.listen(PORT,()=>
console.log("Server is running")
)
