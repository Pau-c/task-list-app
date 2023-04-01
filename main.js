const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const noTasks = document.querySelector(".noTasks");

const btnDeleteHistory = document.querySelector(".btn-delete-history");
const showHistory = document.querySelector(".historyList");


//shows task history. the history var is a string with all the items saved in localstorage separated by a comma
window.addEventListener("load", (e) => {
   let history = localStorage.getItem("historyItems");
   if(history!==null)   {
     const arr = history.split(','); 
     arr.forEach(element => {
      const li = document.createElement("li");
      li.classList.add("draggable");
      li.draggable="true";
  const p = document.createElement("p");
  p.className="paragraph";
  p.textContent = element;

  li.appendChild(p);
  showHistory.appendChild(li);
  li.appendChild(addDeleteBtn());
     });} else{
    noTasks.textContent = "No tiene tareas pendientes";
   }

});

addBtn.addEventListener("click", (e)=>{e.preventDefault();
const text = input.value;

    function store() {//stores items in the localStorage
      
     
      let history = localStorage.getItem("historyItems");

    
      history = history ? history.split(",") : [];

      if(text!=="") {history.push(text)}

      localStorage.setItem("historyItems", history.toString());
    }
    
    store();
//shows element that was just added to storage on screen

if (text !== ""){

  const li = document.createElement("li");
  const p = document.createElement("p");
  p.className="paragraph";
  p.textContent = text;

  li.appendChild(p);
  ul.appendChild(li);
  li.appendChild(addDeleteBtn());

  input.value = "";
  empty.style.display = "none";

}

}); 



//borrar todo el historial
btnDeleteHistory.addEventListener("click", (e)=>{e.preventDefault();
  function clearStorage(){ 
  localStorage.clear()  
}
clearStorage()
window.location.reload()
}); 



function addDeleteBtn () {

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";



  deleteBtn.addEventListener("click", (e)=>{


function modifyHistory() {//deletes items in the localStorage
  
    const parentElement = e.target.parentElement;
    let element = parentElement.querySelector("p"); 

const text= element.textContent;

  // Get  data
  let history = localStorage.getItem("historyItems");

  //  convert the localStorage string to an array, otherwise create an array
  history =  history.split(",") ;

  // looks for the text in the localStorage array 
  let newArr = history.filter(
    el => el !=text);
    console.log("newarr",newArr)

  // Save back to localStorage
  localStorage.setItem("historyItems", newArr.toString());
}

modifyHistory();
//borrar li de la pantalla
const parent = e.target.parentElement;

  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }

  parent.remove()

  });
 
  return deleteBtn;

}
