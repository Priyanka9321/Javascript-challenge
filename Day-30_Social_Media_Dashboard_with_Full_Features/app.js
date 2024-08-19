// User Authentication and Registration
document.getElementById('register-form').onsubmit = function(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username && email && password) {
        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful! You can now log in.');
    } else {
        alert('Please fill in all fields.');
    }
};

document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && username === storedUser.username && password === storedUser.password) {
        sessionStorage.setItem('loggedInUser', username);
        displayDashboard();
    } else {
        alert('Invalid username or password.');
    }
};

// Display Dashboard
function displayDashboard() {
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        loadUserProfile();
        loadPosts();
    }
}

// Load User Profile
function loadUserProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('profile-username').textContent = user.username;
    document.getElementById('profile-email').textContent = user.email;
    document.getElementById('profile-pic').src = user.profilePic || 'default-profile.png';
}

// Edit Profile
document.getElementById('edit-profile-btn').onclick = function() {
    document.getElementById('edit-profile-form').classList.toggle('hidden');
};

document.getElementById('edit-profile-form').onsubmit = function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('edit-username').value;
    const newEmail = document.getElementById('edit-email').value;
    const newProfilePic = document.getElementById('edit-profile-pic').files[0];

    const user = JSON.parse(localStorage.getItem('user'));
    if (newUsername) user.username = newUsername;
    if (newEmail) user.email = newEmail;
    if (newProfilePic) user.profilePic = URL.createObjectURL(newProfilePic);

    localStorage.setItem('user', JSON.stringify(user));
    loadUserProfile();
    alert('Profile updated successfully!');
};

// Handle Logout
document.getElementById('logout-btn').onclick = function() {
    sessionStorage.removeItem('loggedInUser');
    location.reload();
};

// Create and Display Posts
const posts = [];

document.getElementById('post-form').onsubmit = function(event) {
    event.preventDefault();
    
    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').value;
    const loggedInUser = sessionStorage.getItem('loggedInUser');

    if (postText) {
        const newPost = {
            id: Date.now(),
            username: loggedInUser,
            text: postText,
            image: postImage || '',
            likes: 0,
            comments: []
        };
        posts.push(newPost);
        displayPost(newPost);
        document.getElementById('post-form').reset();
    } else {
        alert('Post cannot be empty.');
    }
};

function displayPost(post) {
    const feed = document.getElementById('feed');
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
        <div class="post-header">
            <h3>${post.username}</h3>
            <span class="timestamp">${new Date(post.id).toLocaleString()}</span>
        </div>
        <div class="post-body">
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
        </div>
        <div class="post-actions">
            <button onclick="likePost(${post.id})">Like</button>
            <span class="like-count">${post.likes} Likes</span>
            <button onclick="toggleComments(${post.id})">Comment</button>
            <span class="comment-count">${post.comments.length} Comments</span>
            <div class="comments hidden" id="comments-${post.id}">
                <input type="text" placeholder="Add a comment" onkeydown="addComment(event, ${post.id})">
                <div class="comment-list">
                    ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
                </div>
            </div>
        </div>
    `;
    feed.prepend(postElement);
}

// Like Post
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes++;
    updatePost(postId);
}

// Add Comment
function addComment(event, postId) {
    if (event.key === 'Enter') {
        const commentText = event.target.value;
        const post = posts.find(p => p.id === postId);
        post.comments.push(commentText);
        event.target.value = '';
        updatePost(postId);
    }
}

// Update Post Display
function updatePost(postId) {
    const post = posts.find(p => p.id === postId);
    const postElement = document.querySelector(`.post[data-id="${postId}"]`);
    if (postElement) {
        postElement.querySelector('.like-count').textContent = `${post.likes} Likes`;
        postElement.querySelector('.comment-count').textContent = `${post.comments.length} Comments`;
        const commentList = postElement.querySelector('.comment-list');
        commentList.innerHTML = post.comments.map(comment => `<p>${comment}</p>`).join('');
    }
}

// Toggle Comments Section
function toggleComments(postId) {
    const commentSection = document.getElementById(`comments-${postId}`);
    commentSection.classList.toggle('hidden');
}

// Load Posts
function loadPosts() {
    posts.forEach(post => displayPost(post));
}

// Initialize
window.onload = function() {
    if (sessionStorage.getItem('loggedInUser')) {
        displayDashboard();
    }
};
