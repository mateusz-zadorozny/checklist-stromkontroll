var completedInstallation = false;

function countCheckboxes() {
    //alert($('.check-box :checked').size());

    var delayInMilliseconds = 200; //1 second

    setTimeout(function () {
        var percentComplete = Math.round(document.querySelectorAll('input.list-element:checked').length
            / document.querySelectorAll('input.list-element').length
            * 100);
        $('#percent').text(percentComplete);
        document.getElementById("indicator").style.width = percentComplete + "%";
        if (percentComplete > 99 && completedInstallation != true) {
            completedInstallation = true;
            $("#completed").removeClass("hidden");
        }
    }, delayInMilliseconds);


}

function completeCount() {

}

$(document).ready(function () {
    $('.label-click').click(function () {
        countCheckboxes();
    });
});