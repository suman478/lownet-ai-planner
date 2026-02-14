let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(){
  let list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(t=>{
    let li = document.createElement("li");
    li.textContent = t;
    list.appendChild(li);
  });
}

function addTask(){
  let input = document.getElementById("taskInput");
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value="";
  renderTasks();
}

function generatePlan(){
  let plan = document.getElementById("planList");
  plan.innerHTML="";
  
  let hour = 9;
  tasks.forEach(t=>{
    let li=document.createElement("li");
    li.textContent = `${hour}:00 - ${hour+1}:00 → ${t}`;
    hour++;
    plan.appendChild(li);
  });
}

renderTasks();
