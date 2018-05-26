; + function($) {
    $.fn.slide = function(selector, options) {
        var config = {
            index: 0,
            timer: null,
            speed: 2000,
            max: 1,
            min: 0.3
        };
        var opts = $.extend(config, options);
        //console.log(opts);

        //把当前index的图片显示出来，其他的图片隐藏
        var core = function() {
            if (opts.index > 4) {
                opts.index = 0;
            } else if (opts.index < 0) {
                opts.index = 4;
            }
            $("#box ul li")
                .eq(opts.index)
                .css("display", "block")
                .stop()
                .siblings("li")
                .css({ "display": "none" })

        }.bind(this);
        //点击left按钮
        $(this).find(".btnleft").bind("click", function() {
            console.log(opts.index)
                --opts.index;
            core();
        });
        //点击right按钮
        $(this).find(".btnRight").bind("click", function() {
            console.log(opts.index);
            ++opts.index;
            core();
        });

        //定时器
        var start = function() {
            opts.timer = setInterval(function() {
                ++opts.index;
                core();
            }, opts.speed);
        };
        //当鼠标划入，停止定时器
        $(this).hover(function() {
            clearInterval(opts.timer);
        }, function() {
            start();
        });

    }
}(jQuery)