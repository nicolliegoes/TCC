const socket = io();

const messages = document.getElementById('messages');
const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

socket.on('chat message', function(msg) {
    const item = document.createElement('div');
    item.textContent = msg;
    item.classList.add('message', 'other');
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});

socket.on('my message', function(msg) {
    const item = document.createElement('div');
    item.textContent = msg;
    item.classList.add('message', 'user');
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});
