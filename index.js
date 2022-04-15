const express = require("express")
const db = require("./databaze/databaze");

const app = express()
app.use(express.json());

// require('dotenv/config');


  


  


const getRouter = require("./routers/get-routs")
const postRouter = require("./routers/post-routs")
const putRouter = require("./routers/put-routs")
const deleteRouter = require("./routers/delete-routs")


app.use(getRouter)
// app.use(postRouter)
// app.use(putRouter)
// app.use(deleteRouter)



         app.listen(8080, () => console.log("Listening on port 8080...."));