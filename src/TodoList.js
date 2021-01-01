import useTodos from './useTodos';

export default function TodoList() {
  const todos = useTodos();

  return (
    <ul>
      {todos.map(todo => (
        <li>{todo.name}</li>
      ))}
    </ul>
  );
}
