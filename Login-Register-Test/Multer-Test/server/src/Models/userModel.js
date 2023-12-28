import mongoose from "mongoose";


const {Schema} = mongoose

const userSchema = new Schema({
    username:{type:String, unique:true, required:true},
    password:{type:String,required:true},
    role:{type:String,required:true},
    basket:[{type:String}],
    wishlist:[{type:String}],
})

export const Users = mongoose.model('User',userSchema)
