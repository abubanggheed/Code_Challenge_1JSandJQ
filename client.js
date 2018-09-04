
$(document).ready(onReady);

let timesClicked = 0;

function onReady(){
    $('#generateBtn').on('click', handleGenerateBtn);
    $('#cardHolder').on('click', '.swapBtn', handleSwapBtn);
    
}

function handleGenerateBtn(){
    timesClicked++;
    let divString = `
    <div class="card col-6">
        <p>${timesClicked}</p>
        <button class="swapBtn">Swap</button>
        <button class="deleteBtn">Delete</button>
    </div>
    `
    $('#cardHolder').append(divString);
}

function handleSwapBtn(){
    let color = $(this).parent().css('background-color');
    if(color === 'rgb(255, 0, 0)'){
        $(this).parent().css('background-color', 'yellow');
        $(this).parent().css('color', 'black');
    } else{
        $(this).parent().css('background-color', 'red');
        $(this).parent().css('color', 'white');
    }
    
    
}