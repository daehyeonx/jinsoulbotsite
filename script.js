var teaPhrase = "Tea go sleep";

$(document).ready(function() {
    $('#yes').click(teaSleep());
});

function teaSleep() {
    return new function(){
        document.getElementById('titleTea').value = "peepoPog";
    }

}