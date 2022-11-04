function countCheckboxes() {
    //alert($('.check-box :checked').size());

    var delayInMilliseconds = 250; //1 second

    setTimeout(function() {
        var percentComplete = Math.round(document.querySelectorAll('input[type="checkbox"]:checked').length 
        / document.querySelectorAll('input[type="checkbox"]').length 
        * 100);
        $('#percent').text(percentComplete);
        document.getElementById("indicator").style.width = percentComplete + "%";
    }, delayInMilliseconds);


}

$(document).ready(function() {
    $('.label-click').click(function() {
        countCheckboxes();
    });
});