//function for event
function newTasks(event){
    var element = document.querySelector('section #backlog');

    if(element){
        var newEl = '';
        
        newEl+='<form action=" " method="POST">';

        newEl+='<div>';
        newEl+='<label for="taskName">'+"Task Name:"+'</label><br>';
        newEl+='<textarea type="text" name=taskName cols="93" rows="2" required="required"></textarea>';
        newEl+='</div>';

        newEl+='<div>';
        newEl+='<label for="taskDes">'+"Task Description:"+'</label><br>';
        newEl+='<textarea type="text" name=taskDes cols="93" rows="2" required="required"></textarea>';
        newEl+='</div>';

        newEl+='<div>';
        newEl+='<label for="dueDate">'+"Due Date:"+'</label><br>';
        newEl+='<input type="date" name=dueDate required="required">';
        newEl+='</div>';

        newEl+='<div>';
        newEl+='<input type="submit" value="Submit" id="submit">';
        newEl+='</div>';

        newEl+='</form>';
        

        element.insertAdjacentHTML("beforeend", newEl);
    }
    
}

//var to grab the buttons on the page
function button(){
    const tasks = document.querySelectorAll('button');
    console.log(tasks)
    for(var i = 0; i < tasks.length; i++){
        tasks[i].addEventListener('click', newTasks);
    }
}
