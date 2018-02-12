/* //= plugins/plugin_name.js */

(function ($, window, document) {
  'use strict';
  var page = {
    init: function () {
      page.remoteFunc();
    },
    noDev: function () {
      if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
        $('.no-dev').removeClass('no-dev');
      }
    },

    remoteFunc: function () {
      // alert('remoteFunc works');
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

})(jQuery, window, document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIC8vPSBwbHVnaW5zL3BsdWdpbl9uYW1lLmpzICovXG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwYWdlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhZ2UucmVtb3RlRnVuYygpO1xuICAgIH0sXG4gICAgbm9EZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignSUVNb2JpbGUnKSAhPT0gLTEpKSB7XG4gICAgICAgICQoJy5uby1kZXYnKS5yZW1vdmVDbGFzcygnbm8tZGV2Jyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vPSBnbG9iYWwvcmVtb3RlRnVuYy5qc1xuXG4gICAgaXNEZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhJCgnaHRtbCcpLmhhc0NsYXNzKCduby1kZXYnKSB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEyODA7XG4gICAgfSxcbiAgICBsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICByZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIHNjcm9sbDogZnVuY3Rpb24gKCkge1xuICAgIH1cbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShwYWdlLmluaXQpO1xuICAkKHdpbmRvdykub24oe1xuICAgICdsb2FkJzogcGFnZS5sb2FkLFxuICAgICdyZXNpemUnOiBwYWdlLnJlc2l6ZSxcbiAgICAnc2Nyb2xsJzogcGFnZS5zY3JvbGxcbiAgfSk7XG5cbn0pKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7Il0sImZpbGUiOiJob21lLmpzIn0=
