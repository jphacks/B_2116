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

    const NEGATIVEs = ["きつい", "辛い","つらい","帰りたい","かえりたい"]

    function looprecognition(){
        const resultDiv = document.getElementById('header');
        SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
        let recognition = new SpeechRecognition();

        recognition.lang = 'ja-JP';
        recognition.interimResults = true;
        recognition.continuous = true;

        recognition.start();
        recognition.onresult = (event) => {
            let interimTranscript = ''; // 暫定(灰色)の認識結果
            var results = event.results;
            
            gridloop:
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (results[i].isFinal){
                    for (let j = 0; j < NEGATIVEs.length; j++){
                        resultDiv.innerHTML = NEGATIVEs[j];
                        if (results[0][0].toString().includes(NEGATIVEs[j].toString())){
                            resultDiv.innerHTML = "if 入ったよ";
                            blocker();
                            break
                        }
                    
                    looprecognition()
                    }
                }else{
                    let transcript = results[i][0].transcript;
                    interimTranscript = transcript;
                    resultDiv.innerHTML = interimTranscript;
                }
            }
        }
    }

    function blocker() {
        let $cat_blocker_1 = $('<img width="260">');
        let $cat_blocker_2 = $('<img width="260">');
        let $cat_blocker_3 = $('<img width="260">');
        // let $cat_blocker_4 = $('<img width="260">');
        let blocker_src_1 = chrome.extension.getURL("images/a9BE7R5UTvph3aHIRnse1635322606-1635322771.gif");
        let blocker_src_2 = chrome.extension.getURL("images/sittingncat.gif");
        let blocker_src_3 = chrome.extension.getURL("images/sleepingcat.gif");
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
            // await changePose1();
            // await changePose2();
        }
        animate();
        var animateOption = {
            'left': '100%'
        };
        function moveCenter() {
            return $cat_blocker_1.animate({
                    'left': '100%'
                }, 5000, 'linear')
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
    
    looprecognition();
})