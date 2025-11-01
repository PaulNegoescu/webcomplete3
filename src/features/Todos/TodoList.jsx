export function TodoList() {
  return (
    <>
      <h1>Todos</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" />{' '}
            Title
          </label>
        </li>
      </ul>
    </>
  );
}

// RESTful Web Api/Service (REpresentational State Transfer)
// Resources:
//    users, todos
// Entity: 
//     1 user, 1 todo, (id) (resource)
// Endpoint:
// http://localhost:3000/todos/:id

// Request (CRUD)
// GET    /todos   -> List of all todos
// GET    /todos/1 -> The todo with an ID of 1
// POST   /todos   -> Creates a new todo with the data form the request body
// PUT    /todos/1 -> Replaces the todo at the ID of 1 with the data in the request body
// PATCH  /todos/1 -> Updates the todo at the ID of 1 with the partial data from the body
// DELETE /todos/1 -> Deletes the todo with an ID of 1

// Create        -> POST
// Read/Retrieve -> GET
// Update        -> PUT/PATCH
// Delete        -> DELETE

// Response
// 200 - OK
// 201 - Created (as a response to POST) -> Response contains the entity that was created

// 3XX - Redirects

// 4XX - Client Errors
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Not Allowed
// -
// 405 - Method Not Allowed
// 418 - I'm a teapot

// 5XX - Server Errors
// 500 - Internal Server Error
// 502 - Bad Gateway
