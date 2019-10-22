$(document).ready(function() {
  // $(".card").click(function() {
    $(".card").click(function() {
      $(this).children(".front").toggle();
      $(this).children(".back").toggle();
      // $(".back").children(".back").click(function() {
      //     $(this).toggle();
        console.log("Hello");
      // });
    });
  });
  // });
