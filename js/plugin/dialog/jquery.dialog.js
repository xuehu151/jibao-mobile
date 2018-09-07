;(function($){
    var defaultOpt = {
        closeCall:null,
        closeBtn:'.btn-close-dia'
    }
    $.fn.tipDialog = function(config){
        var opt = $.extend({},defaultOpt,config);
        var closeBtnSe = opt.closeBtn;
        var closeCallFun = opt.closeCall;
        var $this = $(this);
        setTimeout(function(){$this.show();},10);
        $(closeBtnSe,this).off().on('click',function(){
            $(this).closest('.tipDialog_overlay').hide();
            if(closeCallFun !== null)
            {
                closeCallFun();
            }
        });
        $(this).off().on('click',function(){
            $(this).hide();
        });
        $('.tipDialog_tip',this).off().click(function(e){
            e.stopPropagation();
        });
    }
    $.alert = function(content,callfun){
        var tem = '<div id="dia-overlay" style="display: block;background: rgba(0,0,0,0.6);" class="dia-overlay"><div class="dia-kuang"><div class="dia-con">'+content+'</div> <button id="btn-close-dia" class="dia-btn btn-close-dia">确定</button></div></div>';
        $('body').append(tem);

        $('#dia-overlay').off().on('click',function(){
            $(this).remove();
            if(typeof callfun != 'undefined')
            {
                callfun();
            }
        });
        $('#btn-close-dia').off().on('click',function(){
            $('#dia-overlay').trigger('click');
        });
        $('.dia-kuang').off().click(function(e){
            e.stopPropagation();
        });
    }
})(jQuery);