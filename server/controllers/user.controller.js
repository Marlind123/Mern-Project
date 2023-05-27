const Any=require("../models/user.model")

module.exports.findAll=(req,res)=>{
    Any.find()
    .then((list)=>res.json({list}))
    .catch((err)=>console.log(err))
}

module.exports.findOne=(req,res)=>{
    Any.findOne({_id:req.params.id})
    .then((list)=>res.json({list}))
    .catch(err=> {
        console.log(err)
        res.json(err)})
}

module.exports.createOne=(req,res)=>{
    Any.create(req.body)
    .then((list)=>res.json({list}))
    .catch((err)=>{
        console.log(err)
        res.status(400).json(err)})
}

module.exports.UpdateOne=(req,res)=>{
    Any.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((list)=>res.json({list}))
    .catch((err)=>{
        console.log(err)
        res.json(err)})
}

module.exports.deleteOneAuthor=(req,res)=>{
    Any.deleteOne({_id:req.params.id})
    .then((list)=>res.json({list}))
    .catch((err)=>{
        console.log(err)
        res.json(err)})
}
