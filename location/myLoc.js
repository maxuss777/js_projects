window.onload= function()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    }
    else
    {
        alert("Oops, geolocation is not supported");
    }
};

function displayLocation(position)
{
    var ourCoords=
    {
        latitude:47.624851,
        longitude: -122.52099
    };

    var latitude=position.coords.latitude;
    var longitude=position.coords.longitude;

    var div=document.getElementById("location");
    div.innerHTML="You are at Latitude: "+latitude+", Longitude: "+longitude;

    var km=Math.floor(computeDistance(position.coords,ourCoords));
    var distance=document.getElementById("distance");
    distance.innerHTML="You are "+km+" km from you point!";

    showMap(position.coords);
}
function displayError(error)
{
    var errorTypes=
    {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timeout"
    };
    var errorMessage=errorTypes[error.code];
    if(error.code===0||error.code===2)
    {
        errorMessage=errorMessage+" "+error.message;
    }
    var div=document.getElementById("location");
    div.innerHTML=errorMessage;
}
function computeDistance(startCoords, destCoords)
{
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var Radius = 6371;
    function degreesToRadians(degrees)
    {
        return radians = (degrees * Math.PI) / 180;
    }

    return Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) * Math.cos(destLatRads) *
        Math.cos(startLongRads - destLongRads)) * Radius;
}