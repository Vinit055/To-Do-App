const inputElement = document.querySelector('#text');
const dateElement = document.querySelector('#date');
let dateValue = dateElement.value;
const listContainer = document.querySelector('#list-container');

function addTo() {
  if(inputElement.value === '' || dateValue === null){
    alert('Add Task and Deadline');
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputElement.value;
    listContainer.appendChild(li);
    let date = document.createElement('p');
    date.innerHTML = dateElement.value;
    li.appendChild(date);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7'
    li.appendChild(span);
  }
  inputElement.value = '';
  dateElement.value = '';
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();