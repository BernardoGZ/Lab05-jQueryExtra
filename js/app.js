//Bernardo Garcia Zermeno
//A00570682
//Laboratory #4: To Do List, 1st practice of Javascript basic functions

//Declare variables for buttons and managing areas
var btnPost = document.querySelector('.submitButton');
var btnClear = document.querySelector('.clearButton');
var btnMark = document.querySelector('.markAllButton');
var btnDelete = document.querySelector('.deleteButton');

var todoAreaText = document.querySelector('#todoText');
var todoList = document.querySelector('#listTodos');
var allTodos;
var todoText;
var i = 0;


//Events on buttons
btnPost.addEventListener("click", postTodo);
btnClear.addEventListener("click", clearTodo);
btnMark.addEventListener("click", markTodo);
btnDelete.addEventListener("click", deleteTodo);


//Functions

function postTodo(e){
    e.preventDefault();
    todoText = todoAreaText.value;
    todoList.innerHTML = todoList.innerHTML + '<p> <input type="checkbox" class="todos"> ' + todoText + "</p>" ;  
    todoAreaText.value = null;
}

function clearTodo(e){
    e.preventDefault();
    allTodos = document.querySelectorAll('.todos');    
    for (let i = 0; i < allTodos.length; i++) {
        allTodos[i].checked = false;        
    }    
}

function markTodo(e){
    e.preventDefault();
    allTodos = document.querySelectorAll('.todos');    
    for (let i = 0; i < allTodos.length; i++) {
        allTodos[i].checked = true;        
    }    
}

function deleteTodo(e) {
    e.preventDefault();
    todoList.innerHTML = null;
}

    







