import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */
//TODO: later down the line, mock a todos object state to test reduce function
function TopTodo({ todos }) {
  // lowest-priority # is the highest priority

  let top = todos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);

  return <Todo  {...top} />;
}

export default TopTodo;