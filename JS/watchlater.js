$(function(){
    console.log("JS ready to mingle")

    // email icon
   $("#email").hover(function() {
        // changes image to white to display active

        $(this).attr("src", "../images/emailwhite.png")
        }, function (){

            // changes back to original colour
            $(this).attr("src", "../images/email.png")
    });

    // instagram icon
   $("#instagram").hover(function() {
    // changes image to white to display active

        $(this).attr("src", "../images/instagramwhite.png")
        }, function (){

            // changes back to original colour
            $(this).attr("src", "../images/instagram.png")
    }); 

    // youtube icon
   $("#youtube").hover(function() {
    // changes image to white to display active

        $(this).attr("src", "../images/youtube white.png")
        }, function (){

            // changes back to original colour
            $(this).attr("src", "../images/youtube.png")
    }); 












});