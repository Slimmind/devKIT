/* //= plugins/plugin_name.js */

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.noDev();
   
    },
    noDev: function () {
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        $('.no-dev').removeClass('no-dev');
      }
    },
    isDev: function () {
      return !$('html').hasClass('no-dev') || window.innerWidth < 1280;
    },
    load: function () {
    },
    resize: function () {
    },
    scroll: function () {
    }
  };

  $(document).ready(page.init);
  $(window).on({
    'load': page.load,
    'resize': page.resize,
    'scroll': page.scroll
  });
  
  window.isDevice = page.isDev;

})(jQuery, window, document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnbG9iYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogLy89IHBsdWdpbnMvcGx1Z2luX25hbWUuanMgKi9cblxuKGZ1bmN0aW9uICgkLCB3aW5kb3csIGRvY3VtZW50KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHBhZ2UgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgcGFnZS5ub0RldigpO1xuICAgXG4gICAgfSxcbiAgICBub0RldjogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCh0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdJRU1vYmlsZScpICE9PSAtMSkpIHtcbiAgICAgICAgJCgnLm5vLWRldicpLnJlbW92ZUNsYXNzKCduby1kZXYnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzRGV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISQoJ2h0bWwnKS5oYXNDbGFzcygnbm8tZGV2JykgfHwgd2luZG93LmlubmVyV2lkdGggPCAxMjgwO1xuICAgIH0sXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkocGFnZS5pbml0KTtcbiAgJCh3aW5kb3cpLm9uKHtcbiAgICAnbG9hZCc6IHBhZ2UubG9hZCxcbiAgICAncmVzaXplJzogcGFnZS5yZXNpemUsXG4gICAgJ3Njcm9sbCc6IHBhZ2Uuc2Nyb2xsXG4gIH0pO1xuICBcbiAgd2luZG93LmlzRGV2aWNlID0gcGFnZS5pc0RldjtcblxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcbiJdLCJmaWxlIjoiZ2xvYmFsLmpzIn0=
