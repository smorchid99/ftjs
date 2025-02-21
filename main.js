// main.js
import { initTasks, addTask } from './tasks.js';
import { fetchSuggestions } from './api.js';

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

  // Récupérer des suggestions depuis l'API et les ajouter à la liste
  fetchSuggestions()
    .then(suggestions => {
      suggestions.forEach(item => {
        // Utilise la propriété "title" comme texte de la tâche
        addTask(item.title, taskList);
      });
    })
    .catch(error => {
      // Affiche un message d'erreur en cas d'échec de l'appel API
      const container = document.querySelector('.container');
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = "Erreur lors du chargement des suggestions de tâches. Veuillez réessayer plus tard.";
      container.prepend(errorMessage);
    });
});
