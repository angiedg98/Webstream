$(function(){



  $("#signup").on("click", function(){

      //$(".four").css("margin-left", "0%");\
      $(".slide").toggleClass("slide-slide");

  });

  $("#login").on("click", function(){

      //$(".four").css("margin-left", "0%");\
      $(".slide").toggleClass("slide-slide");

  });

  // functions for tablet sign up

  $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });


});