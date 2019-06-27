//const url = base+'/items?accessToken='+key;
const urlPost = `${base}/items?accessToken=${key}`;

//function for event
function newTasks(event, targetSectionId) {
    var element = document.querySelector(`section #${targetSectionId}`);
    //console.log(targetSectionId);
    if (element) {
        var newEl = '';
        var newForm = document.querySelector('#taskForm');
        if (!newForm) {
            newEl += '<p>' + "Please fill out all outlined sections below." + '<em>' + "(All are required to progress)" + '</em>';
            newEl += '<form action="" method="POST" id="taskForm" role="form">';
            newEl += '<p><strong>' + "Minimum 4 characters for each input" + '</strong></p>';

            newEl += '<div>';
            newEl += '<textarea type="text" aria-label="Task Name" name=taskName cols="93" rows="2" required id="taskTitle" minlength="4"></textarea>';
            newEl += '<label for="taskName" class=labelText>' + "Task Name" + '</label>';
            newEl += '</div>';


            newEl += '<div>';
            newEl += '<textarea type="text" aria-label="Task Description" name=taskDes cols="93" rows="2" required id="description" minlength="4" ></textarea>';
            newEl += '<label for="taskDes" class=labelText>' + "Task Description" + '</label>';
            newEl += '</div>';

            newEl += '<div>';
            newEl += '<input type="date" date-format="mm/dd/yyyy" name=dueDate required minlength="10" id="dueDate" aria-label="Due Date">';
            newEl += '<label for="dueDate" class=labelText>' + "Due Date (MM/DD/YYYY)" + '</label>';
            newEl += '</div>';

            newEl += '<div>';
            newEl += '<input type="submit" value="Submit" id="submit" aria-label="Add new task">';
            newEl += '</div>';
            newEl += '</form>';


            element.insertAdjacentHTML("beforeend", newEl);

            const form = document.querySelector('#taskForm');

            if (form) {
                form.addEventListener('submit', function (e) {

                    e.preventDefault();

                    let listId = 0;

                    if (targetSectionId == 'backlog') {
                        listId = 1;
                    } else if (targetSectionId == 'implementation') {
                        listId = 2;
                    } else if (targetSectionId == 'complete') {
                        listId = 3;
                    }

                    const taskTitle = document.querySelector('#taskTitle');
                    const taskDesc = document.querySelector('#description');
                    const dueDate = document.querySelector('#dueDate');

                    const formData = {

                        title: taskTitle.value,
                        description: taskDesc.value,
                        dueDate: dueDate.value,
                        listId: listId

                    };

                    const config = {

                        method: 'POST',
                        body: JSON.stringify(formData),
                        headers: {
                            'content-type': 'application/json'
                        }
                    };

                    fetch(urlPost, config)

                        .then(response => {

                            if (response.ok) {

                                return response.json();

                            }
                            throw response;
                        })
                        .then(data => {
                            location.reload();
                            // handle json data
                            //console.log(data);
                        })
                        .catch(error => {
                            // handle error
                            console.log(error);
                        });
                    return false;
                });

            }
        }
    }

}

//var to grab the buttons on the page
function button() {
    //const submitButtons = document.querySelectorAll('button');
    const sections = document.querySelectorAll('#tasks section');

    //console.log(sections)

    for (var i = 0; i < sections.length; i++) {
        // TODO: Get the submit button inside of sections[i]
        const submitButton = sections[i].querySelector('.newTaskButton');
        //const submitButton = document.querySelector(sections[i].id + ' button');
        const section = sections[i];
        submitButton.addEventListener('click', function (e) {

            newTasks(e, section.id);
        });
    }
}
// var to grab the chenge color icon
const colorIcon = document.querySelector('header img');

//vars to grab the elements we need to set styles on
const headerColor = document.querySelector('header');
const bodyColor = document.querySelector('body');

//Set the styles for the elements using local storage vars
const color = localStorage.getItem('backgroundColor');
const bodColor = localStorage.getItem('bodyColor');

//set styles
headerColor.style.backgroundColor = color;
bodyColor.style.backgroundColor = bodColor;

//create iterator for looping through array
let iterator = 3;

//click event on icon
colorIcon.addEventListener('click', function (e) {

    //arrays for header and body colors
    const colors = [
        "Black",
        "#91171F",
        "#296EB4",
        "#3C91E6",
    ];

    const colors2 = [
        "#799496",
        "#C9DAEA",
        "#9191E9",
        "#E8EBE4"
    ];

    //vars to grab elements
    const headerElement = document.querySelector('header');
    const bodyEl = document.querySelector('body');

    // iterator increase/reset
    if (iterator <= 4) {
        iterator++;
        if (iterator == 4) {
            iterator = 0;
        }
    }

    //set background colors on elements
    headerElement.style.backgroundColor = colors[iterator];
    bodyEl.style.backgroundColor = colors2[iterator];

    //store colors in local storage
    localStorage.setItem('bodyColor', colors2[iterator]);
    localStorage.setItem('backgroundColor', colors[iterator]);
});

