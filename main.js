const buttons = [
    { id: 'lv1black', color: 'black' },
    { id: 'lv1red', color: 'red' },
    { id: 'lv1blue', color: 'blue' },
    { id: 'lv1green', color: 'green' },
    { id: 'lv1gray', color: 'gray' },
    { id: 'lv1silver', color: 'silver' },
    { id: 'lv1white', color: 'white' },
    { id: 'lv1maroon', color: 'maroon' },
    { id: 'lv1fuchsia', color: 'fuchsia' },
    { id: 'lv1purple', color: 'purple' },
    { id: 'lv1navy', color: 'navy' },
    { id: 'lv1teal', color: 'teal' },
    { id: 'lv1aqua', color: 'aqua' },
    { id: 'lv1lime', color: 'lime' },
    { id: 'lv1olive', color: 'olive' },
    { id: 'lv1yellow', color: 'yellow' },
    { id: 'lv2orange', color: 'orange' },
    // 他のボタンも追加
];

const propButtons = [
    { id: 'bg', name: 'background' },
    { id: 'bgCol', name: 'background-color' },
    { id: 'bgImage', name: 'background-image' },
    { id: 'border', name: 'border' },
    { id: 'borderCol', name: 'border-color' },
    { id: 'outline', name: 'outline' },
    { id: 'outlineCol', name: 'outline-color' },
    { id: 'boxShadow', name: 'box-shadow' },
    { id: 'textShadow', name: 'text-shadow' },
    { id: 'color', name: 'color' },
];

const outputTextarea = document.getElementById('textArea');
const copyButton = document.getElementById('copy');
const historyList = document.querySelector('.history');

let selectedPropButton = null;
let selectedColorButton = null;

let copyText = ''; // 初期値を空に設定

//コピー
copyButton.addEventListener('click', () => {
    outputTextarea.select();
    navigator.clipboard.writeText(outputTextarea.value).then(() => {
        console.log(`テキストがコピーされました。${outputTextarea.value}`);
        copyText = outputTextarea.value; // コピー成功時に値を設定

        copyButton.innerHTML = '<span class="material-symbols-outlined">check</span>';
        copyButton.style.backgroundColor = 'yellowgreen';
        copyButton.style.color = 'white';

        //履歴(history)の追加
        const history = document.createElement('p');
        history.classList.add('historyPara');
        history.textContent = outputTextarea.value;
        historyList.appendChild(history);
        historyList.scrollTop = historyList.scrollHeight;

        //ボタンのアイコンをもとに戻すまでの時間を設定
        //ボタンの背景色をもとに戻すまでの時間を設定
        setTimeout(() => {
            copyButton.innerHTML = '<span class="material-symbols-outlined">content_copy</span>'
            copyButton.style.transition = 'background-color 0.5s';
            copyButton.style.backgroundColor = '';
            copyButton.style.border = 'none';
            copyButton.style.borderRadius = 'border-radius: 5px';
            copyButton.style.color = 'black';
        }, 2000);

    }).catch(err => {
        console.error('コピーに失敗しました。', err);
    });
});


// ボタンのクリックイベントを追加するループ
propButtons.forEach(button => {
    addPropButtonClickEvent(button);
});
buttons.forEach(button => {
    addButtonClickEvent(button);
    //下記の関数を順番に呼び出す.(forEach)
    //関数内の各ボタン要素のidを取得するbutton定数を引数に、順番に呼び出す.
});

// ボタンのクリックイベントを追加
function addPropButtonClickEvent(buttonInfo) {//プロパティ用
    const button = document.getElementById(buttonInfo.id);
    //ボタンのidを配列から取得
    button.addEventListener('click', () => {
        selectedPropButton = buttonInfo;
        outputTextarea.value = `${buttonInfo.name}: `;
        //表示する文字列`name`
    });
}

function addButtonClickEvent(buttonInfo) {
    const button = document.getElementById(buttonInfo.id);
    //ボタンのidを配列から取得
    button.addEventListener('click', () => {
        if (selectedPropButton) {
            if (selectedColorButton) {
                outputTextarea.value = `${selectedPropButton.name}: ${selectedColorButton.color};`;
                selectedColorButton = null;
                //表示する文字列`color`
            }
        }
    });
}

buttons.forEach(button => {
    const buttonElement = document.getElementById(button.id);
    buttonElement.addEventListener('click', () => {
        selectedColorButton = button;
        if (selectedPropButton) {
            outputTextarea.value = `${selectedPropButton.name}: ${selectedColorButton.color};`;
            selectedPropButton = '';
            selectedColorButton = '';

        } else {
            outputTextarea.value = selectedColorButton.color;
            selectedPropButton = '';
            selectedColorButton = '';
        }
    });
});


function reset() {//テキストエリアをリセットする関数
    const button = document.getElementById('reset');
    button.addEventListener('click', () => {
        outputTextarea.value = "";
    })
}
reset(); //テキストエリアをリセット

//履歴を消去する
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    const targets = document.querySelectorAll('.historyPara');
    targets.forEach(target => {
        target.remove();
        console.log('History Cleared.履歴を消去しました。')
    });
});


// const textArea = document.getElementById('textArea');
// const showText = document.getElementsByClassName('lv1-all');
// const textContent = showText.textContent;

// function addButtonClickEvent(buttonId, text) {
//     const button = document.getElementById(buttonId);
//     button.addEventListener('click', function () {
//         textArea.value = text;
//     });
// }
// addButtonClickEvent('lv-1black', 'black');
// addButtonClickEvent('lv-1red', 'red');
// addButtonClickEvent('lv-1blue', 'blue');
// addButtonClickEvent('lv-1green', 'green');

// showText.addEventListener('click', function(){
//     const textToShow = textContent;
//     textArea.value = textToShow;
// });
