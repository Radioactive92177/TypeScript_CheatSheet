// function showTodo(todo: { title: string; text: string }) {
//   console.log(todo.title + " " + todo.text);
// }
var showTodo = function (todo) {
    console.log(todo.title + " " + todo.text);
};
var myTodo = { title: "Trash", text: "Take out trash" };
showTodo(myTodo);
