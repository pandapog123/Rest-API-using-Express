const express = require("express");
const router = express.Router();
const { users } = require("./data");

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:user_index", (req, res) => {
  let userRef = users[req.params.user_index];

  if (userRef == null) {
    res.send(`Cannot Find User of Index ${req.params.user_index}`);

    return;
  }

  res.send(userRef);
});

router.get("/:user_index/:user_param", (req, res) => {
  let userRef = users[req.params.user_index];

  if (userRef == null) {
    res.send(`Cannot Find User of Index ${req.params.user_index}`);

    return;
  }

  let userParamValue = userRef[req.params.user_param];

  if (userParamValue == null) {
    res.send(
      `Cannot Find Value of ${req.params.user_param} In User on Index ${req.params.user_index}`
    );
  }

  res.send(userParamValue);
});

router.get("/:user_index/todos/:todo_index", (req, res) => {
  let userRef = users[req.params.user_index];

  if (userRef == null) {
    res.send(`Cannot Find User ${req.params.user_index}`);

    return;
  }

  let todoRef = userRef.todos[req.params.todo_index];

  if (todoRef == null) {
    res.send(
      `Cannot Find Todo of Index ${req.params.todo_index} In User of Index ${req.params.user_index}`
    );
  }

  res.send(todoRef);
});

router.get("/:user_index/todos/:todo_index/:todo_param", (req, res) => {
  let userRef = users[req.params.user_index];

  if (userRef == null) {
    res.send(`Cannot Find User of Index ${req.params.user_index}`);

    return;
  }

  let todoRef = userRef.todos[req.params.todo_index];

  if (todoRef == null) {
    res.send(
      `Cannot Find Todo of Index ${req.params.todo_index} For User ${req.params.user_index}`
    );
    return;
  }

  let todoParamValue = todoRef[req.params.todo_param];

  if (todoParamValue == null) {
    res.send(
      `Cannot Find Value ${req.params.todo_param} For Todo of Index ${req.params.todo_index} For User ${req.params.user_index}`
    );
    return;
  }

  res.send(todoParamValue);
});

module.exports = router;
