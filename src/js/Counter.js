function countCheckboxes() {
    //alert($('.check-box :checked').size());

    var delayInMilliseconds = 250; //1 second

    setTimeout(function() {
        //alert($('input').attr('checked'));
        $('#percent').text(Math.round(document.querySelectorAll('input[type="checkbox"]:checked').length 
        / document.querySelectorAll('input[type="checkbox"]').length 
        * 100));
    }, delayInMilliseconds);


}

$(document).ready(function() {
    $('label.label-click').click(function() {
        
        countCheckboxes();
    });
});