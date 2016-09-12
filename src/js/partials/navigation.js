$(document).ready(function() {

    var utilite = {
        debounce : function (func, delay, immediate) {
            var timeout, result;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                    }
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, delay);
                if (callNow) {
                    result = func.apply(context, args);
                }
                return result;
            };
        }
    }

    $('.btn').on('click', function () {
        $(this).toggleClass('open');
        $('nav').toggleClass('open-nav');
    } );

    $("#cv").on('click', utilite.debounce(function (el) {
        var that = $(this);
        that.addClass('downloading');
        setTimeout(function () {
            that.removeClass('downloading');
        }, 710)
    }, 100 ));
} );