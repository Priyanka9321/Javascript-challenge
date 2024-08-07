document.addEventListener('DOMContentLoaded', () => {
    let socket;

    function setupWebSocket() {
        socket = new WebSocket('ws://localhost:8080');

        socket.addEventListener('open', () => {
            console.log('Connected to WebSocket server');
        });

        socket.addEventListener('message', (event) => {
            console.log(`Received message: ${event.data}`);
            displayMessage(event.data);
        });

        socket.addEventListener('close', () => {
            console.log('WebSocket connection closed');
            setTimeout(setupWebSocket, 5000); // Reconnect after 5 seconds
        });

        socket.addEventListener('error', (error) => {
            console.error('WebSocket error:', error.message || 'Unknown error');
            setTimeout(setupWebSocket, 5000); // Reconnect after 5 seconds
        });
    }

    setupWebSocket(); // Initial setup

    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const usernameInput = document.getElementById('username-input');

    if (!messageInput || !sendButton || !usernameInput) {
        console.error('One or more elements not found');
        return;
    }

    sendButton.addEventListener('click', () => {
        const username = usernameInput.value;
        const message = messageInput.value;
        if (username && message) {
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(`${username}: ${message}`);
                messageInput.value = '';
            } else {
                console.error('WebSocket is not open. Cannot send message.');
            }
        } else {
            console.error('Username or message is empty.');
        }
    });

    function displayMessage(message) {
        const messages = document.getElementById('messages');
        if (messages) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messageElement.classList.add('user-message'); // Add class for styling
            messages.appendChild(messageElement);

            // Scroll to the bottom of the messages div
            messages.scrollTop = messages.scrollHeight;
        } else {
            console.error('Messages element not found');
        }
    }
});
