

/* NAV */

$(document).ready(function(){
    // menu show
    $(".ri-menu-line").click(function(){
        $("nav").css("top", "0%")
    })
    // menu close
    $(".closemenu").click(function(){
        $("nav").css("top", "-100%")
    })
})

