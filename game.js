// 元素の定義（原子番号、元素記号、価格）
const elements = [
    { number: 1, symbol: 'H', price: 1 },
    { number: 2, symbol: 'He', price: 2 },
    { number: 3, symbol: 'Li', price: 10 },
    { number: 4, symbol: 'Be', price: 80 },
    { number: 5, symbol: 'B', price: 50 },
    { number: 6, symbol: 'C', price: 1 },
    { number: 7, symbol: 'N', price: 1 },
    { number: 8, symbol: 'O', price: 1 },
    { number: 9, symbol: 'F', price: 100 },
    { number: 10, symbol: 'Ne', price: 10 },
    { number: 11, symbol: 'Na', price: 1 },
    { number: 12, symbol: 'Mg', price: 1 },
    { number: 13, symbol: 'Al', price: 1 },
    { number: 14, symbol: 'Si', price: 1 },
    { number: 15, symbol: 'P', price: 1 },
    { number: 16, symbol: 'S', price: 1 },
    { number: 17, symbol: 'Cl', price: 1 },
    { number: 18, symbol: 'Ar', price: 1 },
    { number: 19, symbol: 'K', price: 2 },
    { number: 20, symbol: 'Ca', price: 1 },
    { number: 21, symbol: 'Sc', price: 310 },
    { number: 22, symbol: 'Ti', price: 6 },
    { number: 23, symbol: 'V', price: 38 },
    { number: 24, symbol: 'Cr', price: 1 },
    { number: 25, symbol: 'Mn', price: 1 },
    { number: 26, symbol: 'Fe', price: 1 },
    { number: 27, symbol: 'Co', price: 4 },
    { number: 28, symbol: 'Ni', price: 3 },
    { number: 29, symbol: 'Cu', price: 2 },
    { number: 30, symbol: 'Zn', price: 1 },
    { number: 31, symbol: 'Ga', price: 14 },
    { number: 32, symbol: 'Ge', price: 100 },
    { number: 33, symbol: 'As', price: 1 },
    { number: 34, symbol: 'Se', price: 3 },
    { number: 35, symbol: 'Br', price: 1 },
    { number: 36, symbol: 'Kr', price: 100 },
    { number: 37, symbol: 'Rb', price: 3500 },
    { number: 38, symbol: 'Sr', price: 24 },
    { number: 39, symbol: 'Y', price: 3 },
    { number: 40, symbol: 'Zr', price: 5 },
    { number: 41, symbol: 'Nb', price: 4 },
    { number: 42, symbol: 'Mo', price: 4 },
    { number: 43, symbol: 'Tc', price: 1000 },
    { number: 44, symbol: 'Ru', price: 980 },
    { number: 45, symbol: 'Rh', price: 9000 },
    { number: 46, symbol: 'Pd', price: 4700 },
    { number: 47, symbol: 'Ag', price: 52 },
    { number: 48, symbol: 'Cd', price: 1 },
    { number: 49, symbol: 'In', price: 110 },
    { number: 50, symbol: 'Sn', price: 5 },
    { number: 51, symbol: 'Sb', price: 1 },
    { number: 52, symbol: 'Te', price: 6 },
    { number: 53, symbol: 'I', price: 1 },
    { number: 54, symbol: 'Xe', price: 1000 },
    { number: 55, symbol: 'Cs', price: 3700 },
    { number: 56, symbol: 'Ba', price: 18 },
    { number: 57, symbol: 'La', price: 1 },
    { number: 58, symbol: 'Ce', price: 1 },
    { number: 59, symbol: 'Pr', price: 10 },
    { number: 60, symbol: 'Nd', price: 6 },
    { number: 61, symbol: 'Pm', price: 1 },
    { number: 62, symbol: 'Sm', price: 2 },
    { number: 63, symbol: 'Eu', price: 84 },
    { number: 64, symbol: 'Gd', price: 1600 },
    { number: 65, symbol: 'Tb', price: 64 },
    { number: 66, symbol: 'Dy', price: 33 },
    { number: 67, symbol: 'Ho', price: 26 },
    { number: 68, symbol: 'Er', price: 1940 },
    { number: 69, symbol: 'Tm', price: 95 },
    { number: 70, symbol: 'Yb', price: 19 },
    { number: 71, symbol: 'Lu', price: 350 },
    { number: 72, symbol: 'Hf', price: 600 },
    { number: 73, symbol: 'Ta', price: 15 },
    { number: 74, symbol: 'W', price: 4 },
    { number: 75, symbol: 'Re', price: 280 },
    { number: 76, symbol: 'Os', price: 1400 },
    { number: 77, symbol: 'Ir', price: 5200 },
    { number: 78, symbol: 'Pt', price: 2900 },
    { number: 79, symbol: 'Au', price: 4700 },
    { number: 80, symbol: 'Hg', price: 6 },
    { number: 81, symbol: 'Tl', price: 54 },
    { number: 82, symbol: 'Pb', price: 1 },
    { number: 83, symbol: 'Bi', price: 2 },
    { number: 84, symbol: 'Po', price: 1 },
    { number: 85, symbol: 'At', price: 1 },
    { number: 86, symbol: 'Rn', price: 10000 },
    { number: 87, symbol: 'Fr', price: 870 },
    { number: 88, symbol: 'Ra', price: 880 },
    { number: 89, symbol: 'Ac', price: 890 },
    { number: 90, symbol: 'Th', price: 900 },
    { number: 91, symbol: 'Pa', price: 910 },
    { number: 92, symbol: 'U', price: 920 },
    { number: 93, symbol: 'Np', price: 930 },
    { number: 94, symbol: 'Pu', price: 940 },
    { number: 95, symbol: 'Am', price: 950 },
    { number: 96, symbol: 'Cm', price: 960 },
    { number: 97, symbol: 'Bk', price: 970 },
    { number: 98, symbol: 'Cf', price: 980 },
    { number: 99, symbol: 'Es', price: 990 },
    { number: 100, symbol: 'Fm', price: 1000 },
    { number: 101, symbol: 'Md', price: 1010 },
    { number: 102, symbol: 'No', price: 1020 },
    { number: 103, symbol: 'Lr', price: 1030 },
    { number: 104, symbol: 'Rf', price: 1040 },
    { number: 105, symbol: 'Db', price: 1050 },
    { number: 106, symbol: 'Sg', price: 1060 },
    { number: 107, symbol: 'Bh', price: 1070 },
    { number: 108, symbol: 'Hs', price: 1080 },
    { number: 109, symbol: 'Mt', price: 1090 },
    { number: 110, symbol: 'Ds', price: 1100 },
    { number: 111, symbol: 'Rg', price: 1110 },
    { number: 112, symbol: 'Cn', price: 1120 },
    { number: 113, symbol: 'Nh', price: 1130 },
    { number: 114, symbol: 'Fl', price: 1140 },
    { number: 115, symbol: 'Mc', price: 1150 },
    { number: 116, symbol: 'Lv', price: 1160 },
    { number: 117, symbol: 'Ts', price: 1170 },
    { number: 118, symbol: 'Og', price: 1000000 }
];
// 元素の定義（原子番号、元素記号、価格 [単位: ゲーム内通貨]）
// const elements = [
//     { number: 1, symbol: 'H', price: 0.0001 },    // 水素
//     { number: 2, symbol: 'He', price: 0.0002 },   // ヘリウム
//     { number: 3, symbol: 'Li', price: 10 },       // リチウム
//     { number: 4, symbol: 'Be', price: 100 },      // ベリリウム
//     { number: 5, symbol: 'B', price: 5 },         // ホウ素
//     { number: 6, symbol: 'C', price: 1 },         // 炭素（黒鉛）
//     { number: 6, symbol: 'C (ダイヤモンド)', price: 55000 }, // 炭素（ダイヤモンド）
//     { number: 7, symbol: 'N', price: 0.0001 },    // 窒素
//     { number: 8, symbol: 'O', price: 0.0001 },    // 酸素
//     { number: 9, symbol: 'F', price: 190 },       // フッ素
//     { number: 10, symbol: 'Ne', price: 0.30 },    // ネオン
//     { number: 11, symbol: 'Na', price: 0.15 },    // ナトリウム
//     { number: 12, symbol: 'Mg', price: 0.02 },    // マグネシウム
//     { number: 13, symbol: 'Al', price: 0.0018 },  // アルミニウム
//     { number: 14, symbol: 'Si', price: 0.0006 },  // ケイ素
//     { number: 15, symbol: 'P', price: 0.002 },    // リン
//     { number: 16, symbol: 'S', price: 0.0005 },   // 硫黄
//     { number: 17, symbol: 'Cl', price: 0.10 },    // 塩素
//     { number: 18, symbol: 'Ar', price: 0.05 },    // アルゴン
//     { number: 19, symbol: 'K', price: 0.75 },     // カリウム
//     { number: 20, symbol: 'Ca', price: 0.02 },    // カルシウム
//     { number: 22, symbol: 'Ti', price: 6 },       // チタン
//     { number: 24, symbol: 'Cr', price: 0.20 },    // クロム
//     { number: 25, symbol: 'Mn', price: 0.15 },    // マンガン
//     { number: 26, symbol: 'Fe', price: 0.0005 },  // 鉄
//     { number: 28, symbol: 'Ni', price: 0.006 },   // ニッケル
//     { number: 29, symbol: 'Cu', price: 0.009 },   // 銅
//     { number: 30, symbol: 'Zn', price: 0.003 },   // 亜鉛
//     { number: 47, symbol: 'Ag', price: 0.80 },    // 銀
//     { number: 50, symbol: 'Sn', price: 0.018 },   // スズ
//     { number: 53, symbol: 'I', price: 0.25 },     // ヨウ素
//     { number: 74, symbol: 'W', price: 0.02 },     // タングステン
//     { number: 78, symbol: 'Pt', price: 35 },      // 白金
//     { number: 79, symbol: 'Au', price: 60 },      // 金
//     { number: 80, symbol: 'Hg', price: 0.85 },    // 水銀
//     { number: 82, symbol: 'Pb', price: 0.002 },   // 鉛
//     { number: 92, symbol: 'U', price: 0.10 },     // ウラン
//     { number: 94, symbol: 'Pu', price: 4000 },    // プルトニウム
//     { number: 118, symbol: 'Og', price: 1000000 } // オガネソン（架空の高値）
// ];

