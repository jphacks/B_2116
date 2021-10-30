# ＼\おいでよ/／癒しの森
<br>
デモ動画
(https://youtu.be/rWLdjNrpe2k)
<br>
言語
- Javascript  
- HTML/CSS  
<br>
実際に動かしているファイル  
- walkcat.js(様々な動物を動かすコード、音声認識コードもここ)  
- manifest.json(Chrome拡張用)  
<br>
## 製品概要
気分が落ち込んだらネッコやイッヌがブラウザ上に出現して元気付けてくれるプロダクトです。
<br>
### 背景(製品開発のきっかけ、課題等）
ストレス社会において笑顔を増やしたいと思いハックしました。
ついついため息が出てしまった時や、ネガティブな言葉を呟いてしまった時、可愛い動物が癒してくれたらきっと笑顔が増えるだろうと思い、着想しました。
<br>
### 製品説明（具体的な製品の説明）
* Chromeの拡張機能です。  
* 拡張機能をインストールし、ブラウザをロードすると音声レコーディングがスタートします。  
* ネガティブな言葉群を検知し、猫や犬などがブラウザ上を動いて癒してくれます。  
<br>
### 特長
* 音声認識をした後、文字起こしをしてネガティブな発言を判定します。  
* 猫の他に犬やアザラシもいます(もっと追加したい)。  
<br>
### 解決出来ること
* 作業中のストレスを軽減します。  
* 作業効率が上がる(かもしれません)。
<br>
### 今後の展望
ネガティブな言語判定の部分がまだまだハックできていない。
* リストで判定しているというしょっぱい状況なので感情判定などでいい感じのプロダクトにしたいです。
 <br>
ある程度の処理をArduinoなど外部リソースで行いたい。
* 音声認識部分から全てPC内で行なっているのですぐにPCが熱くなります。
* Arduinoでどこまでできるか知らないですが、文字列のバッチファイルを作成するところくらいまで出来ないのでしょうか？
<br>
動物の動きをもっと増やしたい
* かわいい動物をもっと増やしたいです(欲)
<br>
### 注力したこと（こだわり等）
HTMLを触ったのすら初めてだったので、ひたすら勉強でした。  
こだわりとかいうレベルではないとは思いますが、強いていうなら皆でgif画像をたくさん作るのが楽しかったです。

## 開発技術
* HTML, CSS, Javascript, jQuery

#### API・データ
* Web Speech Recogniton
