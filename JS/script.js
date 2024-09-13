document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // デフォルトのリンク動作を防ぐ

            const targetId = this.getAttribute('href').substring(1); // hrefから#を除去
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});


// 各カード要素を取得
const cards = document.querySelectorAll('.product-item card');

// モーダル関連の要素を取得
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

// カードをクリックしたときのイベントリスナーを設定
cards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;

        // モーダルの内容を更新
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        // モーダルを表示
        modal.style.display = 'block';
    });
});

// モーダルの閉じるボタンをクリックしたときの処理
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// フォームバリデーションと送信メッセージ
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
        formMessage.textContent = "全ての項目を入力してください。";
    } else {
        formMessage.textContent = "メッセージを送信しました！";
        formMessage.style.color = "green";
    }
});
