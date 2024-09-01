import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';


function App() {

  const [tasks, setTasks] = useState([]);
  const [editingTask , setEditingTask]=useState(null);// contiendra l'objet a editer

 // ***********************Charger les tâches de localStorage au démarrage**************************************************************************
 useEffect(() => {
  try {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Tâches chargées depuis localStorage :', savedTasks);
    setTasks(savedTasks);
  } catch (error) {
    console.error('Erreur lors du chargement des tâches depuis localStorage:', error);
  }
}, []);


  // *******************Sauvegarder les tâches dans localStorage chaque fois qu'elles changent*************************************
  useEffect(() => {
    try {
      console.log('Tâches avant sauvegarde dans localStorage :', tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('Tâches sauvegardées dans localStorage :', JSON.parse(localStorage.getItem('tasks')));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des tâches dans localStorage:', error);
    }
  }, [tasks]);
  
//**************************ajouter************************************************************************************************* */
  /* const handleAddTask = (task) => {
    console.log('Tâche ajoutée :', task);
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };
 */
  const handleAddTask = (task) => {
    console.log('Tâche ajoutée :', task);
    setTasks(prevTasks => [...prevTasks, { ...task, id: Date.now(), completed: false }]);
  };

  //*****************supprimer****************************************************************************************** */
  const deleteTask=(id)=>{
    if (window.confirm('Are you sure you want to delete this task?'))
   { setTasks(tasks.filter(task=>task.id !== id))}
  }
 //********************update************************************************************************************************ */
//pour modifier il faut entrer en mode edition avant:
const handleEditTask = (task) => {
  setEditingTask(task); // Définir la tâche à éditer
};
//update 
const handleUpdateTask = (updatedTask) => {
  setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  setEditingTask(null); // Réinitialiser l'état d'édition après la mise à jour
};

//***************************toggle****************************************************** */
const toggleComplete=(id)=>{
  setTasks(tasks.map(task=>(task.id===id ?{...task,completed:!task.completed}:task)))
}


  return (
    <div className="App">
      <TaskForm addTasks={handleAddTask}   
        editTask={editingTask} /* Passer la tâche à éditer au formulaire */ 
        onUpdateTask={handleUpdateTask}/>
      <TaskList tasks={tasks} ondeleteTask={deleteTask}  onEdit={handleEditTask}  ontoggleComplete={toggleComplete}
       /* Fournir la fonction d'édition à TaskList *//>
       
    </div>
  );
}

export default App;

