//答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log("答え(デバッグ用): " + kotae);

//入力回数
let kaisu = 1;

//予想を4回
//将来以下の呼び出しを削除する
//ボタンを押したらhantei()を呼び出す
hantei();
hantei();
hantei();
hantei();

//ボタンを押した後
function hantei() {
    let yoso = 4;
    kaisu++;
    console.log(kaisu + "回目の予想: " + yoso);
    if(yoso === kotae) {
        if(kaisu >= 4) {
            console.log("答えは" + kotae + "でした。すでにゲームは終わっています");
        } else {
            console.log("正解です。おめでとう！");
        }
    } else {
        if(kaisu === 3) {
            console.log("まちがい、残念でした答えは" + kotae + "です。");
        } else if(kaisu >=4) {
            console.log("答えは" + kotae + "でした。すでにゲームは終わっています");
        } else if(kotae > yoso) {
            console.log("まちがい、答えはもっと大きいですよ");
        } else {
        console.log("まちがい、答えはもっと小さいですよ");
        }
    }
}
