$(function(){
  //window객체에서 scroll 이벤트 발생시
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var bannerTop = $("#banner").offset().top+550;

    var bannerTop2 = $("#banner").offset().top+650;

    var contentsTop = $(".contents").offset().top+500;

    var event2Top = $("#event2").offset().top+800;

    if(scroll > bannerTop){
      $(".events").addClass("on");
      $("#event .text h1").addClass("on");
      $("#event .text p").addClass("on");
      $("#event>.wrap>.item").addClass("on");
    }else{
      $(".events").removeClass("on");
      $("#event .text h1").removeClass("on");
      $("#event .text p").removeClass("on");
      $("#event>.wrap>.item").removeClass("on");
    }

    if(scroll > bannerTop2){
      $("#event .sec").addClass("on");
    }else{
      $("#event .sec").removeClass("on");
    }

    if(scroll > contentsTop){
      $("#event2 .img").addClass("on");
      $("#event2 .sec1 .bg").addClass("on");
      $("#event2 .sec2 .bg").addClass("on");
      $("#event2 .text h1").addClass("on");
    }else{
      $("#event2 .img").removeClass("on");
      $("#event2 .sec1 .bg").removeClass("on");
      $("#event2 .sec2 .bg").removeClass("on");
      $("#event2 .text h1").removeClass("on");
    }


    if(scroll > event2Top){
      $("#event3 div").addClass("on");
      $("#event3 .text h1").addClass("on");
    }else{
      $("#event3 div").removeClass("on");
      $("#event3 .text h1").removeClass("on");
    }
  });
})