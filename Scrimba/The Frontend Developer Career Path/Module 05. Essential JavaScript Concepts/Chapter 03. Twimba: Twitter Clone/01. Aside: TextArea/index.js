const talkBtn = document.getElementById('talk-btn');
const chatInput = document.getElementById('chat-input');

talkBtn.addEventListener('click', () => {
    console.log(chatInput.value);
    chatInput.value = '';
});

