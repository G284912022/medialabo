//答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log("答え(デバッグ用): " + kotae);

//入力回数
let kaisu = document.querySelector('span#kaisu');
kaisu = 1;

//予想を4回
//将来以下の呼び出しを削除する
//ボタンを押したらhantei()を呼び出す
hantei();
hantei();
hantei();
hantei();

//ボタンを押した後
function hantei() {
    kaisu.textContent = console.log(kaisu);
    let yoso = document.querySelector('span#answer');
    yoso.textContent = 4;
    let kekka = document.querySelector('p#result');
    if(yoso === kotae) {
        if(kaisu >= 4) {
            kekka.textContent = ("答えは" + kotae + "でした。すでにゲームは終わっています");
        } else {
            kekka.textContent = ("正解です。おめでとう！");
        }
    } else {
        if(kaisu === 3) {
            kekka.textContent = ("まちがい、残念でした答えは" + kotae + "です。");
        } else if(kaisu >=4) {
            kekka.textContent = ("答えは" + kotae + "でした。すでにゲームは終わっています");
        } else if(kotae > yoso) {
            kekka.textContent = ("まちがい、答えはもっと大きいですよ");
        } else {
            kekka.textContent = ("まちがい、答えはもっと小さいですよ");
            kaisu.textContent += 1;
        }
    }
    kaisu++;
}
