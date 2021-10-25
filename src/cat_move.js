async function animate() {
    await moveCenter();
    await changePose1();
    await changePose2();
  }
  animate();
  
  // 真ん中に10秒かけて移動させる
  function moveCenter() {
    return $cat.animate({ left: "50%" }, 10000, "linear").promise();
  }
  // 座らせる
  function changePose1() {
    return $cat 
    // 座りの画像に切り替え
      .attr("src", src_2) 
      // 切り替えた後1秒してから次の切り替えへ
      .animate({ left: "50%" }, 1000)
      .promise();
  }
  // 眠らせる
  function changePose2() {
    return $cat // 眠りの画像に切り替え
      .attr("src", src_3) // クリックしたら1秒間嫌な顔になる
      .on("click", function(e) {
        // 嫌な顔
        $cat.attr("src", src_4).animate({ left: "50%" }, 1000, function() {
          // 眠りに戻す
          $cat.attr("src", src_3);
        });
      })
      .animate({ left: "50%" }, 1000)
      .promise();
  }