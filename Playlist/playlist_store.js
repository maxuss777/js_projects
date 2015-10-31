function save(item)
{
    var playlistArray=getStoredArray("playlist");
    playlistArray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playlistArray));

    var songNameField=document.getElementById("songTextInput");
    songNameField.value="";
}

function loadPlaylist()
{
    var playlistArray=getSavedSongs();
    var ui=document.getElementById("playlist");
    if(playlistArray!=null)
    {
        for(var i=0; i<playlistArray.length; i++)
        {
            var li=document.createElement("li");
            li.innerHTML=playlistArray[i];
            ui.appendChild(li);
        }
    }
}

function getSavedSongs()
{
    return getStoredArray("playlist");
}

function getStoredArray(key)
{
    var playlistArray=localStorage.getItem(key);
    if(playlistArray==null || playlistArray=="")
    {
        playlistArray=[];
    }
    else if(playlistArray!=null || playlistArray!="")
    {
        playlistArray=JSON.parse(playlistArray);
    }
    return playlistArray;
}