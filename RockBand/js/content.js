/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/rockband.json
*/
var xhr = new XMLHttpRequest();



xhr.onload = function()
{
    //save json data
        var data = JSON.parse(xhr.responseText);

        var blogSection = document.querySelector('#blog');

        if (blogSection)
        {
            var blogTags = "";
            blogTags+='<div class="wrapper">';
            blogTags+= '<h2>'+ "Latest"+'<strong> Band News</strong></h2>';
            blogTags+= '<article id="featured">';
            blogTags+= '<a href=>';
            blogTags+= '<img src="' + data.news[0].imageURL + '"/>';
            blogTags+='<p>' + data.news[0].postDate+'</p>';
            blogTags+= '<h3>' + data.news[0].title + '</h3>';
            blogTags+='</a>';
            blogTags+= '</article>';

            for (var i = 1; i < 5; i++)
            {
                blogTags+= '<article>';
                blogTags+= '<a href=>';
                blogTags+= '<img src="' + data.news[i].imageURL + '"/>';
                blogTags+='<p>' + data.news[i].postDate+'</p>';
                blogTags+= '<h3>' + data.news[i].title + '</h3>';
                blogTags+='</a>';
                blogTags+= '</article>';
            }

            blogTags+= '<p><a href="news.html" class="links">'+"View More"+'</a></p>';

            blogTags+='</div>';
            blogSection.innerHTML = blogTags;
        }

        var liveEvents= document.querySelector('#tourdates table');
        if (liveEvents)
        {
            var eventTags = "";

            for (var i = 0; i < 4; i++)
            {
                eventTags+='<tr>';
                eventTags+='<td>'+ data.events[i].date+'</td>';
                eventTags+='<td>'+ data.events[i].city+'</td>';
                eventTags+='<td>'+ data.events[i].state+'</td>';
                eventTags+='<td>'+ data.events[i].venue+'</td>';
                eventTags+='<td id="location"><a href="'+data.events[i].locationURL+'"><img src="images/location.png" alt="location" title="Location of Event"/></a></td>';
                eventTags+='<td id="tickets"><a href="'+data.events[i].ticketsURL+'"><img src="images/ticket.png" alt="tickets" title="Tickets for Event"/></a></td>';
                eventTags+='</tr>';
            }
            liveEvents.innerHTML = eventTags;
        }

        var aboutSection = document.querySelector('#about');
        if (aboutSection)
        {
            var aboutTags = "";
            aboutTags+='<div class="wrapper">';
            aboutTags+='<div id="intro">';
            aboutTags+='<h2>'+" About"+'<strong> The Band</strong></h2>';
            aboutTags+='<h4>'+ data.about.quote+'</h4>';
            aboutTags+='<p>'+ data.about.copy+'</p>';
            aboutTags+='<p><a href="about.html" class="links">'+"Read More"+'</a></p>';
            aboutTags+='</div>';

            aboutTags+='<div id="members">';
            for (var i = 0; i <5 ; i++)
            {
                aboutTags+= '<img src="' + data.members[i].imageURL + '"/>';
            }
            aboutTags+='</div>';
            aboutTags+='</div>';
            aboutSection.innerHTML = aboutTags;
        }

        var blogPage = document.querySelector('#blogPage');
        if (blogPage)
        {
            var blogs = "";
            blogs+='<div class="wrapper">';
            blogs+='<h2><strong>Blog</strong></h2>';
            for (var i = 0; i <data.news.length ; i++)
            {
                blogs+='<article>';
                blogs+='<h3>'+ data.news[i].postDate+'</h3>';
                blogs+='<h4>'+data.news[i].title+'</h4>';
                blogs+='<p>'+"Posted by Super User"+'</p>';
                blogs+='<img src="' + data.news[i].imageURL + '"/>';
                blogs+='<p>'+ data.news[i].text+'</p>';
                blogs+='</article>';

            }
            blogs+='<p><button>'+"View More"+'</button></p>';
            blogs+='</div>';

            blogPage.innerHTML = blogs;
            moreBlog();
        }

        var teamPage = document.querySelector('#team ul');
        if (teamPage)
        {
            var members = "";

            for (var i = 0; i < data.members.length; i++)
            {
                members+='<li>';
                members+='<img src="' + data.members[i].imageURL + '"/>';
                members+='<h3>'+ data.members[i].firstname+" "+ data.members[i].lastname+'</h3>';
                members+='<p>'+data.members[i].instrument+'</p>';
                members+='<p><button class="readmore">'+"Read More"+'</button></p>';
                members+='</li>';
            }
            teamPage.innerHTML= members;
            //look up info to call func from another file
            teamInfo();

        }

        var tourDates = document.querySelector('#tours ul');
        if (tourDates)
        {
            var tours="";

            for (var i = 0; i <data.events.length; i++)
            {
                tours+='<li>';
                tours+='<img src="images/tours.jpg"/>';
                tours+='<h3>'+ "Lorem Ipsum 2017"+'</h3>';
                tours+='<p>'+ data.events[i].date + '</p>';
                tours+='<p>'+ data.events[i].city + " "+ data.events[i].state+'</p>';
                tours+='<p>'+ data.events[i].venue+'</p>';
                tours+='<p><a href="'+data.events[i].locationURL+'"><button>'+"View Directions"+'</button></a></p>';
                tours+='<p><a href="'+data.events[i].ticketsURL+'"><button>'+"Buy Tickets"+'</button></a></p>';
                tours+='</li>';
            }
            tourDates.innerHTML = tours;
        }
    // now call events

};

//call ajax
xhr.open('GET','https://joshbloom.github.io/dws1/data/rockband.json',true);
xhr.send(null);

