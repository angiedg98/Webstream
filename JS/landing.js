$(function(){



  $("#signup").on("click", function(){

      //$(".four").css("margin-left", "0%");\
      $(".slide").toggleClass("slide-slide");

  });

  // change form to signup
  $("#signup").on("click", function(){

      //$(".four").css("margin-left", "0%");\
    //   $(".slide").toggleClass("slide-slide");
    $(".slide-slide").addClass();

  });

    // change form back to login
    $("#login").on("click", function(){

      $(".slide-slide").removeClass();
  
    });

  // functions for tablet sign up

  $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });

   //redirect after login

   $(".button").on("click", function(){
        window.location.href = 'PAGES/home.html';

   });

   // change login image to sign up image
   $("#signup").click(function(){
    $(".featureTwo").slideUp(500);
    $(".test").css("display", "block");
    // $(".featureTwo").attr("src", "images/gradient.png");
    $(".featureOne").text("Join Our Family!");
});

   // change back to login image
   $("#login").click(function(){
    $(".featureTwo").slideDown(500);
    $(".test").css("display", "nones");
    // $(".featureTwo").attr("src", "images/gradient.png");
    $(".featureOne").text("Welcome Back!");
});

});