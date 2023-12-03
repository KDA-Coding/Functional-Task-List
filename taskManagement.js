document.getElementById('addTaskBtn').addEventListener('click', function(){
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if(taskInput.value.trim() !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;

        //Add ability to mark tasks as completed
        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');

            newTask.append().toggle(" - Completed!")

            
        });

        //Add ability to delete tasks
        newTask.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            newTask.remove();
        });

        taskList.appendChild(newTask);
        taskInput.value="";
    }
    else {
        alert('Please Enter a Task!');
    }
});