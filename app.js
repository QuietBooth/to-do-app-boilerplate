// input tag
var inputText = document.querySelector("#input")
// Add Button tag
var button = document.querySelector("#button")

// Todo list
var todolistTag = document.querySelector("#todolist")

//& array to store all todo elements , initially empty 
var todoArr = []

// When Add button is Clicked 
button.addEventListener("click" , addItemToArr)

//If input is on FOCUS and Enter is Clicked  addItemToArray should be called to add element to array
inputText.addEventListener("keypress",(event)=>{
    //EXTRA -> event.target.value==inputText.value
    if(event.key=="Enter"){
        addItemToArr()
    }
})

function addItemToArr (){
    //push the value to array , if its not an empty string 
    if(inputText.value!=""){
        todoArr.push(inputText.value)
    }

    // reset the value too empty string ""
    inputText.value=""

    display()
}

function display(){
    //Clear out previous old ones everytime we add one item to array and display it
    todolistTag.innerHTML = "";
    todoArr.map((curr,i)=>{
        // structure of li tag
        var listItem = `<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})"> &times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
    </li>`;
// insert it inside <ul id="todolist">
    todolistTag.innerHTML += listItem
    });
}

function deleteItem(i){

    // delete the element(index) from todoArr 
    todoArr.splice(i,1);
    display();
}

function editItem(i){
    var newValue = prompt("Please EDIT")
    todoArr.splice(i,1,newValue);

    display();
}

// reset the todo list
document.getElementById("reset").addEventListener("click",()=>{
    todoArr = []
    display()
})
