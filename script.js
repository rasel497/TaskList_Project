
//Define UI element

let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');


//Define event listerner
form.addEventListener('submit', addTask);

taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);



//Define function
//Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a Task!');

    } else {
        //Create li element

        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link =document.createElement('a');
        link.setAttribute("herf", "#");
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);

        //local storage
        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = '';

    }
    e.preventDefault();
}


//Remove task L14

function removeTask(e){
    if(e.target.hasAttribute("herf")){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
            //console.log(ele);
            removefromLS(ele); //


        }
    }
}


//clear Task L15

function clearTask(e){
   // taskList.innerHTML = "";

   //faster
   while(taskList.firstChild){
       taskList.removeChild 
   }
   localStorage.clear();
}

//filterTask

function filterTask(e){
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!= -1) {
            task.style.display = 'block';

        }else{
            task.style.display = 'none';
             
        }
    });

}


//storage in Local storage----check console+storage


function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks= JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
 
}

//DOM
function getTasks() {
    
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks= JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {

           //Create li element
           let li = document.createElement('li');
           li.appendChild(document.createTextNode(task + " "));
           let link =document.createElement('a');
           link.setAttribute("herf", "#");
           link.innerHTML = 'x';
           li.appendChild(link);
           taskList.appendChild(li);

    });
}

function removefromLS(taskItem){
     
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else {
        tasks= JSON.parse(localStorage.getItem('tasks'));
    }

    let  li = tasksItem;
    li.removeChild(li.lastChild); //<a></a>

    tasks.forEach((task, index)  =>{
        if(li.textContent.trin() === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('task', JSON.stringify(tasks));


}