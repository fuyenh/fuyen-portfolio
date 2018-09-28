var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox--img');
var $lb = $('.lightbox');

$thumbs.on('click', 'a', function(link){
    link.preventDefault();
    var bigImg = $(this).attr('href');
    $lbImg.attr('src', bigImg);
    $lb.attr('data-state', 'visible');  
})


var $btnClose = $('.btn--close');

$btnClose.on('click','img', function(close) {
    $lb.attr('data-state', 'hidden');
})
