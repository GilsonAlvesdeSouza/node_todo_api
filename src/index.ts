import { Todo } from "./database/models/Todo";
import { ListTodo } from "./database/models/ListTodo";

(async () => {
  // const novoTodo = await Todo.create({
  //   name: "Lista de compras",
  // });

  const novoTask = await ListTodo.create({
    todo_id: 1,
    title: "Embrenhagem",
    description: "comprar embrenhagem",
  });
})();
