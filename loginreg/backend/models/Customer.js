const mongoose=require('mongoose');
const CustSchema=new mongoose.Schema({
    username:String,
    email:String,
    passwd:String
})
    const CustModel=new mongoose.model('credential',CustSchema)
    module.exports=CustModel