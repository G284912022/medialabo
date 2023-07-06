//答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log("答え(デバッグ用): " + kotae);

//入力回数
let kaisu = 0;

//予想を4回
//将来以下の呼び出しを削除する
//ボタンを押したらhantei()を呼び出す

let a = document.querySelector('button#hantei');
a.addEventListener('click', hantei);
//ボタンを押した後
function hantei() {
    kaisu = kaisu + 1;
    let kaisu1 = document.querySelector('span#kaisu');
    kaisu1.textContent = kaisu;
    let n = document.querySelector('input[name="kaitou"]');
    let yoso = parseInt(n.value);
    let kekka = document.querySelector('p#result');
    let answer = document.querySelector('span#answer');
    answer.textContent = parseInt(n.value);
    if(yoso === kotae) {
        if(kaisu >= 4) {
            kekka.textContent = ("答えは" + kotae + "でした。すでにゲームは終わっています");
            console.log("答えは" + kotae + "でした。すでにゲームは終わっています");
        } else {
            kekka.textContent = ("正解です。おめでとう！");
            console.log("正解です。おめでとう！");
        }
    } else {
        if(kaisu === 3) {
            kekka.textContent = ("まちがい、残念でした答えは" + kotae + "です。");
            console.log("まちがい、残念でした答えは" + kotae + "です。");
        } else if(kaisu >=4) {
            kekka.textContent = ("答えは" + kotae + "でした。すでにゲームは終わっています");
            console.log("答えは" + kotae + "でした。すでにゲームは終わっています");
        } else if(kotae > yoso) {
            kekka.textContent = ("まちがい、答えはもっと大きいですよ");
            console.log("まちがい、答えはもっと大きいですよ");
        } else {
            kekka.textContent = ("まちがい、答えはもっと小さいですよ");
            console.log("まちがい、答えはもっと小さいですよ");
        }
    }
}
