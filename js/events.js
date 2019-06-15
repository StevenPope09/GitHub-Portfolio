//function for event
function newTasks(event) {
    var element = document.querySelector('section #backlog');

    if (element) {
        var newEl = '';
        var newForm = document.querySelector('#taskForm');
        if (!newForm) {
            newEl += '<form action=" " method="POST" id="taskForm">';

            newEl += '<div>';
            newEl += '<label for="taskName">' + "Task Name:" + '</label><br>';
            newEl += '<textarea type="text" name=taskName cols="93" rows="2" required="required" id="taskTitle"></textarea>';
            newEl += '</div>';

            newEl += '<div>';
            newEl += '<label for="taskDes">' + "Task Description:" + '</label><br>';
            newEl += '<textarea type="text" name=taskDes cols="93" rows="2" required="required" id="description"></textarea>';
            newEl += '</div>';

            newEl += '<div>';
            newEl += '<label for="dueDate">' + "Due Date:" + '</label><br>';
            newEl += '<input type="date" name=dueDate required="required" id="dueDate">';
            newEl += '</div>';

            newEl += '<div>';
            newEl += '<input type="submit" value="Submit" id="submit">';
            newEl += '</div>';

            newEl += '</form>';


            element.insertAdjacentHTML("beforeend", newEl);
        }
    }

}

//var to grab the buttons on the page
function button() {
    const tasks = document.querySelectorAll('button');
    //console.log(tasks)
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener('click', newTasks);
    }
}

const myForm = document.querySelector('#submit');
const form = document.querySelector('#taskForm');

if (form) {
    myForm.addEventListener('submit', function (e) {

        const taskTitle = document.querySelector('#taskTitle');
        const taskDesc = document.querySelector('#description');
        const dueDate = document.querySelector('#dueDate');

        const formData = {

            title: taskTitle.value,
            description: taskDesc.value,
            dueDate: dueDate.value,

        }
        const config = {

            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'content-type': 'application/json'
            }
        }
        fetch(url, config)

            .then(response => {

                if (response.ok) {
                    
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                // handle json data
            })
            .catch(error => {
                // handle error
                console.error(error);
            });
    })
}