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
    const NEGATIVEs = ["きつい", "辛い","つらい","帰りたい","かえりたい"]
    const resultDiv = document.getElementById('header');
    SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
    let recognition = new SpeechRecognition();

    recognition.lang = 'ja-JP';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.start();
    recognition.onend=function(){
        recognition.start();
    }
    recognition.onresult = (event) => {
        looprecognition(event);
    }
    function looprecognition(event){
        let interimTranscript = ''; // 暫定(灰色)の認識結果
        var results = event.results;
        
        gridloop:
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (results[i].isFinal){
                for (let j = 0; j < NEGATIVEs.length; j++){
                    if (results[0][0].transcript.includes(NEGATIVEs[j])){
                        blocker();
                        break
                    }
                }
            }else{
                let transcript = results[i][0].transcript;
                interimTranscript = transcript;
                resultDiv.innerHTML = interimTranscript;
            }
        }
    }

    function blocker() {
        let $blocker_1 = $('<img width="260">');
        let blocker_src_1 = chrome.extension.getURL("images/cute_seal2.gif");
        $blocker_1.attr("src", blocker_src_1);
        $blocker_1.css({
            position: "fixed",
            bottom: 2,
            left: -280,
            zIndex: "9999999",
            width: '260px'
        });
        $body.append($blocker_1);
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
            return $blocker_1.animate({
                    'left': '100%'
                }, 5000, 'linear')
                .promise();
        }
    }
})