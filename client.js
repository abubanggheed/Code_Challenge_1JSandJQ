
$(document).ready(onReady);

let timesClicked = 0;

function onReady(){
    $('#generateBtn').on('click', handleGenerateBtn);
    
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
    $('body').append(divString);
}