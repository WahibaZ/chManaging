import React from 'react';
import TaskItem from './TaskItem';
import Table from 'react-bootstrap/Table';

function TaskList({ tasks, ondeleteTask, onEdit, ontoggleComplete }) {
  console.log('Tâches reçues dans TaskList :', tasks);
  return (
    <div>
    <Table striped bordered hover>
      <thead>
            <tr>
              <th>ID</th>
              <th>Tâche</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} ondelete={() => ondeleteTask(task.id)}  onEdit={onEdit} ontoggleComplete={() => ontoggleComplete(task.id)} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TaskList;
