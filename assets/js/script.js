function initSliders() {
    $('.slider-responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
initSliders();

$('#toggle span').click(function() {
    var ix = $(this).index();
    var indexNumber = ix === 0;

    $('#frontier').toggle( indexNumber );
    $('#classic').toggle( !indexNumber );

    $('.slider-responsive').slick("unslick");

    initSliders();
    if(!indexNumber){
        $('#frontier-text').addClass('text-gray');
        $('#classic-text').removeClass('text-gray');
    }else{
        $('#frontier-text').removeClass('text-gray');
        $('#classic-text').addClass('text-gray');
    }
});
$(".slide-down").click(function() {
    $('html,body').animate({
            scrollTop: $(".s3_belts").offset().top},
        1000);
});
$(".slide-up").click(function() {
    $('html,body').animate({
            scrollTop: $(".s3_belts").offset().top},
        1200);
});