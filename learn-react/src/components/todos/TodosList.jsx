function TodosList({ todos, dispatch }) {
  const handleRemove = (e, id) => {
    e.stopPropagation();

    if (window.confirm("삭제하시겠습니까?"))
      dispatch({ type: "REMOVE_TODO", id });
  };

  const handelToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && " line-through" }}
            onClick={() => handelToggle(todo.id)}
          >
            {todo.text}
            <button onClick={(e) => handleRemove(e, todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosList;
