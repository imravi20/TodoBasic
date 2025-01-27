const express = require("express");
const app = express();
const cors=require("cors");
require("dotenv").config();
const { zodSchemaA, zodSchemaB } = require("./zodVerify.js");
const { todos } = require("./db.js");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("ok");
});

app.post("/addTodos", async (req, res) => {
  const input = req.body;
  const inputValidation = zodSchemaA.safeParse(input);
  if (!inputValidation.success) {
    return res.status(403).json({ msg: "wrong input format" });
  }
  await todos.create({
    title: input.title,
    description: input.description,
    completed: false,
  });
  res.status(200).json({ msg: "todo added" });
});

app.get("/getTodos", async (req, res) => {
  const getTodo = await todos.find();
  res.json({ todos: getTodo });
});

app.put("/updateTodos/:id", async (req, res) => {
  const id = req.params.id;
  const idValidation = zodSchemaB.safeParse(id);
  if (!idValidation.success) {
    return res.status(403).json({ msg: "wrogn input format" });
  }
  await todos.updateOne(
    {
      _id: id,
    },
    {
      completed: true,
    }
  );
  res.json({ msg: "updated" });
});

app.listen(port, () => {
  console.log(`server running on port no ${port}`);
});
