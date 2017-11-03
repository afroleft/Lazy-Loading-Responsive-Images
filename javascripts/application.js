$(document).ready(function(){

  // IE image scaling
  imgSizer.collate();

  $("img.lazy").lazyload({ 
    effect : "fadeIn"
  });  


}); // end document ready