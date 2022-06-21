const toggler = document.getElementsByClassName("toggler");
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
const todo_delete_el = document.querySelector('.delete');
const body =document.querySelector('body');

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
     <img src="./images/icon-cross.svg">
     </div>
     </div>

    `
    input.value = ""

    console.log("input")
}

//delete todo

var current_list = document.querySelectorAll('.delete');
          for(var i=0; i<current_list.length; i++){
            current_list[i].onclick = function(){
                this.parentNode.remove();
        }
    }

    document.querySelector('.text-section input').value = "";

// todo_delete_el.addEventListener("click", () =>{
//     delete_el.removeChild(mylist);

// });

// container.addEventListener("click",removeTodo)

// function removeTodo(e){
//   if(e.target.classList.contains('delete')){
//     console.log(e.target);
//      e.target.parentElement.remove()
//      console.log(e.target.parentElement)
// } 

// }

































//  document.querySelector('#submit').onclick = function(){
//  if(document.querySelector('.text-section input').value.length == 0){
//             alert("Please, Enter a task...")
//         }else{
//            document.querySelector('.mylist').innerHTML +=`
//            <div class="mylist">
//            <input type="checkbox" class="todo-check">
//            <p>${document.querySelector('.text-section input').value}</p>
//            <div class="delete">
//             <img src="./images/icon-cross.svg">
//             </div>

//             <br>
//           `;
            
//           var current_list = document.querySelectorAll('.delete');
//           for(var i=0; i<current_list.length; i++){
//             current_list[i].onclick = function(){
//                 this.parentNode.remove();
//         }
//     }

//       document.querySelector('.text-section input').value = "";
// }
//     }