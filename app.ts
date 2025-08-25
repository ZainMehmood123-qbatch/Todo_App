interface Todo{
    id:number,
    title:string,
    isComplete:boolean
}

let todoArr:Todo[]=[]

// Add Func
function addTodo(title:string):void{
    const newTodo:Todo={
        id:todoArr.length+1,
        title,
        isComplete:false
    }
    todoArr.push(newTodo)
    console.log("New Todo added Successfully.")
}

// List of All Todos
function todoList():void{
  console.log("List of All Todos")
  if(todoArr.length==0){
console.log("No todos are available, please add first.")
  }
  todoArr.forEach(t =>{
    console.log(`${t.id}. ${t.title} [${t.isComplete ? "Completed" : "NotCompleted"}]`)
  })
}

// Mark Complete
function markDone(id:number):void{
  let todo = todoArr.find(t => t.id === id);
    if (todo) {
        todo.isComplete = true;
        console.log(`Todo ${id} marked as complete.`);
    } else {
        console.log(`Todo with ID ${id} not found.`);
    }
}


addTodo("First todo")
addTodo("second todo")
todoList()
markDone(2)
markDone(4)
addTodo("3rd todo")
todoList()
