// Witches/Spooky women for topics.....

var topics = ["Sarah Sanderson", "Mary Sanderson", "Winifred Sanderson", "Prue Halliwell", "Piper Halliwell", "Phoebe Halliwell", "Paige Matthews", "Glinda", "Fiona Goode","Marie Laveau"];
var button;

// Create a function to create buttons from array.....

var buttonGenerator = function() {
    $("#buttonArea").empty();

// Loop through array and create buttons.....

for(i = 0; i < topics.length; i++) {
    button =$("<button type=" + "button" + ">" + topics[i] + "</button>").addClass("btn btn-warning").attr("data",topics[i]);
    $("#buttonArea").append(button);
};
}
// User clicks generated buton, generate 10 non animated gif images and place them on page.....

$("#buttonArea").on("click", ".btn", function(){
    var thing = $(this).attr("data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=FTz19Fc6q1VN9DAZImwNwKlhMUb0CtXq&limit=10";

// Call on aJax.....

$.ajax({
    url:queryURL,
    method: "GET"
}).done(function(response){
    console.log(response);

    var results = response.data;
    
