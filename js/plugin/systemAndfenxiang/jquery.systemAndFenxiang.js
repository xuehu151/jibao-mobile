;(function($){
    /*已经写到commonjs*/
/*    $.getSystemInfo = function(){
        var system;
        var fenxiangSource;

        var browser = {

            versions: function () {

                var u = navigator.userAgent, app = navigator.appVersion;

                return {         //移动终端浏览器版本信息

                    trident: u.indexOf('Trident') > -1, //IE内核

                    presto: u.indexOf('Presto') > -1, //opera内核

                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核

                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核

                    mobile: !!u.match(/AppleWebKit.*Mobile.*!/), //是否为移动终端

                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端

                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器

                    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器

                    iPad: u.indexOf('iPad') > -1, //是否iPad

                    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部

                };

            }(),

            language: (navigator.browserLanguage || navigator.language).toLowerCase()

        }

        function getParam(){
            var url = location.search;
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
                }
            }
            return theRequest;
        }

        var params = getParam();


        if (browser.versions.mobile)
        {//判断是否是移动设备打开。browser代码在下面

            var ua = navigator.userAgent.toLowerCase();//获取判断用的对象

            system = 'mobile';

            if (ua.match(/MicroMessenger/i) == "micromessenger" && ( params['from'] == 'timeline' || params['from'] == 'groupmessage' || params['from'] == 'singlemessage')) {

                //在微信中打开
                fenxiangSource = 'wx';
            }

            else if (ua.match(/WeiBo/i) == "weibo") {

                //在新浪微博客户端打开
                fenxiangSource = 'wb';
            }
            else {

                fenxiangSource = 'other';
            }
        }
        else
        {
            //否则就是PC浏览器打开
            system = 'PC';
        }

        return {system:system,fenxiangSource:fenxiangSource};
    }*/
})(jQuery);


