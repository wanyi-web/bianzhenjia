$(function(){

    $(".ans").on("click",function(){
        document.getElementById("click").play();
        $(".ans1").attr("src","./images/" + $(this).index() + ".png");
        $(".ans2").attr("src","./images/" + $(this).index()+1 + ".png");
        
        // console.log($(this).attr("src"))
         if($(this).attr("src") == "images/C.png" || $(this).attr("src") == "images/D.png"){
            $(".box1").attr("src","./images/4-2.png");
            $(".box2").attr("src","./images/3-3.png");
         } else {
            $(".box1").attr("src","./images/4-1.png");
            $(".box2").attr("src","./images/3-2.png");
         }  
         
         $(".page1").hide();
         $(".page2").show();  
    });

    $(".ans1").on("click",function(){
        document.getElementById("err").play();
        $(".page2").hide();
        $(".page3").show();
    });

    $(".ans2").on("click",function(){
        document.getElementById("succ").play();
        $(".page2").hide();
        $(".page4").show();
    });

    $(".next").on("click",function(){
        $(".next").remove();
        $(".page2").show();
        $(".page3").hide();
    });
});