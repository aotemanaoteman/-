"use strict";
var $window = $(window);
var $body = $('body');

/**
 * UI类
 * @type {Object}
 */
var UI = {
  /**
   * CheckBox
   * @param  {[type]} ctx [description]
   * @return {[type]}     [description]
   */
  checkbox: function(ctx) {
    ctx.find("input[type='checkbox']").each(function() {
      var me = $(this).css('visibility', 'hidden');
      var isChecked = me.prop('checked');
      var className = me[0].className ? me[0].className : '';
      var $wrap = $("<span class='ui-checkbox icon-sp1 sp1-ui-checkbox " + className + "'></span>").css({
        'display': 'inline-block',
        '*display': 'inline',
        '*zoom': 1,
        'cursor': 'pointer',
        'vertical-align': 'middle'
      });

      if (isChecked) {
        $wrap.addClass('sp1-ui-checkbox-checked').removeClass('sp1-ui-checkbox');
      }
      var label = me.parent();
      me.wrap($wrap);


      label.find('.ui-checkbox').append('<i></i>');

      if ((label[0]).tagName.toLowerCase() == "label") {
        label.bind("click", function(event) {
          var span = $(this).find('span.ui-checkbox');
          var target = event.target;
          if (target.tagName.toLowerCase() == "input") {
            return false;
          } else {
            // console.dir(target);
            if (me.prop('checked')) {
              me.prop('checked', false);
              span.addClass('sp1-ui-checkbox').removeClass('sp1-ui-checkbox-checked');
            } else {
              me.prop('checked', true);
              span.addClass('sp1-ui-checkbox-checked').removeClass('sp1-ui-checkbox');
            }
            me.trigger('change');
            return false;
          }
        });
      } else {
        $wrap.on("click", function(e) {
          console.log('sdf')
          if (e.target.nodeName == "SPAN") {
            if (me.prop('checked')) {
              $(this).addClass('sp1-ui-checkbox').removeClass('sp1-ui-checkbox-checked');
            } else {
              $(this).addClass('sp1-ui-checkbox-checked').removeClass('sp1-ui-checkbox');
            }
            me.trigger('click');
            return false;
          }
        });
        me.on('change', function() {
          if (me.prop('checked')) {
            me.parent('span.ui-checkbox').addClass('sp1-ui-checkbox-checked').removeClass('sp1-ui-checkbox');
          } else {
            me.parent('span.ui-checkbox').addClass('sp1-ui-checkbox').removeClass('sp1-ui-checkbox-checked');
          }
        });
      }
    });
  },
  /**
   * Radio
   * @param  {[type]} ctx [description]
   * @return {[type]}     [description]
   */
  radio: function(ctx) {
    ctx.find("input[type='radio']").each(function() {
      var me = $(this).css('visibility', 'hidden');
      var name = me.attr('name');
      var isChecked = me.prop('checked');
      var className = me[0].className ? me[0].className : '';
      var $wrap = $("<span class='ui-radio icon-sp1 sp1-ui-radio " + className + "'></span>").css({
        'display': 'inline-block',
        '*display': 'inline',
        '*zoom': 1,
        'cursor': 'pointer',
        'vertical-align': 'middle'
      });
      if (isChecked) {
        $wrap.addClass('sp1-ui-radio-checked').removeClass('sp1-ui-radio');
      }
      var label = me.parent();
      me.wrap($wrap);

      label.find('.ui-radio').append('<i></i>');

      var click = function() {
        ctx.find("input:radio[name=" + name + "]").parent().addClass('sp1-ui-radio').removeClass('sp1-ui-radio-checked');
        me.parent('span.ui-radio').addClass('sp1-ui-radio-checked').removeClass('sp1-ui-radio');
      };
      if ((label[0]).tagName.toLowerCase() == "label") {
        label.bind("click", function() {
          click();
          return false;
        });
      } else {
        $wrap.on("click", function(e) {
          if (e.target.nodeName == "SPAN") {
            ctx.find('input:radio[name=' + name + ']').parent().addClass('sp1-ui-radio').removeClass('sp1-ui-radio-checked');
            if (me.prop('checked')) {
              $(this).addClass('sp1-ui-radio-checked').removeClass('sp1-ui-radio');
            }
            me.trigger('click');
            return false;
          }
        });
        me.on('change', function() {
          click();
        });
      }
    });
  },
  /**
   * 页面UI初始化
   * @return {[type]} [description]
   */
  initUI: function(context){
    var _this = this;
    setTimeout(function(){
      var $context = $(context || 'body');
      if($('.ui-select', $context).length > 0){
        // 下拉框
        $('.ui-select', $context).selectBox();
        $(".selectBox-dropdown-menu", $context).mCustomScrollbar();
      }
      if($('input[placeholder]', $context).length > 0){
        // placeholder
        $('input[placeholder]', $context).placeholder();
      }

      // 复选
      _this.checkbox($context);
      // 单选
      _this.radio($context);
    }, 0);
    return this;
  }
}

