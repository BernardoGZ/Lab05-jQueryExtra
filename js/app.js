//Bernardo Garcia Zermeno
//A00570682
//Laboratory #4: To Do List, 1st practice of Javascript basic functions

//Declare variables for buttons and managing areas
var btnPost = $('.submitButton');
var btnClear = $('.clearButton');
var btnMark = $('.markAllButton');
var btnDelete = $('.deleteButton');

var todoAreaText = $('#todoText');
var todoList = $('#listTodos');
var allTodos;
var todoText;
var i = 0;


//Events on buttons
btnPost.on("click", postTodo);
btnClear.on("click", clearTodo);
btnMark.on("click", markTodo);
btnDelete.on("click", deleteTodo);


//Functions

function postTodo(e){
    e.preventDefault();
    todoText = todoAreaText.val();
    todoList.html(todoList.html() + '<p> <input type="checkbox" class="todos"> ' + todoText + "</p>") ;  
    todoAreaText.val(null);
}

function clearTodo(e){
    e.preventDefault();
    allTodos = $('.todos');    
    for (let i = 0; i < allTodos.length; i++) {
        allTodos[i].checked = false;        
    }    
}

function markTodo(e){
    e.preventDefault();
    allTodos = $('.todos');    
    for (let i = 0; i < allTodos.length; i++) {
        allTodos[i].checked = true;        
    }    
}

function deleteTodo(e) {
    e.preventDefault();
    todoList.html(null);
}

    