// アクションカードの定義を修正
const actionCards = [
    '中性子線照射', 'α崩壊', '核融合', '核分裂', 
    '元素ガチャ', '元素ガチャ', // 元素ガチャを2回追加
    '科研費獲得'
];

// プレイヤーの手札と場
let playerHand = [];
let playerField = [{ number: 1, symbol: 'H', price: 1 }]; // 初期は水素

// 研究費
let researchFunding = 100;

// 選択中の元素カードのインデックス
let selectedElementIndices = [];

// 現在使用中のアクションカードのインデックス
let currentActionCardIndex = null;

// 難易度設定
let currentDifficulty = 'hard'; // デフォルトはハードモード

// 難易度に応じた初期研究費を設定
const INITIAL_FUNDING = {
    easy: 10000,
    normal: 1000,
    hard: 100
};

// 難易度設定関数を修正
function setDifficulty(difficulty) {
    currentDifficulty = difficulty;
    // 難易度選択画面を非表示に
    document.getElementById('difficulty-select').style.display = 'none';
    // ゲームボードとリセットボタンを表示
    document.getElementById('game-board').style.display = 'block';
    document.getElementById('reset-container').style.display = 'block';
    resetGame();
}

// 初期手札を5枚引く
for (let i = 0; i < 5; i++) {
    drawActionCard();
}

