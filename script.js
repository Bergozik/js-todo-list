function addTask() {
    const task = document.getElementById('task').value;
    if (task === '') {
        alert('Please enter a task');
        return;
    }
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById('taskList').appendChild(li);
    document.getElementById('task').value = '';
}
