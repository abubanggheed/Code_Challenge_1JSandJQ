
$(document).ready(onReady);

let timesClicked = 0;

function onReady(){
    $('#generateBtn').on('click', handleGenerateBtn);
    
}

function handleGenerateBtn(){
    $('body').append('<div></div>');
}