// ゲームボードを更新
updateGameBoard();

// リセットボタンのイベントリスナー
document.getElementById('reset-button').addEventListener('click', () => {
    resetGame();
});

// アクションカード購入ボタンのイベントリスナー
document.getElementById('buy-action-card').addEventListener('click', () => {
    buyActionCard();
});

// アクションカードを引く関数を修正
function drawActionCard() {
    if (playerHand.length >= 5) {
        showNotification('手札が上限（5枚）に達しています。', 'error');
        return false;
    }

    // 各アクションカードの所持数をカウント
    const cardCounts = {};
    playerHand.forEach(card => {
        cardCounts[card] = (cardCounts[card] || 0) + 1;
    });

    // 3枚未満のカードのみを抽選対象にする
    const availableCards = actionCards.filter(card => 
        !cardCounts[card] || cardCounts[card] < 3
    );

    if (availableCards.length === 0) {
        showNotification('これ以上獲得可能なカードがありません。', 'error');
        return false;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const card = availableCards[randomIndex];
    playerHand.push(card);
    return true;
}

// ゲームボードを更新する関数
function updateGameBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    // 元素価格リストの表示（折りたたみ可能）
    const priceListContainer = document.createElement('div');
    priceListContainer.className = 'price-list-container';
    
    // 折りたたみボタンの作成
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-price-list';
    toggleButton.innerText = '価格表を表示';
    
    // 価格表本体
    const priceListDiv = document.createElement('div');
    priceListDiv.className = 'price-list';
    priceListDiv.style.display = 'none'; // 初期状態では非表示
    
    const priceTable = document.createElement('div');
    priceTable.className = 'price-table';
    elements.forEach(element => {
        const elementPrice = document.createElement('div');
        elementPrice.className = 'element-price';
        elementPrice.innerHTML = `${element.number}. ${element.symbol}: ¥${element.price}`;
        priceTable.appendChild(elementPrice);
    });
    
    // トグルボタンのクリックイベント
    toggleButton.addEventListener('click', () => {
        const isHidden = priceListDiv.style.display === 'none';
        priceListDiv.style.display = isHidden ? 'block' : 'none';
        toggleButton.innerText = isHidden ? '価格表を隠す' : '価格表を表示';
    });
    
    priceListDiv.appendChild(priceTable);
    priceListContainer.appendChild(toggleButton);
    priceListContainer.appendChild(priceListDiv);
    gameBoard.appendChild(priceListContainer);

    // 研究費の表示を更新
    document.getElementById('research-funding').innerText = `研究費: ${researchFunding}`;

    // 場の元素カードを表示
    const fieldDiv = document.createElement('div');
    fieldDiv.innerText = '場の元素:';
    playerField.forEach((element, index) => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'card';
        elementDiv.innerHTML = `${element.symbol} (原子番号: ${element.number})<br>価格: ${element.price}`;
        if (selectedElementIndices.includes(index)) {
            elementDiv.classList.add('selected');
        }
        elementDiv.addEventListener('click', () => {
            selectElementCard(index, elementDiv);
        });
        // 売却ボタンを追加
        const sellButton = document.createElement('button');
        sellButton.innerText = '売却';
        sellButton.addEventListener('click', (e) => {
            e.stopPropagation(); // クリックイベントのバブリングを防止
            sellElement(index);
        });
        elementDiv.appendChild(sellButton);

        fieldDiv.appendChild(elementDiv);
    });
    gameBoard.appendChild(fieldDiv);

    // 手札のアクションカードを表示
    const handDiv = document.getElementById('hand');
    handDiv.innerHTML = '手札:';
    
    playerHand.forEach((card, index) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';
        
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerText = card;
        
        if (currentActionCardIndex === index) {
            cardDiv.classList.add('selected');
        }
        
        cardDiv.addEventListener('click', () => {
            selectActionCard(index);
        });
        
        // 処分ボタンを追加
        const discardButton = document.createElement('button');
        discardButton.className = 'discard-button';
        discardButton.innerText = '処分';
        discardButton.addEventListener('click', (e) => {
            e.stopPropagation();
            discardActionCard(index);
        });
        
        cardContainer.appendChild(cardDiv);
        cardContainer.appendChild(discardButton);
        handDiv.appendChild(cardContainer);
    });

    // 敗北条件のチェック
    checkDefeatCondition();
}

