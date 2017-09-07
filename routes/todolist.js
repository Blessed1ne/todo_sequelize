const express = require("express")
const router = express.Router()
const models = require("../models")
models.todos.findOne().then(function(todo) {
  // console.log(todo);
});


router.get("/", function(req,res){
  models.todos.findAll().then(function(todos) {
  res.render("index", {
    todos: todos
    })
  });
});

router.post("/", function(req,res){

  const todo = models.todos.build({
    task: req.body.todo,
  })
  todo.save().then(function (newTodo) {
    res.redirect("/")
  })
})

// router.post("/completed", function (req, res) {
//   let remove = req.body.button
//   models.todos.destroyOne().then(function(remove){
//     res.redirect("/");
//   }
// }

router.post("/completed", function(req, res) {
  models.todos.destroy({
    where: {
      id: req.body.button
    }
  }).then(function(){
    res.redirect('/')
  })
})

router.post("/edit", function(req, res) {
  models.todos.update({
    task: req.body.edit,
  }, {
    where: {
      id: req.body.editButton
    }
  }).then(function(){
    res.redirect('/')
  })
})

module.exports = router
