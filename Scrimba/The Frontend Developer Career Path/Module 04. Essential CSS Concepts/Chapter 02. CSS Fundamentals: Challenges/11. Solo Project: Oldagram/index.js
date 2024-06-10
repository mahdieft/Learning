const posts = [
    {
        name: 'Vincent van Gogh',
        username: 'vincey1853',
        location: 'Zundert, Netherlands',
        avatar: 'images/avatar-vangogh.jpg',
        post: 'images/post-vangogh.jpg',
        comment: 'just took a few mushrooms lol',
        likes: 21,
    },
    {
        name: 'Gustave Courbet',
        username: 'gus1819',
        location: 'Ornans, France',
        avatar: 'images/avatar-courbet.jpg',
        post: 'images/post-courbet.jpg',
        comment: 'i\'m feelin a bit stressed tbh',
        likes: 4,
    },
    {
        name: 'Joseph Ducreux',
        username: 'jd1735',
        location: 'Paris, France',
        avatar: 'images/avatar-ducreux.jpg',
        post: 'images/post-ducreux.jpg',
        comment: 'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
        likes: 152,
    },
];

let postsString = '';
// for (let i = 0; i < posts.length; i++) {
posts.forEach((post) => {
    postsString += `
    <section>
        <div class="banner">
            <div>
                <img class="avatar" src="${post.avatar}" alt="${post.name} Portfolio">
            </div>
            <div>
                <p class="title">${post.name}</p>
                <p class="address">${post.location}</p>
            </div>
        </div>
        <img class="post-image" src="${post.post}" alt="post">
        <div class="post-footer">
            <img class="icon" src="images/icon-heart.png" alt="Heart Icon">
            <img class="icon" src="images/icon-comment.png" alt="Comment Icon">
            <img class="icon" src="images/icon-dm.png" alt="DM Icon">
            <p class="like-count">${post.likes} likes</p>
            <p class="post-message"><span class="username">${post.username}</span> ${post.comment}</p>
        </div>
    </section>
    `;
});

document.getElementsByTagName('main')[0].innerHTML = postsString;
