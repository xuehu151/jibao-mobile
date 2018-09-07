;(function($){
    $.extend({
        showLoading:function(id){
            var id = id || 'loading-overlay';
            // alert(id)
            var tem = '<div id="'+id+'" class="loading-overlay">'+
                '<svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
                '<g id="circle" class="g-circles g-circles--v3">'+
                '<circle id="12" transform="translate(35, 16.698730) rotate(-30) translate(-35, -16.698730) " cx="35" cy="16.6987298" r="10"></circle>'+
                '<circle id="11" transform="translate(16.698730, 35) rotate(-60) translate(-16.698730, -35) " cx="16.6987298" cy="35" r="10"></circle>'+
                '<circle id="10" transform="translate(10, 60) rotate(-90) translate(-10, -60) " cx="10" cy="60" r="10"></circle>'+
                '<circle id="9" transform="translate(16.698730, 85) rotate(-120) translate(-16.698730, -85) " cx="16.6987298" cy="85" r="10"></circle>'+
                '<circle id="8" transform="translate(35, 103.301270) rotate(-150) translate(-35, -103.301270) " cx="35" cy="103.30127" r="10"></circle>'+
                '<circle id="7" cx="60" cy="110" r="10"></circle>'+
                '<circle id="6" transform="translate(85, 103.301270) rotate(-30) translate(-85, -103.301270) " cx="85" cy="103.30127" r="10"></circle>'+
                '<circle id="5" transform="translate(103.301270, 85) rotate(-60) translate(-103.301270, -85) " cx="103.30127" cy="85" r="10"></circle>'+
                '<circle id="4" transform="translate(110, 60) rotate(-90) translate(-110, -60) " cx="110" cy="60" r="10"></circle>'+
                '<circle id="3" transform="translate(103.301270, 35) rotate(-120) translate(-103.301270, -35) " cx="103.30127" cy="35" r="10"></circle>'+
                '<circle id="2" transform="translate(85, 16.698730) rotate(-150) translate(-85, -16.698730) " cx="85" cy="16.6987298" r="10"></circle>'+
                '<circle id="1" cx="60" cy="10" r="10"></circle>'+
                '</g>'+
                '</svg></div>';
            if(!$('#'+id).length)
            {
                $('body').append(tem);
                $('#'+id).show();
            }
        },
        hideLoading:function(id){
            var id = id || 'loading-overlay';
            $('#'+id).remove();
        }
    })
})(jQuery);
;(function($){
    $.getSystemInfo = function(){
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

                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端

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

            // system = 'mobile';
            system = 1;

            if (ua.match(/MicroMessenger/i) == "micromessenger" && ( params['from'] == 'timeline' || params['from'] == 'groupmessage' || params['from'] == 'singlemessage')) {

                //在微信中打开
                // fenxiangSource = 'wx';
                fenxiangSource = 0;
            }

            else {

                fenxiangSource = 1;
            }
        }
        else
        {
            //否则就是PC浏览器打开
            // system = 'PC';
            system = 0;
        }

        return {accForm:system,accType:fenxiangSource};
    }
})(jQuery);
;(function() {

    var jb = {

        //这里改ip
        // apiurl:'http://10.0.10.72:8080/keppel/api/',
        
        //接口测试地址
        apiurl:'http://jibao.3tichina.com/keppel/api/',
        // apiurl:'http://mscjb.keppellandchina.com/keppel/api/',

        /*微博相关*/
        loginWbUri:'http://mscjb.keppellandchina.com/page/userform/login.html',

        bindWbUri:'http://mscjb.keppellandchina.com/page/user/user.html',

        loginWbReUri:'http://mscjb.keppellandchina.com/page/index/index.html',

        loginWbKey:'2178627475',

        loginWbSecret:'19583ff06daf6a5521b2fb132fe00062',

        /*腾讯登录*/
        loginTxID:'1106878191',

        loginTxKey:'onNOsz3bvWxDCmf0',

        huansuanPx : $('html').css('fontSize')/40,

        registerContent:'<div><p style="margin:1rem 0pt"> <span style=" font-size:0.8rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.8rem; font-weight:bold">网站</span><span style=" font-size:0.8rem; font-weight:bold">服务使用协议</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">1. 特别提示</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">1.1</span><br /><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">同意按照本协议的规定及其不时发布的操作规则向用户提供</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务，为获得</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务使用人（以下称"用户"）需在认真阅读及独立思考的基础上认可、同意本协议的全部条款（特别是以加粗方式提示用户注意的条款）并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击"同意" 按钮（或实际使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务）即表示用户完全接受本服务协议。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">1.2</span><br /><span style=" font-size:0.6rem">用户注册成功后，</span><a name="OLE_LINK13"></a><a name="OLE_LINK14"><span style=" font-size:0.6rem">“思创吉宝”</span><span style="-aw-bookmark-end:OLE_LINK13"></span></a><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台将为用户基于使用</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的客观需要而在申请、注册</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务时，按照注册要求提供的</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">开通</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务，用户有权在</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台为其开通并同意向其提供服务的基础上使用</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务。同时，用户同意：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">1.2.1 用户应妥善保管</span><a name="OLE_LINK3"></a><a name="OLE_LINK4"><span style=" font-size:0.6rem">“思创吉宝”</span><span style="-aw-bookmark-end:OLE_LINK3"></span></a><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">及密码，未经</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台同意，用户不得擅自买卖、转让、出租任何</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">或</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">昵称。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">1.2.2 用户使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务过程中，须对自身使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的行为</span><span style=" font-size:0.6rem">、</span><span style=" font-size:0.6rem">对任何由用户通过</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务发布</span><span style=" font-size:0.6rem">或</span><span style=" font-size:0.6rem">公开的信息及对由此产生的任何后果承担全部责任。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">1.2.3 用户提交、发布或显示的信息将对其他</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务用户及第三方服务及网站可见(用户可通过设置功能自行控制、把握可查阅其信息的</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">类型)。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">1.3</span><br /><span style=" font-size:0.6rem">未经</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台事先书面许可，用户不得自行授权任何第三方使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">内容，包括但不限于自行授权任何第三方发表、复制、转载、更改、引用、链接、下载、同步或以其他方式使用部分或全部</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">内容等。 </span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">1.4</span><br /><span style=" font-size:0.6rem">用户同意并授权</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台以</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台名义就侵犯用户合法权益的行为（包括但不限于私自复制、使用、编辑、抄袭、在第三方平台上再次发布</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">内容等行为）采取任何形式的法律行为，包括但不限于投诉、诉讼等必要的维权措施。 </span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">1.5</span><br /><a name="OLE_LINK1"></a><a name="OLE_LINK2"><span style=" font-size:0.6rem">“思创吉宝”</span><span style="-aw-bookmark-end:OLE_LINK1"></span></a><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台有权直接将本服务或本协议项下权利义务委托给</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台的关联公司或其他第三方公司进行运营、管理及履行，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台无需就此向用户另行获取授权。</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台将竭尽避免前述委托或变更给用户使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务造成的不便，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台届时将尽量及时通过网站、平台、私信、邮件等方式进行通知。本协议中，关联公司是指控制某一方的、或被某一方所控制的、或与某一方共同受控制于同一实体的任何企业。控制是指直接或间接拥有该企业百分之五十（50％）以上的投票权或管理权。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">1.6</span><br /><span style=" font-size:0.6rem; font-weight:bold">为提高用户的</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站服务使用感受和满意度，用户同意无偿授权</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站平台以任何形式（商业或非商业）将基于用户的操作行为对用户数据进行调查研究和分析，从而进一步优化</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站服务。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">2. 服务内容</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">2.1</span><br /><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的具体内容由</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台根据实际情况提供，包括但不限于授权用户通过其</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">，使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务发布观点、评论、图片、</span><span style=" font-size:0.6rem">转发链接</span><span style=" font-size:0.6rem">等，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台有权对其提供的服务或产品形态进行升级或其他调整，并将及时更新页面/告知用户。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">2.2</span><br /><span style=" font-size:0.6rem">用户理解，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台仅提供与</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务相关的技术服务等，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">3. 服务变更、中断或终止</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.1</span><br /><span style=" font-size:0.6rem">鉴于网络服务的特殊性（包括但不限于服务器的稳定性问题、恶意的网络攻击等行为的存在及其他</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台无法控制的情形），用户同意</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台有权随时中断或终止部分或全部的</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务（包括收费网络服务），若发生该等中断或中止</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的情形，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台将尽可能及时通过网页公告、系统通知、私信、短信提醒或其他合理方式通知受到影响的用户。如因</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台原因致使收费性</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务中断或终止的，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台将该用户剩余虚拟货币退还用户的虚拟货币账户或向受影响的用户提供等值的替代性的收费网络服务。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.2</span><br /><span style=" font-size:0.6rem">用户理解，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台需要定期或不定期地对提供</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的平台（如互联网网站、应用程序等）或相关的设备进行检修或者维护，如因此类情况而造成服务在合理时间内的中断，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台无需为此承担任何责任，但</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台应尽可能事先进行通告。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.3</span><br /><span style=" font-size:0.6rem">如发生下列任何一种情形，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台有权随时中断或终止向用户提供本协议项下的</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务（包括收费服务和免费服务）而无需对用户或任何第三方承担任何责任，由此造成的损失由用户自行独立承担：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.3.1 用户提供的个人资料不真实；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.3.2 用户违反法律法规</span><span style=" font-size:0.6rem">相关规定</span><span style=" font-size:0.6rem">或本协议中规定的使用规则；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.3.3 用户在使用收费服务时未按规定为其所使用的收费服务支付相关服务费用；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.3.4 用户侵犯公民个人、社会组织、企事业单位合法权益的，包括但不限于侮辱、诽谤、谩骂公民个人，诋毁社会组织或企事业商誉或信誉</span><span style=" font-size:0.6rem">，</span><span style=" font-size:0.6rem">侵犯他人著作权、商标权等知识产权或隐私权</span><span style=" font-size:0.6rem">等；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.3.5 用户损害监管部门、国家机关及政府形象；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.3.6 用户以任何方式损害</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及其关联公司的商誉或信誉等合法权益；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.3.</span><span style=" font-size:0.6rem">7</span><span style=" font-size:0.6rem"> 用户实施</span><span style=" font-size:0.6rem">干扰本站的正常运转，侵入本站及国家计算机信息系统</span><span style=" font-size:0.6rem">的行为；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.3.</span><span style=" font-size:0.6rem">8</span><span style=" font-size:0.6rem"> </span><span style=" font-size:0.6rem">其他</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台认为需要中断或终止向用户提供</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.4</span><br /><span style=" font-size:0.6rem">如用户在申请开通</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务后在任何连续90日内未实际使用，则</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台有权选择采取以下任何一种方式进行处理：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.4.1 回收用户昵称；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.4.2 回收用户</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">，或停止为该用户提供</span><a name="OLE_LINK5"></a><a name="OLE_LINK6"><span style=" font-size:0.6rem">“思创吉宝”</span><span style="-aw-bookmark-end:OLE_LINK5"></span></a><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.5</span><br /><span style=" font-size:0.6rem">用户选择将</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">与</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">合作的第三方</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">进行绑定的，除用户自行解除绑定关系外，如发生下列任何一种情形，用户已绑定的第三方</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">也有可能被解除绑定，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台无需对用户或任何第三方承担任何责任：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.5.1 用户违反法律法规</span><span style=" font-size:0.6rem">相关规定</span><span style=" font-size:0.6rem">、本协议的；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.5.2 用户违反第三方用户协议或其相关规定的；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.5.3 第三方账户所属的站方要求解除绑定的；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.5.4 第三方账户所述平台或业务已关停的；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.5.5 依据法律法规、政策规定、或主管部门要求的；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">3.5.6 </span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台认为需要解除绑定的。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">4. 使用规则</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.1</span><br /><span style=" font-size:0.6rem">用户可自行编辑注册信息中的</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">名称、昵称、头像、简介等（以下简称“</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">信息”），但应遵守“七条底线”以及相关管理规定，不得含有违法和不良信息。</span><br /><span style=" font-size:0.6rem">用户注册</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">，制作、发布、传播信息内容的，应当使用真实身份信息及个人资料，不得以虚假、冒用的居民身份信息、企业注册信息、组织机构代码信息进行注册；若用户的个人资料有任何变动，用户应及时更新。</span><br /><span style=" font-size:0.6rem">未经相关权利人授权，用户不得以他人或其他组织机构名义注册</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">，亦不得使用引人误解的</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">信息注册</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">，包括但不限于让人误认为该</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">与某社会名人或机构组织存在关联关系的名称、头像或简介等。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.2</span><br /><span style=" font-size:0.6rem">新闻媒体和政务机关开设</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号的，除根据本协议约定使用</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务以外，还应遵守相关法律法规、组织规则及监管规定。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.2.1 媒体账号，是指具有法定新闻资质的新闻单位在</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">上开设的机构认证账号。媒体账号在使用</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务时应当接受新闻主管部门和网信部门的统一管理。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.2.2 政务账号，是指各级党政机关、民主党派、人民团体开设的机构认证账号。政务账号在使用</span><span style=" font-size:0.6rem">“</span><span style=" font-size:0.6rem">思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务时应当接受网信部门的统一管理，并根据自身的职责、章程和上级单位的管理要求进行管理。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.3</span><br /><span style=" font-size:0.6rem">用户知悉并同意，以下信息一经用户提交确认则无法更改，因内容瑕疵（包括但不限于错误，不完整、不满意等）所造成的损失及后果由用户独立承担：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.3.1 </span><a name="OLE_LINK7"></a><a name="OLE_LINK8"><span style=" font-size:0.6rem">“思创吉宝”</span><span style="-aw-bookmark-end:OLE_LINK7"></span></a><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">个性域名；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.3.2 </span><a name="OLE_LINK9"></a><a name="OLE_LINK10"><span style=" font-size:0.6rem">“思创吉宝”</span><span style="-aw-bookmark-end:OLE_LINK9"></span></a><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台规定的确定后无法修改的</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">信息。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.3.3</span><span style=" font-size:0.6rem">用户通过账号</span><span style=" font-size:0.6rem">+密码登录本网站</span><span style=" font-size:0.6rem">实施的一切行为</span><span style=" font-size:0.6rem">，均视为用户亲自</span><span style=" font-size:0.6rem">实施</span><span style=" font-size:0.6rem">的</span><span style=" font-size:0.6rem">行为</span><span style=" font-size:0.6rem">，由用户承担因此所导致的相关后果和责任，包括但不限于费用的支付</span><span style=" font-size:0.6rem">（若有）。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.4</span><br /><span style=" font-size:0.6rem; font-weight:bold">如用户违反前述约定，依据相关法律、法规及</span><span style=" font-size:0.6rem; font-weight:bold">相关规定的</span><span style=" font-size:0.6rem; font-weight:bold">要求，</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站平台有权随时采取不予注册、通知限期改正、注销登记用户</span><span style=" font-size:0.6rem; font-weight:bold">账号</span><span style=" font-size:0.6rem; font-weight:bold">、中止或终止用户对</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站服务的使用等措施，并有权向相关主管部门报告</span><span style=" font-size:0.6rem">。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.5</span><br /><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台将建立健全用户信息安全管理制度、落实技术安全防控措施。</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台将对用户使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务过程中涉及的用户隐私内容加以保护。</span><br /><span style=" font-size:0.6rem">对于用户在</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">中发表或存储的</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">内容，用户应当自行不定期进行备份。用户在使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务期间及终止使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务后，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台均无义务向用户返还或提供任何数据或</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">内容。 </span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.6</span><br /><span style=" font-size:0.6rem">为维护</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台的稳定运营，确保用户体验质量，未经</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台事先书面许可，任何人不得擅自在</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台上实施自动化行为或发布垃圾信息。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.6.1 自动化行为，是指以用户自行或委托他人采用自动化手段或明显异于常人的、远高于正常用户频率地发布</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">、评论、私信、头条文章或作出关注、点赞、抓取数据等的行为。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.6.2 垃圾信息，是指未经</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台同意，擅自使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">（包括通过作弊手段批量注册的</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">、普通</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">等）在</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">、评论、私信、</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">信息、头条文章、群聊内容中发布的营销信息、无意义信息或卖粉信息。</span><br /><span style=" font-size:0.6rem">用户知悉并同意，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台有权根据技术规则通过检测验证等方式判断用户</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">行为是否构成自动化行为、用户</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">所发布的信息是否为垃圾信息，并采取相关措施予以处理。所有处理措施所依据的数据及信息（包括但不限于</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">操作记录、</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">内容、转评赞等）均以</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台后台记录为准。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.7</span><br /><span style=" font-size:0.6rem">由于</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的存在前提是用户在申请开通</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的过程中所提供的</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">，则用户不应将其</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">、密码转让或出借予他人使用。如用户发现其</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">或</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务遭他人非法使用，应立即通知</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台。因黑客行为或用户的保管疏忽等非</span><a name="OLE_LINK11"></a><a name="OLE_LINK12"><span style=" font-size:0.6rem">“思创吉宝”</span><span style="-aw-bookmark-end:OLE_LINK11"></span></a><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台原因导致</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">、密码及</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务遭他人非法使用，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台</span><span style=" font-size:0.6rem">不</span><span style=" font-size:0.6rem">承担任何责任。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">“思创吉宝”网站</span><span style=" font-size:0.6rem">将采取相应的措施来保证用户的帐户和交易安全，但不保证其绝对安全。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.8</span><br /><span style=" font-size:0.6rem; font-weight:bold">用户同意</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站平台在提供</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站服务过程中以各种方式投放各种商业性广告或其他任何类型的商业信息（包括但不限于在</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站平台网站的任何页面上投放广告），并且，用户同意接受</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站平台通过电子邮件、私信或其他方式向用户发送商品促销或其他相关商业信息。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.9</span><br /><span style=" font-size:0.6rem; font-weight:bold">用户知悉、理解并同意授权</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站平台及其关联公司可在全球范围内、完全免费、可转授权地使用用户通过</span><span style=" font-size:0.6rem; font-weight:bold">“思创吉宝”</span><span style=" font-size:0.6rem; font-weight:bold">网站发布的内容，前述内容包括但不限于文字、图片、视频等。</span><span style=" font-size:0.6rem">具体来说，可能会包括：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.9.1 将前述内容通过</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">自身或其他第三方技术、网络等在</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台选择的网络平台、应用程序或产品中，以有线或无线网，通过免费或收费的方式在不同终端（包括但不限于电脑、手机、互联网电视、机顶盒及其他上网设备等）以不同形式（包括但不限于点播、直播、下载等）进行网络传播或电信增值服务等；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.9.2 将前述内容复制、翻译、编入</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台当前已知或以后开发的作品、媒体或技术中，用于</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">相关用途开发或推广宣传等；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.9.3 将前述内容授权给电台、电视台、网络媒体、运营商平台等与</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台有合作的媒体或运营商播放、传播，用于</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">相关推广宣传等；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.9.4 其他</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及其关联公司出于善意或另行取得用户授权的使用行为。</span><br /><span style=" font-size:0.6rem">用户对</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及其关联公司的前述授权并不改变用户发布内容的所有权及知识产权归属，也并不影响用户行使其对发布内容的合法权利；</span><br /><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台将尽最大的商业努力合理使用用户的授权内容，但并不代表</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及其关联公司承诺一定会使用。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.10</span><br /><span style=" font-size:0.6rem">用户在使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的过程中应文明发言，并依法尊重其它用户的人格权与身份权等人身权利，共同建立和谐、文明、礼貌的网络社交环境。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11</span><br /><span style=" font-size:0.6rem">用户在使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务过程中，必须遵循以下原则：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.1 不得违反中华人民共和国法律法规及相关国际条约或规则；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.2 不得违反与网络服务、</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务有关的网络协议、规定、程序及行业规则；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.3 不得违反法律法规、社会主义制度、国家利益、公民合法权益、公共秩序、社会道德风尚和信息真实性等“七条底线”要求；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.4 不得进行任何可能对互联网或移动网正常运转造成不利影响的行为；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.5 不得上传、展示或传播任何不实虚假、冒充性的、骚扰性的、中伤性的、攻击性的、辱骂性的、恐吓性的、种族歧视性的、诽谤诋毁、泄露隐私、成人情色、恶意抄袭的或其他任何非法的信息资料；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.6 不得以任何方式侵犯他人依法享有的专利权、著作权、商标权等知识产权，或姓名权、名称权、名誉权、荣誉权、肖像权、隐私权等人身权益，或其他任何合法权益；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.7 不得以任何方式侵犯公民个人、社会组织、企事业单位合法权益的，包括但不限于侮辱、诽谤、谩骂公民个人，诋毁社会组织或企事业商誉或信誉等；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.8 不得以任何方式损害各级国家机关及政府形象；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.9 不得以任何方式损害</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及其关联公司的商誉或信誉等合法权益；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.10不得从事其他任何影响</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台正常运营、破坏</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台经营模式或其他有害</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台生态的行为。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.11.11不得为其他任何非法目的而使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.12</span><br /><span style=" font-size:0.6rem">针对某些特定的</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的使用规则及说明，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台将通过各种方式（包括但不限于网页公告、系统通知、私信、短信提醒等）作出的任何声明、通知、警示等内容视为本协议的一部分，用户如使用该等</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务，视为用户同意该等声明、通知、警示的内容。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">4.13</span><br /><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台有权对用户使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的行为及信息进行审查、监督及处理，包括但不限于用户信息（</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">信息、个人信息等）、发布内容（位置、文字、图片、音频、视频、商标、专利、出版物等）、用户行为（评论、</span><span style=" font-size:0.6rem">转发</span><span style=" font-size:0.6rem">、</span><span style=" font-size:0.6rem">参与话题、参与活动等）等范畴。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">&#xa0;</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">5. 知识产权</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">5.1</span><br /><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台是</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台和</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">产品的所有权及知识产权权利人。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">5.2</span><br /><span style=" font-size:0.6rem">上述</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">产品指的是</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台、或其关联公司、或其授权主体等通过</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台为用户提供的包括但不限于信息发布分享、关系链拓展、便捷辅助工具、平台应用程序、公众开放平台等功能、软件、服务等。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">5.3</span><br /><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台是</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">产品中所有信息内容的所有权及知识产权权利人。前述信息内容包括但不限于程序代码、界面设计、版面框架、数据资料、</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">、文字、图片、图形、图表、音频、视频等，除按照法律法规规定应由相关权利人享有权利的内容以外。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">5.4</span><br /><span style=" font-size:0.6rem">用户在使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台的过程中，可能会使用到由第三方针对</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务开发的在</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台运行的功能、软件或服务，用户除遵守本协议相关规定以外，还应遵守第三方相关规定，并尊重第三方权利人对其功能、软件、服务及其所包含内容的相关权利。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">5.5</span><br /><span style=" font-size:0.6rem">鉴于以上，用户理解并同意：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">5.5.1 未经</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及相关权利人同意，用户不得对上述功能、软件、服务进行反向工程 （reverse engineer）、反向编译（decompile）或反汇编（disassemble）等；同时，不得将上述内容或资料在任何媒体直接或间接发布、播放、出于播放或发布目的而改写或再发行，或者用于其他任何目的；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">5.5.2 在尽商业上的合理努力的前提下，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台并不就上述功能、软件、服务及其所包含内容的延误、不准确、错误、遗漏或由此产生的任何损害，以任何形式向用户或任何第三方承担任何责任；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">5.5.3 </span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台并不对上述任何由第三方提供的功能、软件、服务或内容进行任何保证性的、或连带性的承诺或担保，由此产生的任何纠纷、争议或损害，由用户与第三方自行解决，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台不承担任何责任；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">5.5.4 为更好地维护</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">生态，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台保留在任何时间内以任何方式处置上述由</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台享受所有权及知识产权</span><span style=" font-size:0.6rem">的产品或内容，包括但不限于修订、屏蔽、删除或其他任何法律法规允许的处置方式。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">6. 隐私保护</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.1</span><br /><span style=" font-size:0.6rem">本协议所指的“隐私”，是指《电信和互联网用户个人信息保护规定》第4条关于个人信息、《最高人民法院关于审理利用信息网络侵害人身权益民事纠纷案件适用法律若干问题的规定》第12条关于个人隐私、以及未来不时制定或修订的法律法规中明确规定的隐私应包括的内容</span><span style=" font-size:0.6rem">。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2</span><br /><span style=" font-size:0.6rem">保护用户隐私和其他个人信息是</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台的一项基本政策，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台保证不会将单个用户的注册资料及用户在使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务时存储在</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台的非公开内容用于任何非法的用途，且保证将单个用户的注册资料进行商业上的利用时应事先获得用户的同意，但下列情况除外：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2.1 事先获得用户的明确授权；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2.2 为维护社会公共利益；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2.3 学校、科研机构等基于公共利益为学术研究或统计的目的，经用户书面同意，且公开方式不足以识别具体用户身份；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2.4 用户自行在网络上公开的信息或其他已合法公开的个人信息；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2.5 以合法渠道获取的个人信息；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2.6为维护</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及其关联公司</span><span style=" font-size:0.6rem">的</span><span style=" font-size:0.6rem">合法权益且在必要范围内；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2.7 根据相关政府主管部门的要求；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2.8 根据相关法律法规或政策的要求；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.2.9 </span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台认为有必要的其</span><span style=" font-size:0.6rem">他情况。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.3</span><br /><span style=" font-size:0.6rem">为提升</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务的质量，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台可能会与第三方合作共同向用户提供相关的</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务，此类合作可能需要包括但不限于</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站用户数据与第三方用户数据的互通。在此情况下，用户知晓并同意，如用户自行授权同意或该第三方同意承担与</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台同等的保护用户隐私的责任，则</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台有权将用户的信息（包括但不限于注册资料等）提供给该第三方，并与第三方约定用户数据仅为</span><span style=" font-size:0.6rem">双方合作的</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务之目的使用；并且，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台将对该等第三方使用用户数据的行为进行监督和管理，尽一切合理努力保护用户个人信息的安全性。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">6.4</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">从本站链接至“思创吉宝”以外的网站：某些情况下，本站会提供跳转至国际互联网上的其它页面或网站的链接。此链接将会引您至第三方发行或经营的网站，而该第三方并非“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">的合作机构或与中国移动有任何联系。“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">将该链接列入网站内，仅为协助用户浏览和参考之用。“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">致力于挑选声誉良好的网站和资料来源，以方便用户。然而，除非“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">已经明确声明与该第三方有合作关系，提供链接至此第三方网站或网页，并不视为“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">同意、推荐、认可、保证或推介任何第三方或在第三方网站上所提供的任何服务、产品，亦不可视为“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">与该第三方及其网站有任何形式的合作。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">7. 免责声明</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.1</span><br /><span style=" font-size:0.6rem">用户在使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务的过程中应遵守国家法律法规及政策规定，因其使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务而产生的行为后果由用户自行承担。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.2</span><br /><span style=" font-size:0.6rem">通过</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务发布的任何信息，及通过</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务传递的任何观点不代表</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台之立场，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台亦不对其完整性、真实性、准确性或可靠性负责。用户对于可能会接触到的非法的、非道德的、错误的或存在其他失宜之处的信息，及被错误归类或是带有欺骗性的发布内容，应自行做出判断。在任何情况下，对于任何信息，包括但不仅限于其发生的任何错误或遗漏；或是由于使用通过</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务发布、私信、传达、其他方式所释出的或在别处传播的信息，而造成的任何损失或伤害，应由相关行为主体承担全部责任。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.3</span><br /><span style=" font-size:0.6rem">鉴于外部链接指向的网页内容非</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台实际控制，因此</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台无法保证为向用户提供便利而设置的外部链接的准确性和完整性。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.4</span><br /><span style=" font-size:0.6rem">网站需要定期或不定期地对相关的信息网络系统、设备进行检修、维护或升级，如因此类情况而造成网络服务在合理时间内的中断，网站无需为此承担任何责任。</span><span style=" font-size:0.6rem">对于因不可抗力或</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台不能控制的原因造成的</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务中断或其它缺陷，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.5</span><br /><span style=" font-size:0.6rem">用户同意，对于</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台向用户提供的下列产品或者服务的质量缺陷本身及其引发的任何损失，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台无需承担任何责任：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.5.1 </span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台向用户免费提供的</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.5.2 </span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台向用户赠送的任何产品或者服务；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.5.3 </span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台向收费</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站服务用户附赠的各种产品或者服务。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.6</span><br /><span style=" font-size:0.6rem">用户知悉并同意，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站平台可能会与第三方合作向用户提供产品（包括但不限于游戏、第三方应用等）并由第三方向用户提供该产品的升级、维护、客服等后续工作，由该等第三方对该产品的质量问题或其本身的原因导致的一切纠纷或用户损失承担责任，用户在此同意将向该第三方主张与此有关的一切权利和损失。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.7</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">不就通信系统或互联网的中断或无法运作、技术故障、计算机错误或病毒、信息损坏或丢失或其它在本站合理控制范围之外的原因而产生的其他任何性质的破坏而向用户或任何第三方承担赔偿责任。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">7.8</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">用户完全了解本条款的后果并进一步承认本条款的合理性。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">8. 违约责任</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.1</span><br /><span style=" font-size:0.6rem">如因</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台违反有关法律、法规或本协议项下的任何条款而给用户造成损失，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台同意承担由此给用户造成的损害赔偿责任。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.2</span><br /><span style=" font-size:0.6rem">用户同意保障和维护</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及其关联公司及其他用户的合法权益，如因用户违反有关法律、法规或本协议项下的任何条款而给</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及其关联公司或任何其他任何第三方造成损失，用户同意承担由此造成的损害赔偿责任。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.3</span><br /><span style=" font-size:0.6rem">如</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台发现、或收到第三方举报或投诉获知，用户存在或涉嫌违反本协议第一条（特别提示）、或第四条（使用规则）的，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台或其授权主体有权依据其合理判断不经通知立即采取一切必要措施以减轻或消除用户行为造成的影响，并将尽可能在处理之后对用户进行通知。由此造成的损失及后果（包括但不限于错过推广时机、丧失营销收入等）由用户自行独立承担。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.4</span><br /><span style=" font-size:0.6rem">除本协议另有约定外，如</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台发现、或收到第三方举报或投诉获知，用户存在或涉嫌违反本协议中约定的义务、保证、承诺或其他条款，用户应在</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台指定期限内予以纠正并消除影响；若用户未在前述时限内予以纠正的，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台或其授权主体有权依据其合理判断立即采取一切必要措施以减轻或消除用户行为造成的影响，并将尽可能在处理之后对用户进行通知。由此造成的损失及后果（包括但不限于错过推广时机、丧失营销收入等）由用户自行独立承担。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.5</span><br /><span style=" font-size:0.6rem">本协议8.3、8.4中所述的“一切必要措施”包括但不限于以下一项或多项：</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.5.1 更改、删除或屏蔽相关内容；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.5.2 警告违规</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">、</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">禁言；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.5.3 冻结用户账户资金，用于弥补用户给</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台及其关联公司、他人造成的损失；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.5.4 变更、限制或禁止违规</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">部分或全部功能；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.5.5 暂停、限制或终止用户使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务的权利、注销用户</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">等；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.5.6 向有关监管部门或国家机关报告；</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">8.5.7 其他</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台认为合理的措施。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">9. 协议修改</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">9.1</span><br /><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台有权随时修改本协议的任何条款，一旦本协议的内容发生变动，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台将会在</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">网站上公布修改之后的协议内容，</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台也可选择通过其他适当方式（比如系统通知）向用户通知修改内容。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">9.2</span><br /><span style=" font-size:0.6rem">如果不同意</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台对本协议相关条款所做的修改，用户有权停</span><span style=" font-size:0.6rem">止使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务。如果用户继续使用</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">服务，则视为用户接受</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台对本协议相关条款所做的修改。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">10. 通知送达</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">10.1</span><br /><span style=" font-size:0.6rem">本协议项下</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台对于用户所有的通知均可通过网页公告、电子邮件、系统通知、</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">管理</span><span style=" font-size:0.6rem">账号</span><span style=" font-size:0.6rem">主动联系、私信、手机短信或常规的信件传送等方式进行；该等通知于发送之日视为已送达收件人。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">10.2</span><br /><span style=" font-size:0.6rem">用户对于</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台的通知应当通过</span><span style=" font-size:0.6rem">“思创吉宝”</span><span style=" font-size:0.6rem">网站</span><span style=" font-size:0.6rem">平台对外正式公布的通信地址、传真号码、电子邮件地址等联系信息进行送达。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">11. 法律适用</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">11.1</span><br /><span style=" font-size:0.6rem">本协议的订立、执行和解释及争议的解决均应适用中华人民共和国大陆地区法律并受中国大陆地区法院管辖。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">11.2</span><br /><span style=" font-size:0.6rem">如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向</span><span style=" font-size:0.6rem">上海市静安区人民法院</span><span style=" font-size:0.6rem">提起诉讼。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.7rem; font-weight:bold">12. 其他规定</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">12.1</span><br /><span style=" font-size:0.6rem">本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议各方其他权利。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">12.2</span><br /><span style=" font-size:0.6rem">如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。</span></p><p style="margin:1rem 0pt"><span style=" font-size:0.6rem">12.3</span><br /><span style=" font-size:0.6rem">本协议中的标题仅为方便而设，在解释本协议时应被忽略，不能作为本协议条款解释的依据。</span></p><p style="margin:0pt; orphans:0; text-align:justify; widows:0"><span style="font-family:等线; font-size:10.5pt">&#xa0;</span></p></div><div class="cnzz" style="display: none;"> </div>',

        //获取url传的值
        GetRequest:function(){
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
        },
        getNowTime:function(){
            Date.prototype.Format = function (fmt) { // author: meizz
                var o = {
                    "M+": this.getMonth() + 1, // 月份
                    "d+": this.getDate(), // 日
                    "h+": this.getHours(), // 小时
                    "m+": this.getMinutes(), // 分
                    "s+": this.getSeconds(), // 秒
                    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
                    "S": this.getMilliseconds() // 毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
            return new Date().Format("yyyy-MM-dd hh:mm:ss");
        },
        timestampToTime:function(timestamp){
            var date = new Date(timestamp);
            Y = date.getFullYear() + '-';
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
            m = date.getMinutes() + ':';
            s = date.getSeconds();
            return Y+M+D;
        }
        /* ajaxPost:function(config){
         var defaultOption = {
         type:'post',
         dataType:'json'
         };

         config.url = jb.ipAndPort+config.url;
         config.data = JSON.stringify(config.data);
         var option = $.extend(true,{},defaultOption,config);
         return $.ajax(option);
         },

         ajaxGet:function(config){
         var defaultOption = {
         type:'get',
         dataType:'json'
         };

         config.url = jb.ipAndPort+config.url;
         var option = $.extend(true,{},defaultOption,config);
         return $.ajax(option);
         },

         ajaxDel:function(config){
         var defaultOption = {
         type:'delete',
         dataType:'json'
         };

         config.url = jb.ipAndPort+config.url;
         var option = $.extend(true,{},defaultOption,config);
         return $.ajax(option);
         },

         ajaxPut:function(config){
         var defaultOption = {
         type:'put',
         dataType:'json'
         };

         config.url = jb.ipAndPort+config.url;
         config.data = JSON.stringify(config.data);
         var option = $.extend(true,{},defaultOption,config);
         return $.ajax(option);
         }*/
    };

    $.ajaxSetup({

        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function(request,setting) {

            var userUuid = sessionStorage.getItem('uuid')||"";
            
            // console.log(setting.data)

            // console.log(this.data)

            if(this.url.indexOf('user/uploadFile') == -1)
            {
                if(typeof this.data == 'undefined')
                {
                    this.data = 'userUuid='+userUuid;
                }
                else
                {
                    // this.data = this.data+'&userUuid='+userUuid;
                    /*var res = {};
                     var dataObj = this.data;
                     dataObj.split('&').forEach(function(i){
                     var j = i.split('=');
                     res[j[0]]=j[1];
                     });*/
                    // if(typeof res.userUuid == 'undefined')
                    if(this.data.indexOf('userUuid=') == -1)
                    {
                        this.data = this.data+'&userUuid='+userUuid;
                    }
                    else
                    {
                        this.data = this.data;
                    }
                }
            }
            else
            {
                // this.data.append('userUuid',userUuid);
            }
        },
        //不缓存
        cache:false,

        // contentType:"application/json",

        //请求超时时间
        timeout:180000,
        //请求错误时，报错信息处理
        error: function(jqXHR, textStatus, errorMsg){
            // alert( '请求"' + this.url + '"时出错[' + jqXHR.status + ']：' + errorMsg+' textStatus:'+textStatus );
            if(typeof $.alert != 'undefined')
            {
                $.alert('网络异常请稍后再试');
            }
            else
            {
                alert('网络异常请稍后再试');
            }
        }
    });

    $(document).ajaxStart(function(data){
        // console.log(data)
        $.showLoading();
    });
    $(document).ajaxStop(function(){
        $.hideLoading();
    });
    $(document).ajaxSuccess(function(event,xhr,options){
        // console.log(event)
        // console.log(options)
    });

    /*执行进页面调用的统计pv uv cv接口，详情页不要重复*/
    (function(){
        if(self == top)
        {
            var userUuid = sessionStorage.getItem('uuid')||"";
            var accFrom = $.getSystemInfo();
            var cv = 1;
            //第一次访问
            if(localStorage.getItem('cv') == null)
            {
                cv = 1;
                //没有关于cv记录时，设置当前时间戳
                localStorage.setItem('cv',Date.parse(new Date()));
            }
            else
            {
                //有关于cv的记录，对比时间是否还在当日
                var time1 = parseInt(localStorage.getItem('cv'));
                var timeNow = Date.parse(new Date());
                //这次访问还在当天
                if(jb.timestampToTime(time1) == jb.timestampToTime(timeNow))
                {
                    cv = 0;
                }
                else
                {
                //    访问不在当天
                    cv = 1;
                    localStorage.setItem('cv',Date.parse(new Date()));
                }
            }
            var dataObj = $.extend({},{cv:cv},accFrom);
            console.log(dataObj);

            $.ajax({
                global:false,
                url:jb.apiurl+'site/siteCounter',
                type:'post',
                dataType:'JSON',
                data:dataObj,
                success:function(){
                    // console.log('success')
                },
                error:function(){
                    // console.log('error')
                }
            });
        }
    })();



    $(function(){

        $('body').on('click.goback','.go-back',function(){
            history.back();
            // location.href = document.referrer;
        });
        $('body').on('click.tosearch','.to-search',function(){
            location.href = '../search/search.html';
        });

    });

    window.jb = jb;

})();








