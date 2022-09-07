$(document).ready(function() {
    let i = 1;
    $('#btn1').click(function() {
        if (i == 1) {
            $('#p1').hide();
            i = 0;
        } else {
            $('#p1').show();
            i = 1;
        }
    });
});