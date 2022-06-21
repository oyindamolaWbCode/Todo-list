const toggler = document.getElementsByClassName("toggler");
console.log(toggler);

const todoCheck = document.getElementsByClassName("todo-check");
console.log(todoCheck);

const todoText = document.getElementsByClassName("todo-text");

const time = document.getElementById("time");

const active = document.getElementById("active");
const complet = document.getElementById("complete");
const all = document.getElementById("all");

const finish = document.getElementById("exit");

window.addEventListener('load', () =>{
  const form = document.querySelector('.text-section');
  const input = document.querySelector('.text-section input');
  const confirm = document.querySelector('.text-section button');
  const inputEl = document.querySelector('.mylist');

})
    document.querySelector('#submit').onclick = function(){
        if(document.querySelector('.text-section input').value.length == 0){
            alert("Please, Enter a task...")
        }else{
           document.querySelector('.mylist').innerHTML +=`
           <div class="mylist">
           <input type="checkbox" class="todo-check">
           <p>${document.querySelector('.text-section input').value}</p>
           <div class="delete">
            <img src="./images/icon-cross.svg">
            </div>
            
            <br>
          `;
            
          var current_list = document.querySelectorAll('.delete');
          for(var i=0; i<current_list.length; i++){
            current_list[i].onclick = function(){
                this.parentNode.remove();
        }
    }

      document.querySelector('.text-section input').value = "";
}
    }