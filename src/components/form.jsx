import React from "react";

export default function Form() {
  return (
    <div className="form">
      <h1>Your tasks for today:</h1>
      <input type="text" placeholder="Title"></input>
      <ul>
        <li>Tarefa1</li>
        <li>Tarefa2</li>
        <li>Tarefa3</li>
        <li>Tarefa4</li>
        <li>Tarefa5</li>
      </ul>
    </div>
  );
}
