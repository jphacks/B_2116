let img = document.createElement('img');
// 画像パスを追加
img.src = 'images/walkcat.gif';
img.width = 100;
img.height = 100;
 
// 生成したimg要素を追加する
var body_element = document.getElementsByTagName('body');
document.body.appendChild(img);