document.addEventListener("DOMContentLoaded", function() {
  const postButton = document.querySelector('.post-button');
  const postText = document.querySelector('.post-text');
  const fileUpload = document.querySelector('.file-upload');
  const newsFeed = document.querySelector('.news-feed');
   
  
  postButton.addEventListener('click', function() {
    newsFeed.style.opacity = 1;
  })
  // Function to create a new post
  function createPost(text, file) {
    // Create post container
    const postContainer = document.createElement('div'); 
    postContainer.classList.add('post');

    // Create post content
    const postContent = document.createElement('p');
    postContent.classList.add('post-content');
    postContent.textContent = text;
    postContainer.appendChild(postContent);


    // Check if file is uploaded and create image element if available
    if (file) {
      const postImage = document.createElement('img');
      postImage.src = URL.createObjectURL(file);
      postImage.alt = "Uploaded Image";
      postImage.classList.add('post-image');
      postContainer.appendChild(postImage);
    }

    // Create reaction section
    const reactionSection = document.createElement('div');
    reactionSection.classList.add('reaction-section');

    // Create like button
    const likeButton = document.createElement('button');
    likeButton.classList.add('reaction-button', 'like-button');
    likeButton.innerHTML = '<i class="far fa-thumbs-up"></i> Like';
    const likeCount = document.createElement('span');
    likeCount.classList.add('reaction-count', 'like-count');
    likeCount.textContent = '0';
    likeButton.appendChild(likeCount);
    reactionSection.appendChild(likeButton);

    // Create comment button
    const commentButton = document.createElement('button');
    commentButton.classList.add('reaction-button', 'comment-button');
    commentButton.innerHTML = '<i class="far fa-comment"></i> Comment';
    reactionSection.appendChild(commentButton);

    // Create share button
    const shareButton = document.createElement('button');
    shareButton.classList.add('reaction-button', 'share-button');
    shareButton.innerHTML = '<i class="fas fa-share"></i> Share';
    const shareCount = document.createElement('span');
    shareCount.classList.add('reaction-count', 'share-count');
    shareCount.textContent = '0';
    shareButton.appendChild(shareCount);
    reactionSection.appendChild(shareButton);

    postContainer.appendChild(reactionSection);

    return postContainer;
  }

  // Post button event listener
  postButton.addEventListener('click', function() {
    const text = postText.value;
    const file = fileUpload.files[0];

    // Create a new post
    const postElement = createPost(text, file);

    // Append the new post to the news feed
    newsFeed.appendChild(postElement);

    // Reset input fields
    postText.value = '';
    fileUpload.value = '';
  });

  // Like button event listener using event delegation
  newsFeed.addEventListener('click', function(event) {
    if (event.target.classList.contains('like-button')) {
      const likeCount = event.target.querySelector('.like-count');
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  });
});
