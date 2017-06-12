(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {

    },
    isDev: function () {
      return !$('html')).hasClass('no-dev') || window.innerWidth < 1280;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIH0sXG4gICAgaXNEZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhJCgnaHRtbCcpLmhhc0NsYXNzKCduby1kZXYnKSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyODA7XG4gICAgfSxcbiAgICBsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICByZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHNjcm9sbDogZnVuY3Rpb24gKCkge1xuICAgIH1cbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShwYWdlLmluaXQpO1xuICAkKHdpbmRvdykub24oe1xuICAgICdsb2FkJzogcGFnZS5sb2FkLFxuICAgICdyZXNpemUnOiBwYWdlLnJlc2l6ZSxcbiAgICAnc2Nyb2xsJzogcGFnZS5zY3JvbGxcbiAgfSk7XG5cbiAgd2luZG93LmlzRGV2aWNlID0gcGFnZS5pc0RldjtcblxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuXG5cblxuXG4iXSwiZmlsZSI6ImhvbWUuanMifQ==