// アクションカードを選択する関数
function selectActionCard(index) {
    if (currentActionCardIndex === index) {
        // 選択解除
        currentActionCardIndex = null;
        selectedElementIndices = [];
    } else {
        currentActionCardIndex = index;
        selectedElementIndices = [];
    }

    const cardName = playerHand[currentActionCardIndex];
    const requiredSelections = getRequiredSelections(cardName);

    // 元素カードの選択が不要な場合、即座にアクションを実行
    if (requiredSelections === 0) {
        playActionCard();
    }

    updateGameBoard();
}

// 元素カードを選択する関数
function selectElementCard(index, elementDiv) {
    if (currentActionCardIndex === null) {
        alert('先にアクションカードを選択してください。');
        return;
    }

    const cardName = playerHand[currentActionCardIndex];
    const requiredSelections = getRequiredSelections(cardName);

    if (selectedElementIndices.includes(index)) {
        // 選択解除
        selectedElementIndices = selectedElementIndices.filter(i => i !== index);
    } else {
        if (selectedElementIndices.length >= requiredSelections) {
            alert(`このアクションでは${requiredSelections}枚の元素カードを選択する必要があります。`);
            return;
        }
        selectedElementIndices.push(index);
    }

    updateGameBoard();

    // 必要な数の元素カードが選択された場合、アクションを実行
    if (selectedElementIndices.length === requiredSelections) {
        playActionCard();
    }
}

