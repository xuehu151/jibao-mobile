(function(){
    var pixclPatio = 1 / window.devicePixelRatio;
    document.write('<meta name="viewport" content="width=device-width,initial-scale='+pixclPatio+',minimum-scale='+pixclPatio+',maximum-scale='+pixclPatio+',user-scalable=no" />');
    var html = document.getElementsByTagName('html')[0];
    var pageW = html.getBoundingClientRect().width;
    var pageH = html.getBoundingClientRect().height;
    var pageWidth = Math.min(pageW,pageH);
    html.style.fontSize = pageWidth / 18.75 + 'px';
})();



