/*$(document).ready(function(){  
    $("p").hover(function(){  
        $(this).css("background-color", "violet");  
        }, function(){  
        $(this).css("background-color", "green");  
    });  
})*/

/*$(document).ready(function(){
    $("#p").hover(function(){
      $(this).animate({fontSize: '3em'}, "slow");
    },
    function(){
      $(this).hide();
    });
  });

  $(document).ready(function(){
    $("#p2").hover(function(){
      $(this).animate({fontSize: '3em'}, "slow");
    },
    function(){
      $(this).hide();
    });
  });*/

  /*$(document).ready(function(){
    $("#project1").on('mouseenter',function() {
        $("#p").show();

        
    });
    $("#project1").on('mouseout',function() {
        $("#p").hide();
    });
});

$(document).ready(function(){
    $("#project2").on('mouseenter',function() {
        $("#p1").show();

        
    });
    $("#project2").on('mouseout',function() {
        $("#p1").hide();
    });
});*/


  

   
$(document).ready(function() {
    $('.p').hide();
    $('img').animate({
        opacity:1
        
    });

    $('img').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.p').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.p').fadeOut();
    });


});

