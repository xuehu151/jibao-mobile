;(function($){
    var defaultOpt = {
        callFun:null
    }
    $.fn.extend({
        'tabs':function(config){
            var $that = $(this);

            $('li:not(.nav-item-marker) a',this).click(function(){
                var cfg = $.extend({},defaultOpt,config)
                var callFun = cfg.callFun;
                var $this = $(this);

                if(!$this.parent('li').hasClass('nav-item-active'))
                {
                    $this.parent('li').addClass('nav-item-active').siblings().removeClass('nav-item-active');

                    if(callFun !== null )
                    {
                        callFun($this,$that);
                    }
                    // $.tabMarkerPosRefresh($this,$that);
                }
            });

            $('.nav-item:first-child a',this).click();
            // var mll = $('li:first-child',this).width();
            // $that.css('margin-left',-mll/2);
        }
    });
    // $.tabMarkerPosRefresh = function($this,$that){
    //     var posl = $this.parent('li').position().left;
    //     var ml = parseInt($this.parent('li').css('margin-left'));
    //     var thisWidth = $this.width();
    //
    //     $('.nav-item-marker',$that).css({left:posl+ml+thisWidth/2});
    // }
})(jQuery);