import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';



function TaskItem({task,ondelete, onEdit, ontoggleComplete }) {
  console.log('Tâche reçue dans TaskItem :', task);
  
  
  return (
    
     
     <tr className={`task-item ${task.completed ? 'completed' : 'active'}`}>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{task.description}</td>
      <td>
        <Button  variant="success" onClick={() => onEdit(task)} /* Appeler onEdit avec la tâche sélectionnée */>Modifier</Button>
        <Button  variant="danger" onClick={ondelete}>Supprimer</Button>
        <Button onClick={ontoggleComplete}>{task.completed ? 'Mark Incomplete' : 'Mark Complete'}</Button>
        
      </td>
    </tr>
    
 

    
  )
}

export default TaskItem