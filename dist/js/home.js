(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      console.log('hello!');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyEnKTtcbiAgICB9LFxuICAgIGlzRGV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISQoJ2h0bWwnKS5oYXNDbGFzcygnbm8tZGV2JykgfHwgd2luZG93LmlubmVyV2lkdGggPCAxMjgwO1xuICAgIH0sXG4gICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzY3JvbGw6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkocGFnZS5pbml0KTtcbiAgJCh3aW5kb3cpLm9uKHtcbiAgICAnbG9hZCc6IHBhZ2UubG9hZCxcbiAgICAncmVzaXplJzogcGFnZS5yZXNpemUsXG4gICAgJ3Njcm9sbCc6IHBhZ2Uuc2Nyb2xsXG4gIH0pO1xuXG4gIHdpbmRvdy5pc0RldmljZSA9IHBhZ2UuaXNEZXY7XG5cbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cblxuXG5cblxuIl0sImZpbGUiOiJob21lLmpzIn0=