// アクションカードの使用条件を取得する関数
function getRequiredSelections(cardName) {
    switch (cardName) {
        case '中性子線照射':
        case 'α崩壊':
        case '核分裂':
            return 1;
        case '核融合':
            return 2;
        default:
            return 0;
    }
}

// アクションカードを使用する関数
function playActionCard() {
    const card = playerHand[currentActionCardIndex];

    switch (card) {
        case '中性子線照射':
            neutronIrradiation(selectedElementIndices[0]);
            break;
        case 'α崩壊':
            alphaDecay(selectedElementIndices[0]);
            break;
        case '核融合':
            nuclearFusion(selectedElementIndices[0], selectedElementIndices[1]);
            break;
        case '核分裂':
            nuclearFission(selectedElementIndices[0]);
            break;
        case '元素ガチャ':
            elementGacha();
            break;
        case '科研費獲得':
            grantFunding();
            break;
        default:
            alert('未知のアクションカードです。');
            return;
    }

    // 使用したアクションカードを手札から削除
    playerHand.splice(currentActionCardIndex, 1);
    currentActionCardIndex = null;
    selectedElementIndices = [];
    updateGameBoard();
    checkWinCondition();
}

// アクションカードの効果実装
function neutronIrradiation(index) {
    let element = playerField[index];
    element.number += 1;
    element.symbol = getElementSymbol(element.number);
    element.price = getElementPrice(element.number);
    if (!element.symbol) {
        alert('未知の元素が生成されました。ゲームから除外されます。');
        playerField.splice(index, 1);
    }
}

function alphaDecay(index) {
    let element = playerField[index];
    element.number -= 2;
    if (element.number < 1) {
        showNotification('元素が消滅しました。', 'error');
        playerField.splice(index, 1);
    } else {
        element.symbol = getElementSymbol(element.number);
        element.price = getElementPrice(element.number);
    }
}

function nuclearFusion(index1, index2) {
    const element1 = playerField[index1];
    const element2 = playerField[index2];
    const newAtomicNumber = element1.number + element2.number;
    const newSymbol = getElementSymbol(newAtomicNumber);
    const newPrice = getElementPrice(newAtomicNumber);

    if (!newSymbol) {
        showNotification('核融合に失敗しました。元素が不安定です。', 'error');
    } else {
        playerField.push({ number: newAtomicNumber, symbol: newSymbol, price: newPrice });
    }
    // 元の元素カードを削除
    removeElementsFromField([index1, index2]);
}

function nuclearFission(index) {
    const element = playerField[index];
    const combinations = getFissionCombinations(element.number);
    if (combinations.length === 0) {
        showNotification('核分裂できる組み合わせがありません。', 'error');
        return;
    }
    const randomIndex = Math.floor(Math.random() * combinations.length);
    const [num1, num2] = combinations[randomIndex];
    const symbol1 = getElementSymbol(num1);
    const symbol2 = getElementSymbol(num2);
    const price1 = getElementPrice(num1);
    const price2 = getElementPrice(num2);

    playerField.push({ number: num1, symbol: symbol1, price: price1 });
    playerField.push({ number: num2, symbol: symbol2, price: price2 });
    // 元の元素カードを削除
    playerField.splice(index, 1);
}

function elementGacha() {
    const randomAtomicNumber = Math.floor(Math.random() * 26) + 1; // 1から26まで
    const symbol = getElementSymbol(randomAtomicNumber);
    const price = getElementPrice(randomAtomicNumber);
    playerField.push({ number: randomAtomicNumber, symbol: symbol, price: price });
}

