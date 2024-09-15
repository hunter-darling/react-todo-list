export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    // key tells React which element is being acted on, not needed now that this has been broken out into it's own component
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
