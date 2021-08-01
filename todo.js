const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist =  document.querySelector('.todo-list');


document.addEventListener('DOMContentLoaded', gettodos)
todobutton.addEventListener('click', addTodo);
todolist.addEventListener('click', deletecheck);

//FUNCTIONS
function addTodo(event) {
 event.preventDefault();
 //DIV
 const tododiv = document.createElement('div');
 tododiv.classList.add("tododiv");
 //Create li

 const newtodo = document.createElement('li');
 newtodo.innerText = todoinput.value;
 newtodo.classList.add('todo-item');
 tododiv.appendChild(newtodo);
// add todo to localstorage
saveLocaltodos(todoinput.value);
 //Create buttons

 const completebtn = document.createElement('button');
 completebtn.innerHTML  = '<i class="fas fa-check"></i>';
 completebtn.classList.add('complebtn');
 tododiv.appendChild(completebtn);
 //Create trash button

 const trashbtn = document.createElement('button');
 trashbtn.innerHTML  = '<i class="fas fa-trash"></i>';
 trashbtn.classList.add('trashbtn');
 tododiv.appendChild(trashbtn);


 //APPEND TO LIST

 todolist.appendChild(tododiv)
 todoinput.value= '';
}


function deletecheck(e) {
 const item = e.target;
 if(item.classList[0] === 'trashbtn'){
     const todo = item.parentElement;
     removelocalstorage(todo)
     todo.remove();
 }
 if(item.classList[0] === 'complebtn'){
     const todo = item.parentElement;
     todo.classList.toggle('completed');
 }
}


function saveLocaltodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
}else {
    todos = JSON.parse(localStorage.getItem('todos'));
}
todos.push(todo);
localStorage.setItem('todos', JSON.stringify(todos))
}
  


function gettodos(){

    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
}else {
    todos = JSON.parse(localStorage.getItem('todos'));
}


todos.forEach(function(todo) {

    const tododiv = document.createElement('div');
 tododiv.classList.add("tododiv");
 //Create li

 const newtodo = document.createElement('li');
 newtodo.innerText = todo;
 newtodo.classList.add('todo-item');
 tododiv.appendChild(newtodo);

 //Create buttons

 const completebtn = document.createElement('button');
 completebtn.innerHTML  = '<i class="fas fa-check"></i>';
 completebtn.classList.add('complebtn');
 tododiv.appendChild(completebtn);
 //Create trash button

 const trashbtn = document.createElement('button');
 trashbtn.innerHTML  = '<i class="fas fa-trash"></i>';
 trashbtn.classList.add('trashbtn');
 tododiv.appendChild(trashbtn);


 //APPEND TO LIST

 todolist.appendChild(tododiv)
});


}



function removelocalstorage(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
}else {
    todos = JSON.parse(localStorage.getItem('todos'));
}

const todoindex = todo.children[0].innerText;
todos.splice(todos.indexOf(todoindex), 1);
localStorage.setItem("todos", JSON.stringify(todos));
}