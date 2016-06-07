$(document).ready(function() {

    // $(document).on("click", "#learn-more-button", function(event) {
    //     event.preventDefault();
    	
        $.ajax({
            type: "GET",
            url: "https://www.googleapis.com/books/v1/volumes?q=aliceinwonderland&download=epub&key=AIzaSyDOurLWqGjklZC9qNenLp_59hQrqAmgHT4&maxResults=1",
            success: function(alice) { 
                console.log(alice.items[0].volumeInfo);
                HANDLE.renderTemplate({
                    templateSource: "#alice-template",
                    data: alice.items,
                    where: "#alice-card",
                    clearOriginal: true
                });
            },
            error: function() {
                alert("Error getting data");
            }
        });
    // });

    $(window).scroll(function() { 

        //Alice fade in and outs
        if ($(window).scrollTop() > 400) {
            $("#falling-alice").fadeIn();
         } else {
            $("#falling-alice").fadeOut("fast");
         }

        if ($(window).scrollTop() > 400) {
            $("#alice").fadeOut();
         } else {
            $("#alice").fadeIn();
         }

          if ($(window).scrollTop() > 2400) {
            $("#lamp").fadeIn();
         }
        
        //animations for other objects
        if ($(window).scrollTop() > 600) {
            $("#clock").animate({
                "left":"50px"}, "slow", "swing");
         } 

        if ($(window).scrollTop() > 1000) {
            $("#cards").animate({
                "right":"20px"}, "slow", "swing");
         } 

        if ($(window).scrollTop() > 800) {
            $("#cat").show();
         }

         //I tried this for fadeing the cat in and out, but the CSS animation worked better.
         // if ($(window).scrollTop() > 800) {
         //    $("#cat").fadeIn(5000, function() {
         //        $("#cat").fadeOut(5000);
         //    });
         // } else {
         // }

        if ($(window).scrollTop() > 1800) {
              $("#tea").animate({
                "left":"20px"}, "slow", "swing");
         } 

        if ($(window).scrollTop() > 2000) {
              $("#flowers").animate({
                "right":"30px"}, "slow", "swing");
         } 

        if ($(window).scrollTop() > 3000) {
              $("#books").animate({
                "right":"20px"}, "slow", "swing");
         } 

        if ($(window).scrollTop() > 3700) {
              $("#mirror").animate({
                "left":"10px"}, "slow", "swing");
         } 

        if ($(window).scrollTop() > 4100) {
              $("#white-rabbit").animate({
                "right":"20px"}, "slow", "swing");
         } 

    });  

    /* Scroll event handler */
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });

    //function for parallax scrolling
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $("#chair").css('top',(1000-(scrolled*.25))+'px');
        $("#lamp").css('top',(1100-(scrolled*.5))+'px');
        $("#cat").css('top',(1200-(scrolled*.75))+'px');
    }


});