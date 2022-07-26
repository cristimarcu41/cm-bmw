$('#search').click(function(){
    $('#search-field').removeClass('hidden');
    $('#search-field').addClass('shown');
});

$('#close').click(function(){
    $('#search-field').removeClass('shown');
    $('#search-field').addClass('hidden');
}) 



// $(document).ready(function(){
//     $('.slider-hybrid').slick({
//         nextArrow: '<div class="right"><i class="fa fa-angle-right fa-2x"></i></div>',
//         prevArrow: '<div class="left"><i class="fa fa-angle-left fa-2x"></i></div>',
//         autoplay: true,
//         dots:true,
//         // autoplaySpeed:500,
//         fade: true,
//         // adaptiveHeight: true,
//         cssEase: 'ease-out',
//         asNavFor: ".slideri",
//         customPaging: function(slider, i) {
//             return '<div class="pager__item" id=' + i + "> </div>";
//         }
//     });

//     });

