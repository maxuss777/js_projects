var passengers= [
    {name: "Jane Doloop", isPaid: true, ticket: "coach", isNoFly: true},
    {name: "Dr. Evel", isPaid: true, ticket: "improovedcoach", isNoFly: false},
    {name: "Sue Property", isPaid: false, ticket: "firstclass", isNoFly: true},
    {name: "John Funcall", isPaid: true, ticket: "coach", isNoFly: false}
];

function servePassengers(passengers)
{
    for(var i=0; i<passengers.length; i++)
    {
        serveCustomer(passengers[i]);
    }
}

function serveCustomer(passenger)
{
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();

    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDinnerOrderFunction();
}

function createDrinkOrder(passenger)
{
    var orderFunction;

    switch (passenger.ticket)
    {
        case "firstclass":
            return orderFunction = function ()
            {
                alert("you are flying at first class");
            };
        case "coach":
            return orderFunction = function ()
            {
                alert("You are flying at coach class");
            };
        case "improovedcoach" :
            return orderFunction = function ()
            {
                alert("You are flying at improved coach class");
            };
        default:
            return null;
    }
}
function createDinnerOrder(passenger)
{
    var orderFunction;

    switch (passenger.ticket)
    {
        case "firstclass":
            return orderFunction = function ()
            {
                alert("dinner for first class");
            };
        case "coach":
            return orderFunction = function ()
            {
                alert("dinner for coach class");
            };
        case "improovedcoach" :
            return orderFunction = function ()
            {
                alert("dinner for improved coach class");
            };
        default:
            return null;
    }
}

servePassengers(passengers);

//--------------------------------
/*function processPassengers(passengers, testFunction)
 {
 for(var i=0; i<passengers.length; i++)
 {
 if(testFunction(passengers[i]))
 {
 return false;
 }
 }
 return true;
 }
//--------------------------------
function checkNoFlyList(passenger)
{
    return(passenger.name === "Dr. Evel");
}
//--------------------------------
function checkNotPaid(passenger)
{
    return (!passenger.isPaid);
}*/

/*
//--------------------------------
var allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly)
{
    console.log("Cannot take off!");
}
//--------------------------------
var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid)
{
    console.log("Cannot take of, coss not all are paid!");
}
//--------------------------------
function printPassengers(passenger)
{
    console.log(passenger.name, passenger.isPaid);
}
//--------------------------------
processPassengers(passengers, printPassengers);*/