window._JSLoader = window._JSLoader || {};

!function(){
  var $hs = $('#header-inc');
  var target =  $hs.data('target');

  $hs.replaceWith('<div class="tea-header"/>');
  var host = window.location.host;
  //alert(host+Path.root + 'public/html/inc/header.html');
  $('.tea-header').load("https://"+host+Path.root + 'public/html/inc/header.html', function(){
    _JSLoader.loadHeader = true;
    
    $('.tea-header').find('.nav .nav-item>a').eq(parseInt(target)).addClass('active');
    
    $('.tea-header a').each(function(){
      var $this = $(this);
      var href = $this.attr('href');
      if(href == 'javascript:;'){
        return;
      }
      // $this.attr('href', Path.root + $this.attr('href'));
    });

    $('.tea-header img').each(function(){
      $(this).attr('src', Path.root + $(this).attr('src'));
    });
  });
}();

