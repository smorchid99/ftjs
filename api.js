// api.js

/**
 * Récupère des suggestions de tâches depuis l'API JSONPlaceholder.
 * @returns {Promise<Array>} Un tableau d'objets contenant les suggestions.
 */
export async function fetchSuggestions() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      if (!response.ok) {
        throw new Error('Erreur réseau lors de la récupération des suggestions.');
      }
      const suggestions = await response.json();
      return suggestions;
    } catch (error) {
      console.error('Erreur dans fetchSuggestions :', error);
      throw error;
    }
  }