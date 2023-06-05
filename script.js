const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function() {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    localStorage.setItem('input', JSON.stringify(li))
    task.appendChild(li);

    let checkTask = document.createElement('button');
    checkTask.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkTask.classList.add('check-task');
    task.appendChild(checkTask);

    let removeTask = document.createElement('button');
    removeTask.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    removeTask.classList.add('remove-task');
    task.appendChild(removeTask);

    if(inputTask.value === ''){
        inputTask.placeholder = 'Please enter task';
    } else {
        taskContainer.appendChild(task)
    }
    inputTask.value = '';

    checkTask.addEventListener('click', function(){
        li.style.textDecoration = 'line-through'
    })
    removeTask.addEventListener('click', function(e){
        let target = e.target;

        target.parentElement.parentElement.remove();
    })
});