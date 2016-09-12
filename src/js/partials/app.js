$(document).ready(function () {
  function init() {
    functionName();
    popups();
    //slider();
  }

  function functionName() {
    //alert("HELLO, WORLD!");
  }
  function slider() {
    $('#carousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 210,
      itemMargin: 5,
      asNavFor: '#slider'
    });

    $('#slider').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousel"
    });
  }

  function popups() {
    $(document).on('click', ".popup-link", function () {
      console.log('popup-click');
      var linkHref = $(this).attr('href');
      var url = linkHref.slice(1);
      var dataUrl = $(this).attr('data-url');
      if (!dataUrl) {
        return;
      }
      var popupsParent = $('.popups');
      $.ajax({
        url: dataUrl,
        cache: false,
        success: function (html) {
          popupsParent.html(html);
        }
      }).done(function () {
        $.fancybox({
          'href': linkHref,
          padding: 0,
          beforeShow: function () {

          },
          afterShow: function () {

          }
        });
      });
      return false;
    });
  }

  init();
});