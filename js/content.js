const key = '5b1064585f4ab8706d275f90';
const base = 'https://five-snowboard.glitch.me/api';
//const url = base+'/lists?accessToken='+key;
const url = `${base}/lists?accessToken=${key}`;
//https://five-snowboard.glitch.me/api/lists?accessToken=5b1064585f4ab8706d275f90


fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();

        } else {
            throw response;
        }
    })
    .then(data => {

        const backlog = document.querySelector('#backlog');
        if (backlog) {
            var backlogTags = '';

            backlogTags += '<div class="heading">';
            backlogTags += '<h2 aria-label="Backlog Column">' + data[0].title + '</h2>';
            backlogTags += '<p><button class="newTaskButton" aria-label="Add new task">' + 'Add Task' + '</button></p>';
            backlogTags += '</div>';

            for (var i = 0; i < data[0].items.length; i++) {
                backlogTags += '<article>';
                backlogTags += '<h3>' + data[0].items[i].title + '</h3>';
                backlogTags += '<p>' + data[0].items[i].description + '</p>';
                backlogTags += '<div>';
                backlogTags += '<img src="images/calendar.png" alt="calendar icon">';
                backlogTags += '<p><time class="date" datetime="' + data[0].items[i].dueDate + '">' + data[0].items[i].dueDate + '</time></p>';
                backlogTags += '</div>';
                backlogTags += '</article>';

            }
            backlog.innerHTML = backlogTags;


        }
        const implementation = document.querySelector('#implementation');
        if (implementation) {
            var imp = '';

            imp += '<div class="heading">';
            imp += '<h2 aria-label="Implementation Column">' + data[1].title + '</h2>';
            imp += '<p><button class="newTaskButton" aria-label="Add new task">' + 'Add Task' + '</button></p>';
            imp += '</div>';

            for (var i = 0; i < data[1].items.length; i++) {
                imp += '<article>';
                imp += '<h3>' + data[1].items[i].title + '</h3>';
                imp += '<p>' + data[1].items[i].description + '</p>';
                imp += '<div>';
                imp += '<img src="images/calendar.png" alt="calendar icon">';
                imp += '<p><time class="date" datetime="' + data[1].items[i].dueDate + '">' + data[1].items[i].dueDate + '</time></p>';
                imp += '</div>';
                imp += '</article>';

            }

            implementation.innerHTML = imp;
        }

        const complete = document.querySelector('#complete');
        if (complete) {
            var comp = '';

            comp += '<div class="heading">';
            comp += '<h2 aria-label="Complete Column">' + data[2].title + '</h2>';
            comp += '<p><button class="newTaskButton" aria-label="Add new task">' + 'Add Task' + '</button></p>';
            comp += '</div>';

            for (var i = 0; i < data[2].items.length; i++) {
                comp += '<article>';
                comp += '<h3>' + data[2].items[i].title + '</h3>';
                comp += '<p>' + data[2].items[i].description + '</p>';
                comp += '<div>';
                comp += '<img src="images/calendar.png" alt="calendar icon">';
                comp += '<p><time class="date" datetime="' + data[2].items[i].dueDate + '">' + data[2].items[i].dueDate + '</time></p>';
                comp += '</div>';
                comp += '</article>';

            }

            complete.innerHTML = comp;
            button();
        }
    })
    .catch(err => {
        console.log(err);
    });