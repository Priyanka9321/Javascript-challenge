const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

let tasks = [];
let editingIndex = null;

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    
    if (editingIndex !== null) {
        // Update existing task
        tasks[editingIndex] = { title, description, dueDate };
        editingIndex = null;
    } else {
        // Create new task
        tasks.push({ title, description, dueDate });
    }
    
    taskForm.reset();
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p><strong>Due Date:</strong> ${task.dueDate}</p>
            </div>
            <div>
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;
    editingIndex = index;
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Initial render
renderTasks();
