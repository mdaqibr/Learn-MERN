console.log("Project 01: Learn about the restful APIs.")

const express = require("express");
const app = express();
const PORT = 8000;

const users = require("./data/USERS.json")

app.get("/users", (req, res) => {
  return res.json(users);
})

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  user = users.find((user) => user.id == userId);
  return res.json(`You have requested for user: ${ user.first_name } ${ user.last_name }`);
})

app.delete("/users/:id", (req, res) => {
  return res.json({ status: "Pending" });
})

app.patch("/users/:id", (req, res) => {
  return res.json({ status: "Pending" });
})

// As we can see above the route is repeating:
// So we can do this -

/*
app
  .route("/users/:id")
  .get((req, res) => {

  })
  .patch((req, res) => {

  })
  .delete((req, res) => {

  })
*/

app.listen(PORT, () => console.log(`Server started on ${ PORT } port.`))

