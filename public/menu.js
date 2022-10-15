$( document ).ready( function() {

    $(".card").on("click", function() {

        $(".card").removeClass("selected-card");
        $(".options").hide();
        $(this).addClass("selected-card");
        $(this).find(".options").show();

    });

    $(".opt-button").on("click", function() {

        if ( $(this).hasClass("selected-button") ) {
            $(this).removeClass("selected-button");
        } else {
            if ( $(this).parents().hasClass("opt-grid") ) {
                console.log("got it");
                $(this).parent().siblings().find("button").removeClass("selected-button");
            };
            $(this).addClass("selected-button");
        };

    });       






});
