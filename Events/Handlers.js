window.onload = init;

//--------show answer on click and after 2 seconds return to previous state

/*function init()
{
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++)
    {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj)
{
    var image = eventObj.target;
    var name = image.id;
    name = "resources/" + name + ".jpg";
    image.src = name;

    setTimeout(returnBlur, 2000, image);
}

function returnBlur(image)
{
    var name = image.id;
    name="resources/"+name+"blur.jpg";
    image.src = name;
}*/

//--------show answer on mouse over and hide on mouse out

function init()
{
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++)
    {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = hideAnswer;
    }
}

function showAnswer(eventObj)
{
    var image = eventObj.target;
    var name = image.id;
    name = "resources/" + name + ".jpg";
    image.src = name;
}

function hideAnswer(eventObj)
{
    var image = eventObj.target;
    var name = image.id;
    name="resources/"+name+"blur.jpg";
    image.src = name;
}