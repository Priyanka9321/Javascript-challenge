// User Authentication
document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication (no backend, just a demo)
    if (username && password) {
        sessionStorage.setItem('loggedInUser', username);
        displayDashboard();
    } else {
        alert('Please enter a valid username and password.');
    }
};

// Display Dashboard
function displayDashboard() {
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        loadPosts();
    }
}

// Logout Function
document.getElementById('logout-btn').onclick = function() {
    sessionStorage.removeItem('loggedInUser');
    location.reload();
};

// Post Creation
let posts = [];

document.getElementById('post-form').onsubmit = function(event) {
    event.preventDefault();
    
    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').value;
    const username = sessionStorage.getItem('loggedInUser');
    const timestamp = new Date().toLocaleString();
    
    const post = {
        id: Date.now(),
        username,
        text: postText,
        image: postImage,
        timestamp,
        likes: 0,
        comments: []
    };
    
    posts.push(post);
    displayPosts();
    document.getElementById('post-form').reset();
};

// Display Posts
function displayPosts() {
    const feedElement = document.getElementById('feed');
    feedElement.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = `post ${post.username === sessionStorage.getItem('loggedInUser') ? 'logged-in-user-post' : ''}`;
        postElement.innerHTML = `
            <div class="post-header">
                <h3>${post.username}</h3>
                <span class="timestamp">${post.timestamp}</span>
            </div>
            <div class="post-body">
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            </div>
            <div class="post-actions">
                <button onclick="likePost(${post.id})">Like</button>
                <span class="like-count">${post.likes} Likes</span>
                <button onclick="commentPost(${post.id})">Comment</button>
                <span class="comment-count">${post.comments.length} Comments</span>
            </div>
        `;
        feedElement.appendChild(postElement);
    });
}

// Like Post
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes++;
    displayPosts();
}

// Comment Post
function commentPost(postId) {
    const comment = prompt("Enter your comment:");
    if (comment) {
        const post = posts.find(p => p.id === postId);
        post.comments.push(comment);
        displayPosts();
    }
}

// Load Posts on Page Load
function loadPosts() {
    if (sessionStorage.getItem('loggedInUser')) {
        displayPosts();
    }
}

// Initialize
if (sessionStorage.getItem('loggedInUser')) {
    displayDashboard();
}
