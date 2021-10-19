$(function(){
    console.log("JS Ready to mingle")

    var toggleButton = document.getElementsByClassName('toggle-button')[0]
    var navbarLinks = document.getElementsByClassName('navButtons')[0]

    $(toggleButton).click(function(){
        console.log("clicked");
        navbarLinks.classList.toggle('active')
    });
});