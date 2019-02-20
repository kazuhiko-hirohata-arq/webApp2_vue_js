
//グローバル変数になるのであまりよろしくない
var chgFlg = false;
var turnCnt = 0;
//描画関数
function drawObject(table){

    //入力チェック
    if (table.innerText != "") {
        alert("入力できません。");
        return;
    }

    //先攻後攻交代
    if(!chgFlg){   
        Cell.innerText = "🙆‍♂️";
        chgFlg = true;
    }else{
        Cell.innerText = "🙅‍♂️";
        chgFlg = false;
    }

    //入力が完了するごとに勝敗チェック
    var ret = judge();
    if (ret) {
        alert(ret);
    }

    window.onload 
}
    //判定用関数
function judge(){

    turnCnt = turnCnt + 1;

    var c0 = document.getElementById("c0").innerText;
    var c1 = document.getElementById("c1").innerText;
    var c2 = document.getElementById("c2").innerText;
    var c3 = document.getElementById("c3").innerText;
    var c4 = document.getElementById("c4").innerText;
    var c5 = document.getElementById("c5").innerText;
    var c6 = document.getElementById("c6").innerText;
    var c7 = document.getElementById("c7").innerText;
    var c8 = document.getElementById("c8").innerText;

    winer = null;
    if (c0 == c1 && c1 == c2 && c0 != "") {
        winer = c0;
    } else if (c3 == c4 && c4 == c5 && c3 != "") {
        winer = c3;
    } else if (c6 == c7 && c7 == c8 && c6 != "") {
        winer = c6;
    } else if (c0 == c3 && c3 == c6 && c0 != "") {
        winer = c0;
    } else if (c1 == c4 && c4 == c7 && c1 != "") {
        winer = c1;
    } else if (c2 == c5 && c5 == c8 && c2 != "") {
        winer = c2;
    } else if (c0 == c4 && c4 == c8 && c0 != "") {
        winer = c0;
    } else if (c2 == c4 && c4 == c6 && c2 != "") {
        winer = c2;
    }
    var str;
    if (winer) {
        str = winer + "の勝ちです。";
    } else if (turnCnt == 9) {
        str = "引分けです。";
    } else {
        str = null;
    }
    return str;;
}

//テーブルの要素を削除して結果をリセット
function clearTable(){

    //table要素を取得
    var table = document.getElementById('maintable');

    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            table.rows[i].cells[j].innerHTML = "aaa";
        }
    }
}