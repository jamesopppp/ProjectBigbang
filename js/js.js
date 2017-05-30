var i=0;
var j=0;
var k=0;
var h=0,a=0,q=0;
timer=0;
$(document).ready(function () {
    $("#ABall .Ab3").mouseenter(function(){

        $("#ABall .Ab3 .left").animate({opacity:"1",marginLeft:"0"},1000)
    })
     $("#ABall .Ab3").mouseenter(function(){

        $("#ABall .Ab3 .right").animate({opacity:"1",marginTop:"0"},1000)
    })
    $("#ABall .Ab1").mouseenter(function(){

        $("#ABall .Ab1 .left").animate({opacity:"1",marginLeft:"0"},1000)
    })
    $("#ABall .Ab1").mouseenter(function(){

        $("#ABall .Ab1 .right").animate({opacity:"1",marginTop:"0"},1000)
    })
    $("#ABall .Ab2").mouseenter(function(){

        $("#ABall .Ab2 .left").animate({opacity:"1",marginLeft:"0"},1000)
    })
    $("#ABall .Ab2").mouseenter(function(){

        $("#ABall .Ab2 .right").animate({opacity:"1",marginTop:"0"},1000)
    })
     $(".home li.a").mouseenter(function(){

        $(".home li .a1").animate({marginTop:"7%"},500)
    })
    $(".home li.a").mouseleave(function(){

        $(".home li .a1").animate({marginTop:"100%"},500)
    })

    $(".home li.b").mouseenter(function(){

        $(".home li .b1").animate({marginTop:"8%"},500)
    })
    $(".home li.b").mouseleave(function(){

        $(".home li .b1").animate({marginTop:"100%"},500)
    })
    $(".home li.c").mouseenter(function(){

        $(".home li .c1").animate({marginTop:"8%"},500)
    })
    $(".home li.c").mouseleave(function(){

        $(".home li .c1").animate({marginTop:"100%"},500)
    })

    $(".home li.d").mouseenter(function(){

        $(".home li .d1").animate({marginTop:"8%"},500)
    })
    $(".home li.d").mouseleave(function(){

        $(".home li .d1").animate({marginTop:"100%"},500)
    })
    $(".home li.e").mouseenter(function(){

        $(".home li .e1").animate({marginTop:"8%"},500)
    })
    $(".home li.e").mouseleave(function(){

        $(".home li .e1").animate({marginTop:"100%"},500)
    })

    $(".home li.f").mouseenter(function(){

        $(".home li .f1").animate({marginTop:"8%"},500)
    })
    $(".home li.f").mouseleave(function(){

        $(".home li .f1").animate({marginTop:"100%"},500)
    })
   
   




$(".overview li.a").mouseenter(function(){

        $(".overview li .a1").animate({marginTop:"8%"},500)
    })
    $(".overview li.a").mouseleave(function(){

        $(".overview li .a1").animate({marginTop:"100%"},500)
    })

    $(".overview li.b").mouseenter(function(){

        $(".overview li .b1").animate({marginTop:"8%"},500)
    })
    $(".overview li.b").mouseleave(function(){

        $(".overview li .b1").animate({marginTop:"100%"},500)
    })
    $(".overview li.c").mouseenter(function(){

        $(".overview li .c1").animate({marginTop:"8%"},500)
    })
    $(".overview li.c").mouseleave(function(){

        $(".overview li .c1").animate({marginTop:"100%"},500)
    })

    $(".overview li.d").mouseenter(function(){

        $(".overview li .d1").animate({marginTop:"8%"},500)
    })
    $(".overview li.d").mouseleave(function(){

        $(".overview li .d1").animate({marginTop:"100%"},500)
    })
    $(".overview li.e").mouseenter(function(){

        $(".overview li .e1").animate({marginTop:"8%"},500)
    })
    $(".overview li.e").mouseleave(function(){

        $(".overview li .e1").animate({marginTop:"100%"},500)
    })

    $(".overview li.f").mouseenter(function(){

        $(".overview li .f1").animate({marginTop:"8%"},500)
    })
    $(".overview li.f").mouseleave(function(){

        $(".overview li .f1").animate({marginTop:"100%"},500)
    })






    
   $(".configuration li.a").mouseenter(function(){

        $(".configuration li .a1").animate({marginTop:"8%"},500)
    })
    $(".configuration li.a").mouseleave(function(){

        $(".configuration li .a1").animate({marginTop:"100%"},500)
    })

    $(".configuration li.b").mouseenter(function(){

        $(".configuration li .b1").animate({marginTop:"8%"},500)
    })
    $(".configuration li.b").mouseleave(function(){

        $(".configuration li .b1").animate({marginTop:"100%"},500)
    })
    $(".configuration li.c").mouseenter(function(){

        $(".configuration li .c1").animate({marginTop:"8%"},500)
    })
    $(".configuration li.c").mouseleave(function(){

        $(".configuration li .c1").animate({marginTop:"100%"},500)
    })

    $(".configuration li.d").mouseenter(function(){

        $(".configuration li .d1").animate({marginTop:"8%"},500)
    })
    $(".configuration li.d").mouseleave(function(){

        $(".configuration li .d1").animate({marginTop:"100%"},500)
    })
    $(".configuration li.e").mouseenter(function(){

        $(".configuration li .e1").animate({marginTop:"8%"},500)
    })
    $(".configuration li.e").mouseleave(function(){

        $(".configuration li .e1").animate({marginTop:"100%"},500)
    })

    $(".configuration li.f").mouseenter(function(){

        $(".configuration li .f1").animate({marginTop:"8%"},500)
    })
    $(".configuration li.f").mouseleave(function(){

        $(".configuration li .f1").animate({marginTop:"100%"},500)
    })



    
    $('.bannerbox1 ul li').hover(function(){
        
        move1();
    })
     $('.bannerbox2 ul li').hover(function(){
        
        move2();
    })
      $('.bannerbox3 ul li').hover(function(){
        move3();
    })
    $('.bannerbox4 div').hover(function(){
        turn();
    })
    
})
function turn(){
    if(a==0){
    $('.bannerbox4 .look').animate({opacity:0},500,function(){
         $('.bannerbox4 .f1').animate({"left":"15%",opacity:1},450,function(){
             $('.bannerbox4 .f2').animate({"top":"75%",opacity:1},450,function(){
                $('.bannerbox4 .f3').animate({"right":"30%",opacity:1},450)
             })
         })
    })
}
}
function move1(){
        if(i==0){
            //$('.fst-li').fadeIn(100).siblings().fadeOut(100);
            $('.bannerbox1 ul li').eq(i).fadeIn().siblings().fadeOut();
        $('.bannerbox1 .look').animate({opacity:0.5},500,function(){
            $('.baner-01-a').animate({"top":"200px",opacity:1},450,function(){
                $('.baner-01-b').animate({"top":"400px",opacity:1},450)
            });
        });
            i=999;
        }
        
}

function move2(){
        if(j==0){
            //$('.fst-li').fadeIn(100).siblings().fadeOut(100);
            $('.bannerbox2 ul li').eq(i).fadeIn(100).siblings().fadeOut();
            $('.bannerbox2 .look').animate({opacity:0},500,function(){
            $('.banner2-02').animate({opacity:1},300,function(){
                $('.banner2-03').animate({opacity:1},300,function(){
                    $('.banner2-01').animate({opacity:1,"left":0},300);
                });
            });
        });
            j=999;
        }
        
}
function move3(){
        if(k==0){
            //$('.fst-li').fadeIn(100).siblings().fadeOut(100);
           $('.bannerbox3 ul li').eq(i).fadeIn(100).siblings().fadeOut();

                $('.banner3-01').animate({opacity:1,"margin-left":"-65%"},225,function(){
                    $('.banner3-02').animate({opacity:1,"margin-left":"-66%"},225,function(){
                        $('.banner3-03').animate({opacity:1,"margin-left":"-63%"},225);
                    });
                });
            k=999;
        }
        
}

