
$(document).ready(function() {
        $("#nav").load("nav.html", function(){
        var path = window.location.href; 
        console.log(path);

        $("#nav .navigation__item a").on('mouseover', function(){
            $(this).addClass('nav--hover');
            });
            $(".text").on('mouseout', function(){
            $(this).removeClass('nav--hover');
            });
                    
            $('.navigation__list a').each(function() {        
                if (this.href == path) {
                $(this).closest('li').addClass('active');
                $(this).off('mouseover mouseout');      
            }
            });                            
    });
    
    $("#footer").load("footer.html");
 
    /* Navigation Scroll */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }    
     });  
     
     
     /* Animation on scroll*/
    $('.js--wp-1').waypoint(function(direction){
            if (direction === 'down'){
                $('.js--wp-1').addClass('bounceIn');
                $('.js--wp-1').removeClass('swing');
                $('.hello').fadeTo( "slow", 1 );                               
            }   
            else if (direction ==='up') {
                $('.js--wp-1').removeClass('bounceIn'); 
                $('.js--wp-1').addClass('swing');
                $('.hello').fadeTo( "slow", 0 );  
            }     
        }, {offset: '78%'}
        );


});




//HIDE HOVER VIDEO TIMELINE UI//
//document.getElementById('me-video').controls = false;




