const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
        {
        name: "Salvador Dali",
        username: "dalightful",
        location: "Barcelona, Spain",
        avatar: "images/avatar-salvadordali.jpg",
        post: "images/post-salvadordali.jpg",
        comment: "any1 no a gud moroccan barber??",
        likes: 89
    }
]

let postArea = document.getElementById("post-area")

for (let i = 0; i<posts.length; i++) {
    postArea.innerHTML += 
    `
    <div class="post">
        <div class="user">
            <div class="user-icon">
                <img src=${posts[i].avatar} alt="Vangogh icon" class="user-icon-img">
            </div>
            <div class="user-info">
                <h2 class="user-info-name">${posts[i].name}</h2>
                <h3 class="user-info-location">${posts[i].location}</h3>
            </div>
        </div>
        <div class="post">
            <img src=${posts[i].post} alt="Vangoghs post" class="post-content">
        </div>
        <div class="interactive-row-container">
            <div class="interactive-row">
                <div class="interactive-row-btns">
                    <button class="btn">
                        <img src="images/icon-heart.png" id="heart-btn-img" class="btn-img">
                    </button>
                    <button class="btn">
                        <img src="images/icon-comment.png" id="comment-btn-img" class="btn-img">
                    </button>
                    <button class="btn">
                        <img src="images/icon-dm.png" id="dm-btn-img" class="btn-img">
                    </button>
                </div>
            </div>
            <div class="likes">
                <h2 class="likes-amount">${posts[i].likes} likes</h2>
            </div>
            <div class="comments">
                <p><span>${posts[i].username} </span>${posts[i].comment}</p>
            </div>
        </div>
    </div>
    `
}