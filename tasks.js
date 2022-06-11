
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