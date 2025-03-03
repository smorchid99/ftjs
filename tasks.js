// tasks.js


let tasks = [];


export function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


export function loadTasks() {
  const tasksJSON = localStorage.getItem('tasks');
  tasks = tasksJSON ? JSON.parse(tasksJSON) : [];
  return tasks;
}

/**
 * Crée un élément de tâche (li) avec le texte et le bouton de suppression.
 * @param {string} taskText - Le texte de la tâche.
 * @returns {HTMLElement} L'élément li créé.
 */
export function createTaskElement(taskText) {
  const li = document.createElement('li');


  const span = document.createElement('span');
  span.textContent = taskText;


  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Supprimer';
  deleteBtn.classList.add('delete-button');

  
  deleteBtn.addEventListener('click', () => {
    removeTask(taskText, li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

/**
 * Ajoute une tâche à la liste dans le DOM et met à jour le stockage.
 * @param {string} taskText - Le texte de la tâche.
 * @param {HTMLElement} taskListElement - L'élément ul où ajouter la tâche.
 */
export function addTask(taskText, taskListElement) {
  if (taskText) {
    const li = createTaskElement(taskText);
    taskListElement.appendChild(li);
    tasks.push(taskText);
    saveTasks();
  }
}

/**
 * Supprime une tâche du DOM et met à jour le stockage.
 * @param {string} taskText - Le texte de la tâche à supprimer.
 * @param {HTMLElement} liElement - L'élément li correspondant.
 */
export function removeTask(taskText, liElement) {
  liElement.remove();
  tasks = tasks.filter(task => task !== taskText);
  saveTasks();
}

/**
 * Initialise l'affichage des tâches en chargeant celles sauvegardées.
 * @param {HTMLElement} taskListElement - L'élément ul où afficher les tâches.
 */
export function initTasks(taskListElement) {
  const savedTasks = loadTasks();
  savedTasks.forEach(taskText => {
    const li = createTaskElement(taskText);
    taskListElement.appendChild(li);
  });
}
