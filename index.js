const express = require("express");
const db = require("./server/databaze/databaze");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("./server/uploads"));

// express.static(path.join(__dirname, 'public'))
// require('dotenv/config');

const getRouter = require("./server/routers/get-routs");
const postRouter = require("./server/routers/post-routs");
const putRouter = require("./server/routers/put-routs");
const deleteRouter = require("./server/routers/delete-routs");

app.use(getRouter);
app.use(postRouter);
app.use(putRouter);
app.use(deleteRouter);

app.listen(8080, () => console.log("Listening on port 8080...."));
