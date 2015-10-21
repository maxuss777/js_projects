window.onload = init;

function init()
{
    var buttonToShowNotPaidPassengers = document.getElementById("notPaidButton");
    buttonToShowNotPaidPassengers.onclick = controller.getAllNotPaidPassengers;
    var buttonToShowNoFlyPaidPassengers = document.getElementById("noFlyButton");
    buttonToShowNoFlyPaidPassengers.onclick = controller.getAllNotAllowedToFlyPassengers;
}

var view =
{
    showAllPassengers: function(passengers)
    {
        console.log(passengers);
    }

};
var model =
{
    checkNoFlyList: function(passengers)
                    {
                        if(passengers.length===0 || passengers===null)
                        {
                            return null;
                        }
                        var passengersNoFlyList=[];
                        for(var i=0; i<passengers.length; i++)
                        {
                            if(passengers[i].isNoFly===true)
                            {
                                passengersNoFlyList.push(passengers[i]);
                            }
                        }
                        return passengersNoFlyList;
                    },
    checkNotPaid: function(passengers)
                  {
                      if(passengers.length===0 || passengers===null)
                      {
                          return null;
                      }
                      var passengersNotPaid=[];
                      for(var i=0; i<passengers.length; i++)
                      {
                          if(passengers[i].isPaid===false)
                          {
                              passengersNotPaid.push(passengers[i]);
                          }
                      }
                      return passengersNotPaid;
                  }
};

var controller =
{
    getAllNotPaidPassengers:         function()
                                     {
                                         view.showAllPassengers(model.checkNotPaid(passengers));
                                     },
    getAllNotAllowedToFlyPassengers: function()
                                     {
                                         view.showAllPassengers(model.checkNoFlyList(passengers));
                                     }
};

var passengers= [
    {name: "Jane Doloop", isPaid: true, isNoFly: true},
    {name: "Dr. Evel", isPaid: true, isNoFly: false},
    {name: "Sue Property", isPaid: false, isNoFly: true},
    {name: "John Funcall", isPaid: true, isNoFly: false}
];