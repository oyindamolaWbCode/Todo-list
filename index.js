
//Grab the DOM
const toggler = document.querySelector(".toggler");
const todoCheck = document.getElementsByClassName("todo-check");
const todoText = document.getElementsByClassName("todo-text");
const time = document.getElementById("time");
const active = document.getElementById("active");
const complet = document.getElementById("complete");
const all = document.getElementById("all");
const clearAll = document.getElementById("exit");
const form = document.querySelector('.text-section');
const input = document.querySelector('.text-section input');
const confirm = document.querySelector('.text-section button');
const todo = document.querySelector('.mylist');
const submit = document.querySelector('#submit');
const container = document.querySelector('.container-mylist');
const del = document.querySelector('.delete');
const body =document.querySelector('body');
const card = document.querySelector('.card');
const img = document.querySelector("img")

//alert message when inputed not filled

document.querySelector('#submit').onclick = function(){
     if(document.querySelector('.text-section input').value.length == 0){
                alert("Please, Enter a task...")
                return;
      }
    }

// shows what should happen once the buuton is clicked.
submit.addEventListener("click", result)

// grabs input into the container
function result(){
    container.innerHTML += `

    <div class="mylist">
    <input type="checkbox" class="todo-check">
    <p>${input.value}</p>
    <div class="delete">
     <img src="./images/icon-cross.svg" class="cancel-img">
     </div>
     </div>

    `
    input.value = ""

    console.log("input")

    //delete todo
          var current_list = document.querySelectorAll('.delete');
          for(var i=0; i<current_list.length; i++){
            current_list[i].onclick = function(){
                this.parentNode.remove();
        }
    }
}

//refresh
localStorage.input = `
<div class="mylist">
    <input type="checkbox" class="todo-check">
    <p>${input.value}</p>
    <div class="delete">
     <img src="./images/icon-cross.svg" class="cancel-img">
     </div>
     </div>
`;

//retrieve
document.getElementsByClassName('container-mylist').innerHTML = localStorage.input

// let refreshPage = function(){
//    todoText.addEventListener('submit', (e) =>{
//   e.preventDefault();

// })

// }
//
//mark/check the todo when completed
function containerList(){
  container.delete()
  console.log("deleted");
}

//change of theme
//toggledark and togglelight
if(toggler === 'toggleDark'){
  document.querySelector(".toggler").addEventListener('click', toggleDark);
  

}else{
  document.querySelector(".toggler").addEventListener('click', toggleLight)
}
  
function toggleLight(){
  body.style.backgroundImage="url('./images/bg-desktop-light.jpg')";
  body.style.backgroundRepeat = 'no-repeat';
  toggler.src="./images/icon-moon.svg";
  body.style.backgroundColor='hsl(233, 11%, 84%)';
  container.style.backgroundColor='hsl(233, 11%, 84%)';
  document.querySelector('.toggler').addEventListener('click',toggleDark)
}


function toggleDark(){
  body.style.backgroundImage = 'url(./images/bg-desktop-dark.jpg)';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundSize ='contain';
  toggler.src="./images/icon-sun.svg";
  body.style.backgroundColor='black';
  document.querySelector('.toggler').addEventListener('click',toggleLight) 
  }



