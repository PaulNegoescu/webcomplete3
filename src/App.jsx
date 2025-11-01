import { BrowserRouter, Route, Routes } from "react-router";
import { TodoList } from "./features/Todos/TodoList";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="todos" element={<TodoList />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
