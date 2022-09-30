$(document).ready(function(){
    $(document).on("click", ".rai-list > a", function(){
        $(".rai-sub-menu").hide("slow");
        $(this).parent("li").find(".rai-sub-menu").toggle("slow");
        return false;
        console.log("hello")
    });
    $(document).on("click", ".rai-sub-menu-li > a", function(){
        $(".rai-inner-menu").hide("slow");
        $(this).parent("li").find(".rai-inner-menu").toggle("slow");
        return false;
    });
    $(document).on("click", ".rai-sub2-menu-li > a", function(){
        $(".rai-inner2-menu").hide("slow");
        $(this).parent("li").find(".rai-inner2-menu").toggle("slow");
        return false;
    });
});