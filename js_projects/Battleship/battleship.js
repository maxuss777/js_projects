window.onload = init;

function init()
{
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
}

var view =
{
    displayMessage : function(msg)
    {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location)
    {
        var cell = document.getElementById(location);
        cell.setAttribute("class","hit");
    },
    displayMiss: function(location)
    {
        var cell = document.getElementById(location);
        cell.setAttribute("class","miss");
    }
};

var model =
{
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipsLength: 3,
    ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
            {locations: ["24", "34", "44"], hits: ["", "", ""]},
            {locations: ["10", "11", "12"], hits: ["", "", ""]}
    ],
    fire: function(guess)
    {
        for(var i=0; i<this.numShips; i++)
        {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0)
            {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if(this.isSunk(ship))
                {
                    view.displayMessage("You sunk my battleship!")
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed!");
        return false;
    },
    isSunk: function(ship)
    {
        for(var i=0;i<this.shipsLength; i++)
        {
            if(ship.hits[i] != "hit")
            {
                return false;
            }
        }
        return true;
    }
};

var controller =
{
    guesses: 0,

    processGuess: function(guess)
    {
        var location = parseGuess(guess);
        if(location)
        {
            this.guesses++;
            var hit = model.fire(location);
            if(hit && model.shipsSunk === model.numShips)
            {
                view.displayMessage("You sank my battleships, in "+this.guesses+" guesses");
            }
        }
    }
};

function parseGuess(guess)
{
    var alphabet = ["A","B","C","D","E","F","G"];

    if (guess === null || guess.length !== 2)
    {
        alert("Oops, please enter a letter and a number on the board.");
    }
    else
    {
        var row = alphabet.indexOf(guess.charAt(0));
        var column = guess.charAt(1);

        if(isNaN(row) || isNaN(column))
        {
            alert("Oops, that's off the board!");
        }
        else if(row<0 || row>=model.boardSize || column<0 || column>=model.boardSize)
        {
            alert("Oops, that's off the board!");
        }
        else
        {
            return row+column;
        }
    }
    return null;
}

function handleFireButton()
{
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}

function handleKeyPress(e)
{
    var fireButton = document.getElementById("fireButton");
    if(e.keyCode===13)
    {
        fireButton.click();
        return false;
    }
}

//---------------------
/*controller.processGuess("A0");
controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");
controller.processGuess("C4");
controller.processGuess("D4");
controller.processGuess("E4");
controller.processGuess("B0");
controller.processGuess("B1");
controller.processGuess("B2");*/