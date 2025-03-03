
import { initTasks, addTask } from './tasks.js';


document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  // Initialiser les tâches sauvegardées
  initTasks(taskList);

  // Gestion de la soumission du formulaire pour ajouter une nouvelle tâche
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText, taskList);
      taskInput.value = '';
    }
  });


});
