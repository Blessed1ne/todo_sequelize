const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))

// const models = require("./models");
// models.todos.findOne().then(function(todo) {
//   console.log(todo);
// });
//
//
// const todo = models.todos.build({
//   task: 'Sequelize aint no joke',
// });
//
// todo.save().then(function (newTodo) {
//   console.log(newTodo.id);
// });

const todoRoute = require("./routes/todolist")
app.use(todoRoute)

app.listen(3000, function(req, res) {
  console.log("ROBOTS are listening on port 3000")
})
