$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
function pigLatin(text) {
    return text.substr(1)+text.charAt(0)+"ay";
}
$("#button").click(function() {
let text =
$(".input").val();
$(".output").text(function() {
return pigLatin(text);
});
});
});
