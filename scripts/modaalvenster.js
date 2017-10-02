var grayBackground = document.createElement('div');
document.body.appendChild(grayBackground);
var exitButton = document.createElement('span');
exitButton.innerHTML = '&Cross;';
exitButton.className = 'exit-button';

var modaal = (function () {
    var modaalWindow = document.createElement('div');
    modaalWindow.className = 'modaal-window';
    modaalWindow.addEventListener('click', function (e) {
        e.stopPropagation();
    });
    var modaalContent = document.createElement('div');
    modaalContent.className = 'modaal-content';

    return {
        centreren: function () {
            var top = Math.max((grayBackground.offsetHeight - modaalWindow.offsetHeight) / 2, 0);
            var left = Math.max((grayBackground.offsetWidth - modaalWindow.offsetWidth) / 2, 0);
            modaalWindow.style.top = top + 'px';
            modaalWindow.style.left = left + 'px';
        },
        open: function (parameter) {
            modaalContent.appendChild(parameter);
            modaalWindow.appendChild(modaalContent);
            modaalWindow.appendChild(exitButton);

            grayBackground.className = 'gray-background';
            grayBackground.appendChild(modaalWindow);
            modaal.centreren();
            window.addEventListener('resize', modaal.centreren(), true);
        },
        close: function () {
            modaalContent.innerHTML = '';
            modaalWindow.innerHTML = '';
            grayBackground.removeChild(modaalWindow);
            grayBackground.className = '';
        }
    }
}());

grayBackground.addEventListener('click', modaal.close);
exitButton.addEventListener('click', modaal.close);

var content_fanstille = document.getElementById('content_fanstille');
var content_maanroosvis = document.getElementById('content_maanroosvis');
var content_fotogallerij = document.getElementById('content_fotogallerij');
var content_hallowereld = document.getElementById('content_hallowereld');
var knop1 = document.getElementById('article_fanstille');
var knop2 = document.getElementById('article_maanroosvis');
var knop3 = document.getElementById('article_fotogallerij');
var knop4 = document.getElementById('article_hallowereld');

content_fanstille.parentNode.removeChild(content_fanstille);
content_maanroosvis.parentNode.removeChild(content_maanroosvis);
content_fotogallerij.parentNode.removeChild(content_fotogallerij);
content_hallowereld.parentNode.removeChild(content_hallowereld);

knop1.addEventListener('click', function () {
    modaal.open(content_fanstille);
});

knop2.addEventListener('click', function () {
    modaal.open(content_maanroosvis);
});

knop3.addEventListener('click', function () {
    modaal.open(content_fotogallerij);
});

knop4.addEventListener('click', function () {
    modaal.open(content_hallowereld);
});

