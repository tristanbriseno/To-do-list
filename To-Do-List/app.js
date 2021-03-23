const clear = document.quarySelector("clear");
const input = document.getElementById("input");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//shows todays date//
const options = {weekday : "long", month : "short", day : "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocalDateString("en-US", options);


function addToDo(toDo){

    const item = `<li class="item">
                    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                    <p class="text linethrough">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="0">delete</i>
                   </li>
                 `;
    const position = "beforeend";
    list.insertAdjacentElementHTML(position, item);
}


document.addEventListener("keyup",function(even){
    if (event.keycode == 13){
        if(toDo){
            const toDo = input.value;

            if(toDo){
                addToDo(toDo);
            }
        }
    }
})

