//テーブル生成関数
function createTable(){

    var colCnt = 3;
    var rowCnt = 3;
    
    // table要素を生成
    var table = document.createElement('table');
    // キャプションの追加
    table.createCaption().textContent = "まるばつげーむ";
    
    // tr部分のループ
    for (var i = 0; i < rowCnt; i++) {
        // tr要素を生成
        var tr = document.createElement('tr');
        // th・td部分のループ
        for (var j = 0; j < colCnt; j++) {
            // 1行目のtr要素の時
            if(i === 0) {
                // th要素を生成
                var th = document.createElement('th');
                // th要素をtr要素の子要素に追加
                tr.appendChild(th);
            } else {
                // td要素を生成
                var td = document.createElement('td');
                // td要素をtr要素の子要素に追加
                tr.appendChild(td);
            }
        }
        // tr要素をtable要素の子要素に追加
        table.appendChild(tr);

        //mainTableブロックにtableオブジェクトを追加
        document.getElementById('mainTable').appendChild(table);
    }
}