function grantFunding() {
    const fundingAmount = 250; // 科研費獲得で得られる研究費
    researchFunding += fundingAmount;
    showNotification(`研究費を${fundingAmount}獲得しました。`);
}

// 通知を表示する関数
function showNotification(message, type = 'success') {
    const banner = document.getElementById('notification-banner');
    banner.textContent = message;
    banner.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    banner.style.display = 'block';
    
    // 2秒後に通知を消す
    setTimeout(() => {
        banner.style.display = 'none';
    }, 2000);
}

// 元素を売却する関数
function sellElement(index) {
    const element = playerField[index];
    researchFunding += element.price;
    playerField.splice(index, index + 1);
    showNotification(`研究費 ${element.price} を獲得しました！`);
    updateGameBoard();
}

// アクションカードを購入する関数
function buyActionCard() {
    const actionCardCost = 50;
    if (playerHand.length >= 5) {
        showNotification('手札が上限（5枚）に達しています。', 'error');
        return;
    }
    if (researchFunding >= actionCardCost) {
        researchFunding -= actionCardCost;
        drawActionCard();
        updateGameBoard();
    } else {
        showNotification('研究費が不足しています。', 'error');
    }
}

// ヘルパー関数
function getElementSymbol(atomicNumber) {
    const element = elements.find(el => el.number === atomicNumber);
    return element ? element.symbol : null;
}

function getElementPrice(atomicNumber) {
    const element = elements.find(el => el.number === atomicNumber);
    return element ? element.price : null;
}

function getFissionCombinations(number) {
    const combinations = [];
    for (let i = 1; i <= number / 2; i++) {
        const j = number - i;
        if (i > 0 && j > 0 && getElementSymbol(i) && getElementSymbol(j)) {
            combinations.push([i, j]);
        }
    }
    return combinations;
}

function removeElementsFromField(indices) {
    // インデックスの大きい方から削除する
    indices.sort((a, b) => b - a);
    indices.forEach(index => {
        playerField.splice(index, 1);
    });
}

function checkWinCondition() {
    if (playerField.some(el => el.number === 118)) {
        alert('おめでとうございます！オガネソンを生成しました！ゲームクリアです。');
        showResetButton();
    }
}

function checkDefeatCondition() {
    if (playerField.length === 0 && researchFunding < 50 && playerHand.length === 0) {
        alert('元素カード、アクションカードがなく、研究費も不足しています。ゲームオーバーです。');
        showResetButton();
    }
}

function showResetButton() {
    document.getElementById('reset-button').style.display = 'inline-block';
}

function resetGame() {
    // リセット時の確認（ただし初回のゲーム開始時は確認しない）
    if (playerHand.length > 0 || playerField.length > 1 || researchFunding !== INITIAL_FUNDING[currentDifficulty]) {
        if (!confirm('本当にリセットしますか？\nゲームの進行状況がすべて失われます。')) {
            return;
        }
    }

    playerHand = [];
    playerField = [{ number: 1, symbol: 'H', price: 10 }];
    researchFunding = INITIAL_FUNDING[currentDifficulty];
    currentActionCardIndex = null;
    selectedElementIndices = [];

    // 手札を5枚引く
    for (let i = 0; i < 5; i++) {
        drawActionCard();
    }

    updateGameBoard();
}

// アクションカード処分関数を追加
function discardActionCard(index) {
    const discardCost = 100;
    if (researchFunding < discardCost) {
        showNotification('研究費が不足しています。', 'error');
        return;
    }

    researchFunding -= discardCost;
    playerHand.splice(index, 1);
    showNotification(`アクションカードを${discardCost}で処分しました。`);
    
    if (currentActionCardIndex === index) {
        currentActionCardIndex = null;
        selectedElementIndices = [];
    } else if (currentActionCardIndex > index) {
        currentActionCardIndex--;
    }
    
    updateGameBoard();
}

// CSSも追加
const styles = `
.card-container {
    display: inline-block;
    margin: 5px;
}

.discard-button {
    display: block;
    margin-top: 5px;
    padding: 2px 5px;
    font-size: 0.8em;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.discard-button:hover {
    background-color: #cc0000;
}

#difficulty-select button {
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
}

#difficulty-select button:hover {
    background-color: #e0e0e0;
}
`;

// スタイルを適用
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);