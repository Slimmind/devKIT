console.log('Hello, libs');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnbG9iYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy89IGxpYnMvbGliLmpzXG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhZ2Uubm9EZXYoKTtcbiAgICB9LFxuICAgIG5vRGV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKHR5cGVvZiB3aW5kb3cub3JpZW50YXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0lFTW9iaWxlJykgIT09IC0xKSkge1xuICAgICAgICAkKCcubm8tZGV2JykucmVtb3ZlQ2xhc3MoJ25vLWRldicpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXNEZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhJCgnaHRtbCcpLmhhc0NsYXNzKCduby1kZXYnKSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyODA7XG4gICAgfSxcblxuICAgIGxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHJlc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgc2Nyb2xsOiBmdW5jdGlvbiAoKSB7XG4gICAgfVxuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KHBhZ2UuaW5pdCk7XG4gICQod2luZG93KS5vbih7XG4gICAgJ2xvYWQnOiBwYWdlLmxvYWQsXG4gICAgJ3Jlc2l6ZSc6IHBhZ2UucmVzaXplLFxuICAgICdzY3JvbGwnOiBwYWdlLnNjcm9sbFxuICB9KTtcblxuICB3aW5kb3cuaXNEZXZpY2UgPSBwYWdlLmlzRGV2O1xuXG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG5cblxuIl0sImZpbGUiOiJnbG9iYWwuanMifQ==
