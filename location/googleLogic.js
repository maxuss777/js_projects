var map=null;
//----------------------------------------------
function showMap(coords)
{
    var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);

    var mapOptions =
    {
        zoom: 10,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);

    var title = "Your Location";
    var content = "You are here: " + coords.latitude + ", " + coords.longitude;

    addMarker(map, googleLatAndLong, title, content);
}
//----------------------------------------------
function addMarker(map, latlong, title, content)
{
    var markerOptions=
    {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };
    var marker=new google.maps.Marker(markerOptions);
    var infoWindowOptions=
    {
        content:content,
        position: latlong
    };
    var infoWindow=new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function()
        {
            infoWindow.open(map);
        })
}
//----------------------------------------------