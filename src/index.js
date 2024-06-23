document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById('create-task-form');
    const taskInput = document.getElementById('new-task-description');
    const taskList = document.getElementById('tasks');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting traditionally

        const taskDescription = taskInput.value.trim();

        if (taskDescription !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskDescription;
            taskList.appendChild(listItem);

            // Clear the input field after adding the task
            taskInput.value = '';
        }
    });
});
