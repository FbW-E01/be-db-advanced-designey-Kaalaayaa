import mongoose from 'mongoose'
import User from './models/user.js'
import Tweet from './models/tweet.js'

const mongoUser = "kalayaTweet"
const mongoPass = "password27"
const db = "twitter"

const connectionString = `mongodb://${mongoUser}:${mongoPass}@localhost:27017/${db}`

mongoose.connection.on('error', () => {console.log("err")})
mongoose.connection.on('connecting', () => {console.log("Connecting")})
mongoose.connection.on('connected', () => {
    console.log("Connected, inserting kalaya")
    const kalaya = new User({ name: "Kalaya", password:"password27", email: "kalaya@twitter.com", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere efficitur ex, a volutpat lectus vehicula et."})

    kalaya.save()
        .then(() => console.log("New user saved"))
        .catch((e) => console.log("Couldnt be saved:", e))

})

try {
    await mongoose.connect(connectionString)
}catch (e){}
