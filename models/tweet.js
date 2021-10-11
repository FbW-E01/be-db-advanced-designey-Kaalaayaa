import  mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: String,
    created:Date,
    replyTo: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId
})

const Tweet = mongoose.model("tweets", tweetSchema)

export default Tweet