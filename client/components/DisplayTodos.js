import React from 'react';
import { Table, thead, tr, th, tbody, td, Jumbotron } from 'react-bootstrap';
// import CompleteTodoBtn from './CompleteTodoBtn'

const DisplayTodos = ({ todos, completeTodo }) => (
  <div>
    {todos && todos.length > 0 ? (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, id) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{todo[0]}</td>
              <td>{todo[1]}</td>
              {/* <td><button onClick={invoke completeTodo method with right arguments} /></td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    ) : (
      <div>
        <Jumbotron>
          <h1>No todos! </h1>
          <p>
            You either don't have any todos yet or are not passing an array of
            todos to the DisplayTodos Component
          </p>
        </Jumbotron>
      </div>
    )}
  </div>
);

export default DisplayTodos;
