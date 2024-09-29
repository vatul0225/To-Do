function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('Please enter a task');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function () {
        taskList.removeChild(newTask);
    };

    newTask.onclick = function () {
        newTask.classList.toggle('completed');
    };

    newTask.appendChild(deleteBtn);

    taskList.appendChild(newTask);

    taskInput.value = '';
}
