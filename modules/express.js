//const app = require("express");
const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use((req, resp, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

const port = 8080;

app.listen(port, () => console.log(`Express listening on port ${port}!`));

app.get("/home", (req, resp) => {
  resp.contentType("text/html");
  resp.status(200).send("<h1>Hello World!</h1>");
});

app.get('/views/users', async (req, resp) =>{
  const users = await UserModel.find({});
  resp.render('index', {users} )
});

app.get("/users", async (req, resp) => {
  try {
    const users = await UserModel.find({});
    resp.status(200).json(users);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, resp) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    resp.status(200).json(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.post("/users", async (req, resp) => {
  try {
    const user = await UserModel.create(req.body);
    resp.status(201).json(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, resp) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    resp.status(200).json(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, resp) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    resp.status(200).json(user);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});
