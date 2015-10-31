window.onload=function()
{
    var  addSongButton = document.getElementById("addButton");
    addSongButton.onclick=handleAddSongButton;
    loadPlaylist();
};

function handleAddSongButton()
{
    var  songName = document.getElementById("songTextInput");
    if(songName.value.replace(/ /g, "")==="")
    {
        alert("Please enter song name!");
        songName.value="";
    }
    else if(songName.value.replace(/ /g, "")!=="")
    {
        var li = document.createElement("li");
        li.innerHTML=songName.value;
        var ui=document.getElementById("playlist");
        ui.appendChild(li);
        save(songName.value);
    }
}