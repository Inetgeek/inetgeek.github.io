document.body.oncopy = function () {
    iziToast.info({
        timeout: 4000, // 关闭弹窗的时间
        //icon: 'Fontawesome', // 图标类别
        closeOnEscape: 'true', // 允许使用Esc键关闭弹窗
        transitionIn: 'bounceInLeft', // 弹窗打开动画
        transitionOut: 'fadeOutRight', // 弹窗关闭动画
        displayMode: 'replace', // 替换已经打开的弹窗
        layout: '2', // Medium模式
        position: 'topRight', // 弹窗位置
        //icon: 'fad fa-copy', // 图标类名
        iconUrl: 'https://image-1309791158.cos.ap-guangzhou.myqcloud.com/其他/1122star.svg',
        backgroundColor: '#00ffce', // 弹窗背景色
        color: '#000000',
        title: '复制成功', // 通知标题
        message: '复制原创内容后请注明来源' // 通知消息内容
    });
};
var top_box = document.querySelector(".post-list .post");
var top_div = "<div id=\"bber-talk\"></div>";
top_box.insertAdjacentHTML("beforebegin", top_div);
document.addEventListener("DOMContentLoaded", () => {
    var bbUrl = "https://say.inetgeek.cn/api/memo?creatorId=1&rowStatus=NORMAL"
    fetch(bbUrl).then(res => res.json()).then(resdata => {
        var result = '', resultAll = "", data = resdata.data
        for (var i = 0; i < data.length; i++) {
            var bbTime = new Date(data[i].createdTs * 1000).toLocaleString()
            var bbCont = data[i].content
            var newbbCont = bbCont.replace(/(https?:[^:<>"]*\/)([^:<>"]*)(\.((png!thumbnail)|(png)|(jpg)|(webp)|(jpeg)|(gif))(!blogimg)?)/g, ' 🌅 ').replace(/\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|jfif|gif))\S+/g, '👉')
            result += `<li class="item">🔔<span class="datetime">${bbTime}</span>： <a href="https://say.inetgeek.cn">${newbbCont}</a></li>`;
        }
        var bbDom = document.querySelector('#bber-talk');
        var bbBefore = `<div class="talk-wrap"><ul class="talk-list">`
        var bbAfter = `</ul></div>`
        resultAll = bbBefore + result + bbAfter
        bbDom.innerHTML = resultAll;
        //相对时间
        window.Lately && Lately.init({ target: '.datetime' });
    });
    setInterval(function () {
        for (var s, n = document.querySelector(".talk-list"), e = n.querySelectorAll(".item"), t = 0; t < e.length; t++)
            setTimeout(function () {
                n.appendChild(e[0])
            }, 1000)
    }, 1000)
});
