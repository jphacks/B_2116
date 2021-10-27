// "use strict";

$(function(){
    
	var $visible = $(":visible")
        .not('html')
        .not('body')
        .not('div')
        .not('br');
    $visible.each((v, idx) => {
        let $tgt = $($visible[idx]);
        if ($tgt.prop("tagName") == 'DIV' && !$tgt.innerText) {
            $visible.splice(idx, 1);
        }
    });
    
	let $body = $('body');
    let $walkcat = $('<img width="200">');
    let walkcatURL = chrome.extension.getURL("images/walkcat.gif");
    $walkcat.attr("src", walkcatURL);
    $walkcat.css({
        position: "fixed",
        top: -200,
        left: -200,
        zIndex: "9999998",
        width: '200px',
        pointerEvents: "none"
    });
	
	$body.append($walkcat);
	setTimeout(blocker(), 1000);

    function blocker() {
        let $cat_blocker_1 = $('<img width="260">');
        let $cat_blocker_2 = $('<img width="260">');
        let $cat_blocker_3 = $('<img width="260">');
        // let $cat_blocker_4 = $('<img width="260">');
        let blocker_src_1 = chrome.extension.getURL("images/walkcat.gif");
        let blocker_src_2 = chrome.extension.getURL("images/sittingcat.gif");
        let blocker_src_3 = chrome.extension.getURL("images/cat.jpeg");
        // let blocker_src_4 = chrome.extension.getURL("images/cat3-4.gif");
        $cat_blocker_1.attr("src", blocker_src_1);
        $cat_blocker_2.attr("src", blocker_src_2);
        $cat_blocker_3.attr("src", blocker_src_3);
        // $cat_blocker_4.attr("src", blocker_src_4);
        $cat_blocker_1.css({
            position: "fixed",
            bottom: -69,
            left: -280,
            zIndex: "9999999",
            width: '260px'
        });
        $body.append($cat_blocker_1);
        async function animate() {
            await moveCenter();
            await changePose1();
            await changePose2();
        }
        animate();
        var animateOption = {
            'left': '50%'
        };
        function moveCenter() {
            return $cat_blocker_1.animate({
                    'left': '50%'
                }, 1000, 'linear')
                .promise();
        }
        function changePose1() {
            return $cat_blocker_1
                .attr('src', blocker_src_2)
                .animate({
                    'left': '50%'
                }, 1000)
                .promise();
        }
        function changePose2() {
            return $cat_blocker_1
                .attr('src', blocker_src_3)
                .animate(animateOption, 1000)
                .promise();
        }
    }
    var sid = 0;
})