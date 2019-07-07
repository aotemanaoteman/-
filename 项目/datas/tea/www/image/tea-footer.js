window._JSLoader = window._JSLoader || {};

!function(){

  $('#footer-inc').replaceWith('<div class="tea-footer"/>');
    var host = window.location.host;

  $('.tea-footer').load("https://"+host+Path.root + 'public/html/inc/footer.html', function(){
    _JSLoader.loadFooter = true;

    $('.tea-footer a').each(function(){
      var $this = $(this);
      var href = $this.attr('href');
      if(href == 'javascript:;'){
        return;
      }
      // $this.attr('href', Path.root + $this.attr('href'));
    });
    
    /*
    $('.tea-footer img').each(function(){
      $(this).attr('src', Path.root + $(this).attr('src'));
    });
    */
  });

}();
