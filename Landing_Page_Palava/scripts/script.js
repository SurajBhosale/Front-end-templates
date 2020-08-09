// pause onhover stoping slideshow

$('.carousel').carousel({
    pause: "false"
});

// arrange content wrt amenities

function showamenity(){
    if($("#amenities .amenity1").hasClass("active")){
        $("#amenities #info1").removeClass("d-none");
    }else{
        $("#amenities #info1").addClass("d-none");
    }
    if($("#amenities .amenity2").hasClass("active")){
        $("#amenities #info2").removeClass("d-none");
    }else{
        $("#amenities #info2").addClass("d-none");
    }
    if($("#amenities .amenity3").hasClass("active")){
        $("#amenities #info3").removeClass("d-none");
    }else{
        $("#amenities #info3").addClass("d-none");
    }
    if($("#amenities .amenity4").hasClass("active")){
        $("#amenities #info4").removeClass("d-none");
    }else{
        $("#amenities #info4").addClass("d-none");
    }
    setTimeout(showamenity,10);
}

showamenity();

// function to fix navbar at top

function scrollandfix(){
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height  > 80) {
            $("nav").addClass("fixed-top");
        }else{
            $("nav").removeClass("fixed-top");
        }
    });
    setTimeout(scrollandfix,10);
}

scrollandfix();

// animate smooth scrolling for nav links

$("nav li a").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 40
            }, 800
        );
    }
});