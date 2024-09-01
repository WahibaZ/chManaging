import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

function TaskForm({ addTasks, editTask,  onUpdateTask}) {

  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  //**************** // Utiliser useEffect pour remplir le formulaire en mode édition********************************* */
  useEffect(() => {
    if (editTask) {
      setName(editTask.name);
      setDescription(editTask.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [editTask]);

 
//********************** handleSubmit*******************************************************************************************/
  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name || !description) {
      setError('Les deux champs doivent être remplis.');
      console.log('Erreur de saisie', error);

    } else {
      if (editTask) {
        onUpdateTask({ ...editTask, name, description });
      } else {
        addTasks({ name, description });
      }
      handleCancel();
    }
  };
  //********************handleCancel************************************************************************************************* */
  const handleCancel = () => {
    // Réinitialiser les champs de saisie
    setName('');
    setDescription('');
    setError('');
    console.log('Formulaire réinitialisé');
  };
//************************************************************************************************************** */
  return (
    <div>
      <h1>ToDoList</h1>
      <form className="taskform" onSubmit={handleSubmit}>
        <label>
          Tâche
          <input
            type="text"
            placeholder="Saisir le nom de la tâche ici"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description
          <textarea
            placeholder="Saisir la description de la tâche ici"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <Button variant="primary" type="submit" >{editTask ? 'Modifier la tâche' : 'Ajouter la tâche'}</Button>
        <Button variant="secondary" type="button" onClick={handleCancel}>Annuler</Button>
        

      </form>
    </div>
  );
}

export default TaskForm;
