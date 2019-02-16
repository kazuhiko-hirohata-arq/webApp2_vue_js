// table要素を生成
var table = document.createElement('table');


//キャプションを追加
table.caption.textContent = "まるばつげーむ";

// tr部分のループ
for (var i = 0; i < 3; i++) {
    // tr要素を生成
    var tr = document.createElement('tr');
    // th・td部分のループ
    for (var j = 0; j < 3; j++) {
        // 1行目のtr要素の時
        if(i === 0) {
            // th要素を生成
            var th = document.createElement('th');
            // th要素内にテキストを追加
            th.textContent = i + '-' + j;
            // th要素をtr要素の子要素に追加
            tr.appendChild(th);
        } else {
            // td要素を生成
            var td = document.createElement('td');
            // td要素内にテキストを追加
            td.textContent = i + '-' + j;
            // td要素をtr要素の子要素に追加
            tr.appendChild(td);
        }
    }
    // tr要素をtable要素の子要素に追加
    table.appendChild(tr);
}
 
// 生成したtable要素を追加する
document.getElementById('mainTable').appendChild(table);