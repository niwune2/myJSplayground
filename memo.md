メモ
- [ToDo](#todo)
- [履歴を表示するためのコード](#履歴を表示するためのコード)
- [履歴を表示する要素をクリアする](#履歴を表示する要素をクリアする)
- [\[CSS\] 要素を横に揃える](#css-要素を横に揃える)


## ToDo
- [x] テンプレートリテラルで文字列を足していけるようにする
- [x] コピーボタンを実装する
- [ ] 色を増やす
- [x] プロパティを増やす
- [ ] テキストエリアを固定する
- [ ] 保存機能
- [ ] background系を選んだ後、ボタンでページの背景を選択したものに変える
- [ ] プロパティと色を選んだら自動的に一覧に表示される
- [ ] プロパティ値を設定できるようにする

## 履歴を表示するためのコード
```js
//履歴(history)の追加
const history = document.createElement('p');
history.classList.add('historyPara');
history.textContent = outputTextarea.value;
historyList.appendChild(history);
historyList.scrollTop = historyList.scrollHeight;
```
1. コピーボタンを押すことでリストに追加される
2. スタイルの設定や消去できるようにクラス属性をつける
3. 履歴を表示する`div`に収まりきらなくなったときのために、<br>縦スクロールを設定し、バーは最下部に固定する

## 履歴を表示する要素をクリアする
```js
//履歴を消去する
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    const targets = document.querySelectorAll('.historyPara');
    targets.forEach(target => {
        target.remove();
        console.log('History Cleared.履歴を消去しました。')
    });
});
```
htmlの要素を参照するために、`forEach`を使った。

--------

## \[CSS] 要素を横に揃える
```css
.operations,span {
    /* 横に揃える */
    vertical-align:bottom;
}
```