
let tasks = [
  { id: 1, text: "Check the rover battery", done: false },
  { id: 2, text: "Review the Mars landing map", done: true },
  { id: 3, text: "Brief Rania on the launch plan", done: false }
];

let nextId = 4;


const taskform=document.getElementById("task-form");
const taskinput=document.getElementById("task-input");
const tasklist=document.getElementById("task-list");
const count=document.getElementById("counter");
const emptymess=document.getElementById("empty-msg");
const clear=document.getElementById("clear-done");



/////////////////////////



 function renderTasks() {
    tasklist.innerHTML = "";

    for (let task of tasks) {

        let button = document.createElement("button");
        button.textContent = "Delete";
        button.classList.add("delete-btn");

        let li = document.createElement("li");
        li.dataset.id = task.id;

        let span = document.createElement("span");
        span.textContent = task.text;
        span.classList.add("task-text");

        li.appendChild(span);
        li.appendChild(button);

        if (task.done === true) {
            li.classList.add("done");
        }

        tasklist.appendChild(li);
    }

    updateCounter();
}



renderTasks();



function  updateCounter(){
            let counter=0;

    for(let i=0;i<tasks.length;i++){
        if(tasks[i].done==false){
            counter++;
        }
    }

    count.textContent= counter+" task(s) remaining";

    if(tasks.length==0){
        emptymess.classList.remove("hidden")
    }
    else{

                emptymess.classList.add("hidden")

    }

}

taskform.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = taskinput.value.trim();
    if (name ==="") return;


    const newTask = {
        id:nextId,
         text: name,
          done: false
         };


        tasks.push(newTask);
         nextId++;
         taskinput.value="";




         renderTasks();




});




clear.addEventListener("click", function() {

    let newArray = [];

    for (let task of tasks) {

        if (task.done === false) {
            newArray.push(task);
        }

    }

    tasks = newArray;

    renderTasks();
});
