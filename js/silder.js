var $links = $(".itemLinks");

$links.click(function(e) {
    $links.removeClass("active");
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translatevalue = "translate3d(" + position * 25 + "%)";
    $("#wrapper").css({
        transform: translatevalue
    });

    clickedLink.addClass("active");

});
$($links[0]).addClass("active");