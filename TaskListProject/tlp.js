// Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){
  document.addEventListener('DOMContentLoaded', getTasks)
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask)
  clearBtn.addEventListener('click', clearTasks)
  filter.addEventListener('keyup', filterTasks)
}

function getTasks(){
  let tasks;
  if(localStorage.getItem('talks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task){
    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append li
    li.appendChild(document.createTextNode(task));
    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append the li to ul
    taskList.appendChild(li);
  })
}

//Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task')
  }

//Create li element
const li = document.createElement('li');
//Add class
li.className = 'collection-item';
//Create text node and append li
li.appendChild(document.createTextNode(taskInput.value));
//Create new link element
const link = document.createElement('a');
//Add class
link.className = 'delete-item secondary-content';
//Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//Append the link to li
li.appendChild(link);
//Append the li to ul
taskList.appendChild(li);

//Store in LS
storeTaskInLocalStorage(taskInput.value);


//Clear input
taskInput.value = ''
  e.preventDefault();
}

//Store task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('talks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')){
    e.target.parentElement.parentElement.remove();
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('talks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(){
  taskList.innerHTML = '';

  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}

function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block'
    }else{
      task.style.display = 'none'
    }
  })
}
