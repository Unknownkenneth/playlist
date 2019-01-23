/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs =[];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var img=[];
var artists =[];
var songLen=[];
var links=[];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(Song){
        $("#songs").append("<h1>" + Song[0] +"</h1>");
});
    img.forEach(function(img) {
        $("#images").append("<img src=" + img[0] + ">");
});
    artists.forEach(function(art) {      
        $("#artist").append("<p>" + art[0] + "</p>");
});
    songLen.forEach(function(length) {
        $("#lengths").append("<p>" + length[0] + "</p>");
});
    links.forEach(function(link) {
    $("#links").append("<a href=" + link[0] + "</a>");
});
    
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    
    $(songs).append("songs")
    $(img).push("images")
    $(artists).push("artists")
    $(songLen).push("lengths")
    $(links).push("links")
    
}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
