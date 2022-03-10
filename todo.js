//selectors
let todoInput = document.querySelector(".input");
let todoBtn = document.querySelector(".todo-create");
let todoUl = document.querySelector(".todo-list");


//event listeners
todoBtn.addEventListener("click", addToDo);
todoUl.addEventListener("click", deleteItem);


//functions
function addToDo(e){
    e.preventDefault();

    //create todoDiv li complete-btn delete-btn and append
    let todoDiv = document.createElement("div");

    let todoLi = document.createElement("li");
    todoLi.innerText = todoInput.value;
   //then refresh input value
    todoInput.value = "";

    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = `<i class="fas fa-check"></i>`;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`

    //add classes to newly created elements
    todoDiv.classList.add("todo-div");
    todoLi.classList.add("todo-list-item");
    completeBtn.classList.add("complete-btn");
    deleteBtn.classList.add("delete-btn");
    
    //append elements to todoDiv
    todoDiv.appendChild(todoLi);
    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(deleteBtn);

    todoUl.append(todoDiv);
}

function deleteItem(e){
    const item = e.target;
    //for delete btn
    if(item.classList[0] === "delete-btn"){
        const itemToRemove = item.parentElement;
        itemToRemove.classList.add("remove-transition");
        //take time for transition before remove
        itemToRemove.addEventListener("transitionend", function(){
            itemToRemove.remove();
        })
    }

    //for complete btn
    if(item.classList[0] === "complete-btn"){
        const completedItem = item.parentElement;
        completedItem.classList.toggle("completed-item");
    }
}