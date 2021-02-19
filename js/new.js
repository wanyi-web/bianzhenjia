$(function(){
    $(".a").on("click",function(){
        document.getElementById("click").play();
        // $(".ans1").attr("src","./images/" + $(this).index() + ".png");
        // $(".ans2").attr("src","./images/" + $(this).index()+1 + ".png");
        
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

    $(".b").on("click",function(){
        document.getElementById("click").play();
        // $(".ans1").attr("src","./images/" + $(this).index() + ".png");
        // $(".ans2").attr("src","./images/" + $(this).index()+1 + ".png");
        
        // console.log($(this).attr("src"))
         if($(this).attr("src") == "images/C.png" || $(this).attr("src") == "images/D.png"){
            $(".box1").attr("src","./images/4-2.png");
            $(".box2").attr("src","./images/3-3.png");
         } else {
            $(".box1").attr("src","./images/4-1.png");
            $(".box2").attr("src","./images/3-2.png");
         }  
         
         $(".page1").hide();
         $(".page21").show();  
    });

    $(".c").on("click",function(){
        document.getElementById("click").play();
        // $(".ans1").attr("src","./images/" + $(this).index() + ".png");
        // $(".ans2").attr("src","./images/" + $(this).index()+1 + ".png");
        
        // console.log($(this).attr("src"))
         if($(this).attr("src") == "images/C.png" || $(this).attr("src") == "images/D.png"){
            $(".box1").attr("src","./images/4-2.png");
            $(".box2").attr("src","./images/3-3.png");
         } else {
            $(".box1").attr("src","./images/4-1.png");
            $(".box2").attr("src","./images/3-2.png");
         }  
         
         $(".page1").hide();
         $(".page22").show();  
    });

    $(".d").on("click",function(){
        document.getElementById("click").play();
        // $(".ans1").attr("src","./images/" + $(this).index() + ".png");
        // $(".ans2").attr("src","./images/" + $(this).index()+1 + ".png");
        
        // console.log($(this).attr("src"))
         if($(this).attr("src") == "images/C.png" || $(this).attr("src") == "images/D.png"){
            $(".box1").attr("src","./images/4-2.png");
            $(".box2").attr("src","./images/3-3.png");
         } else {
            $(".box1").attr("src","./images/4-1.png");
            $(".box2").attr("src","./images/3-2.png");
         }  
         
         $(".page1").hide();
         $(".page23").show();  
    });
     
    $(".a0").on("click",function(){
        document.getElementById("err").play();
        $(".page2").hide();
        $(".page3").show();
    });

    $(".a01").on("click",function(){
        document.getElementById("succ").play();
        $(".page2").hide();
        $(".page4").show();
    });

    $(".a1").on("click",function(){
        document.getElementById("err").play();
        $(".page21").hide();
        $(".page31").show();
    });

    $(".a11").on("click",function(){
        document.getElementById("succ").play();
        $(".page21").hide();
        $(".page4").show();
    });

    $(".a2").on("click",function(){
        document.getElementById("err").play();
        $(".page22").hide();
        $(".page32").show();
    });

    $(".a21").on("click",function(){
        document.getElementById("succ").play();
        $(".page22").hide();
        $(".page4").show();
    });

    $(".a3").on("click",function(){
        document.getElementById("err").play();
        $(".page23").hide();
        $(".page33").show();
    });

    $(".a31").on("click",function(){
        document.getElementById("succ").play();
        $(".page23").hide();
        $(".page4").show();
    });



    // $(".ans1").on("click",function(){
    //     document.getElementById("err").play();
    //     $(".page2").hide();
    //     $(".page3").show();
    // });

    // $(".ans2").on("click",function(){
    //     document.getElementById("succ").play();
    //     $(".page2").hide();
    //     $(".page4").show();
    // });

    $(".n0").on("click",function(){
        $(".next").remove();
        $(".page2").show();
        $(".page3").hide();
    });

    $(".n1").on("click",function(){
        $(".next").remove();
        $(".page21").show();
        $(".page31").hide();
    });

    $(".n2").on("click",function(){
        $(".next").remove();
        $(".page22").show();
        $(".page32").hide();
    });

    $(".n3").on("click",function(){
        $(".next").remove();
        $(".page23").show();
        $(".page33").hide();
    });
})