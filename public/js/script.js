	jQuery(document).ready(function(){
		jQuery('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');
			jQuery('#menu-trigger').on('click', function(){
				jQuery('#menuup').slideToggle();
			});
		});



$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).width()*80/100/1333*271) {
       $('nav').addClass('fixed-header');
        $('.main-02 ').addClass('padding');
    }
    else {
       $('nav').removeClass('fixed-header');
        $('.main-02 ').removeClass('padding');
    }
});



$(function(){
var pop = function(){
    $('body').css({'overflow':'hidden'});
    $('#greyout').css({'display': 'block', opacity: 0.7, 'width':$(document).width(),'height':$(document).height()});
    $('#form').css({'display': 'block'});
    $('#open').css({'display': 'none'});
    $('#close').css({'display': 'block'}).click(function(){$(this).css('display', 'none');$('#open').css('display', 'block');$('#form').css('display', 'none');$('#greyout').css('display','none');$('body').css('overflow','visible')});
}
$('#open').click(pop);
});

