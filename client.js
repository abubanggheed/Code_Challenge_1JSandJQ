
$(document).ready(onReady);

let timesClicked = 0;

function onReady(){
    $('#generateBtn').on('click', handleGenerateBtn);
    
}

function handleGenerateBtn(){
    timesClicked++;
    let divString = `
    <div class="button">
        <p>${timesClicked}</p>
    </div>
    `
    $('body').append(divString);
}