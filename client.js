
$(document).ready(onReady);

//generate button counter
let timesClicked = 0;

function onReady(){
    //handle button click events
    $('#generateBtn').on('click', handleGenerateBtn);
    $('#cardHolder').on('click', '.swapBtn', handleSwapBtn);
    $('#cardHolder').on('click', '.deleteBtn', handleDeleteBtn);
    
}

function handleGenerateBtn(){//Generate
    //incriment counter
    timesClicked++;
    //build new div element
    let divString = `
    <div class="card col-3">
        <p>${timesClicked}</p>
        <button class="swapBtn">Swap</button>
        <button class="deleteBtn">Delete</button>
    </div>
    `
    //put div element on dom
    $('#cardHolder').append(divString);
}

function handleSwapBtn(){//Swap
    //find card background-color
    let color = $(this).parent().css('background-color');
    //switch background-color
    if(color === 'rgb(255, 0, 0)'){
        $(this).parent().css('background-color', 'yellow');
        $(this).parent().css('color', 'black');
    } else{
        $(this).parent().css('background-color', 'red');
        $(this).parent().css('color', 'white');
    }    
}

function handleDeleteBtn(){//Delete
    //remove parent div (card) from dom
    $(this).parent().remove();
}