function Movie(title,genre,rating,showTime)
{
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showTime = showTime;
    this.getNextShowing = function ()
    {
        var now = new Date().getDate();

        for (var i = 0; i < this.showTime.length; i++)
        {
            this.showTime = getTimeFromString(this.showTime[i]);
            if ((this.showTime - now) > 0)
            {
                return "Next showing of " + this.title + " is " + this.showTime[i];
            }
        }
        return null;
    }
}

var movie1=new Movie();
movie1.title="Plan 9 from Out Space";
movie1.showTime=["3:00pm","7:00pm","11:00pm"];
movie1.genre="Cult Classic";
movie1.rating=2;

var movie2=new Movie();
movie2.title="Forbidden Planet";
movie2.showTime=["3:00pm","7:00pm"];
movie2.genre="Classic Sci-fi";
movie2.rating=5;

function getTimeFromString(timeString)
{
    var theTime = new Date();
    var time=timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1])+(time[3]?12:0));
    theTime.setMinutes(parseInt(time[2])||0);
    return theTime.getTime();
}

alert(movie1.getNextShowing());

alert(movie2.getNextShowing());