/**
 * Header
 * @type {Object}
 */
var Header = {
  flag: false,
  _init: function(){
    if(this.flag){
      return false;
    }
    this.$el = $('.tea-header');
    if(this.$el.length > 0){
      this._bindEvent();
      this.flag = true;
    }
  },
  _bindEvent: function(){
    var state = true;
    this.$el.on('click', '.quick .search', function(){
      state = false;
      var $this = $(this);
      $this.addClass('hide');
      var $quick = $(".quick",this.$el);
      var $searchBox = $('.search-box',$quick);
      $searchBox.removeClass('hide').find('input').focus();
      TweenMax.to($searchBox, 0.5, { width: 175,opacity: 1 ,onComplete:function(){
        state = true;
      }});
    }).on('click', '.search-box .search-btn', function(){
      state = false;
      var $quick = $(".quick",this.$el);
      var $searchBox = $('.search-box',$quick);
      var $search = $('.search',$quick);
      $search.removeClass('hide');
      TweenMax.to($searchBox, 0.5, {
        width: 60,
        opacity: 0,
        //当动画执行完毕
        onComplete: function () {
          $searchBox.addClass('hide');
          state = true;
        }
      });
    }).on('mouseleave', '.nav-item', function(){
      $(this).find('.nav-wrap').stop(true,false).slideUp();
    }).on('mouseover','.nav-item',function(){
      var _self_a = $(this).find('a');
      if(_self_a.hasClass('active') && (_self_a.hasClass('product-n') || _self_a.hasClass('tea-tool-n') )){
        $(this).find('.nav-wrap').stop(true,false).slideDown();
      }
    })
  }
}

var Footer = {
  flag: false,
  _init: function(){
    if(this.flag){
      return false;
    }
    this.$el = $('.tea-footer');
    if(this.$el.length > 0){
      this._bindEvent();
      this.flag = true;
    }
  },
  _bindEvent: function(){
    this.$el.on('click', '.gotop', function(){
      $('html, body').stop().animate({
        scrollTop: 0
      }, 500);
    });
    this.$el.on('click','.weixin',function(){
      $('.bg-marker,.weixin-layout').show();
    });
    this.$el.on('click','.weixin-back',function(){
      $('.bg-marker,.weixin-layout').hide();
    });
  }
}

$(function(){
  Header._init();
  Footer._init();

  UI.initUI();

  // 如果Dom 是由js文件加入来的确保事件会绑定上，
  // 这里在后端进行文件include后可以删除
  window._JSLoader = window._JSLoader || {};
  if(_JSLoader.loadHeader){
    $window.load(function(){
      Header._init();
    });
  }

  if(_JSLoader.loadFooter){
    $window.load(function(){
      Footer._init();
    });
  }
  //吸顶
  +function(){
    var header = $(".tea-header",$body);
    var headernav = $("#header-nav",$body);
    // if(headernav.size() == 0 ){
    //   $body.add(header).addClass("headroom");
    // }else{
      var top = header.height();
      $window.on("scroll",function(event){
        if($(window).scrollTop() > top){
          headernav.addClass("headroom");
          headernav.trigger('headroom.resize');
          if(!!headernav.data('hide')){
            $('.' + headernav.data('hide')).hide();
          }
        }else{
          headernav.removeClass("headroom");
        }
      });
    // }
  }();

});


// search***

