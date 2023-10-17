const todos: string[] = ["Learn React"];

export default function Home() {
  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold">Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}
