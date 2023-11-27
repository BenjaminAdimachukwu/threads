import mongoose from "mongoose";
import { boolean, string } from "zod";

const userschema = new mongoose.Schema({
    id: {type:String, required:true},
    username: { type:String, required: true, unique: true },
    name: { type:String, required: true  },
    image: String,
    bio: String,
    threads: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Threads'
        }
    ],
    onboarded :{
        type: Boolean,
        default: false
    },

    communities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community'
            }
    ]

})

const User = mongoose.models.User || mongoose.model('User', userschema)
export default User