var search_text = [
  {name:"普洱生茶",url:"https://www.xiaoguantea.com/index.php?r=product/puersheng/"},
  {name:"普洱熟茶",url:"https://www.xiaoguantea.com/index.php?r=/product/puershu/"},
  {name:"西湖龙井",url:"https://www.xiaoguantea.com/index.php?r=/product/longjing/"},
  {name:"武夷大红袍",url:"https://www.xiaoguantea.com/index.php?r=/product/wuyi/"},
  {name:"清香铁观音",url:"https://www.xiaoguantea.com/index.php?r=/product/qingxiang/"},
  {name:"浓香铁观音",url:"https://www.xiaoguantea.com/index.php?r=/product/nongxiang/"},
  {name:"黄山毛峰",url:"https://www.xiaoguantea.com/index.php?r=/product/huangshan/"},
  {name:"茉莉花茶",url:"https://www.xiaoguantea.com/index.php?r=/product/molihua/"},
  {name:"滇红",url:"https://www.xiaoguantea.com/index.php?r=/product/dianhong/"},
  {name:"福鼎白茶",url:"https://www.xiaoguantea.com/index.php?r=/product/fuding/"},
  {name:"高山乌龙",url:"https://www.xiaoguantea.com/index.php?r=/product/gaoshan/"},
  {name:"洞顶乌龙",url:"https://www.xiaoguantea.com/index.php?r=/product/dongding/"},
  {name:"邹炳良",url:"https://www.xiaoguantea.com/index.php?r=/great/zhoubingliang/"},
  {name:"王顺明",url:"https://www.xiaoguantea.com/index.php?r=/great/wangshunming/"},
  {name:"戚国伟",url:"https://www.xiaoguantea.com/index.php?r=/great/qiguowei/"},
  {name:"高碰来",url:"https://www.xiaoguantea.com/index.php?r=/great/gaopenglai/"},
  {name:"谢四十",url:"https://www.xiaoguantea.com/index.php?r=/great/xiesishi/"},
  {name:"林乃荣",url:"https://www.xiaoguantea.com/index.php?r=/great/linnairong/"},
  {name:"林振传",url:"https://www.xiaoguantea.com/index.php?r=/great/linzhenchuan/"},
  {name:"张成仁",url:"https://www.xiaoguantea.com/index.php?r=/great/zhangchengren/"},
  {name:"长官杯",url:"https://www.xiaoguantea.com/index.php?r=teatool/zhangguanbei/"},
  {name:"行政套装",url:"https://www.xiaoguantea.com/index.php?r=teatool/xingzhengtaobei/"},
  {name:"功夫套装",url:"https://www.xiaoguantea.com/index.php?r=teatool/gongfutaobei/"},
  {name:"真皮便携包",url:"https://www.xiaoguantea.com/index.php?r=teatool/bianxiebao/"},
  {name:"旅行泡茶杯",url:"https://www.xiaoguantea.com/index.php?r=teatool/lvxingbei/"},

];

function search(s){
  if(!s) return false;
  var end = [];
  $.each(search_text,function(index,value){
    var len = value['name'].match(s);
    if(len && len != -1)
    end.push(value);
  });

  var template = '';
  $.each(end,function(index,value){
    template += '<div class="item">'
    template += '<span class="title">'+value.name+'</span>'
    template += '<a class="url" href="'+value.url+'" style="text-decoration: none;">'+value.url+'</a>'
    template += '<div></div>'
    template += '</div>'
  });
  $('.search-page').append(template);
  $('.more').text('您搜索的 小罐茶 有'+ end.length +'条结果');
}

var $search_box = $('.search-box');

$('.search-btn',$search_box).click(function(){
  var val;
  if($('input',$search_box).length == 2){
    val = $('input',$search_box).eq(0).val() ? $('input',$search_box).eq(0).val() : $('input',$search_box).eq(1).val()
  }else{
    var val = $('input',$search_box).val();
  }
  search(val);
});

function getParam() {
 var url = location.search; //获取url中"?"符后的字串
  var param = {};
  if (url.indexOf("?") != -1) {
     var str = url.substr(1);
     strs = str.split("&");
     for(var i = 0; i < strs.length; i ++) {
        param[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
     }
  }
  return param;
}
