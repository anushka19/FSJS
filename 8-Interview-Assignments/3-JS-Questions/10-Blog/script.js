 // Fetch posts from the API
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
 .then(posts => {
   displayPosts(posts);
 });

// Function to create a new blog post
function createPost() {
 var titleInput = document.getElementById("title");
 var contentInput = document.getElementById("content");

 var title = titleInput.value;
 var content = contentInput.value;

 // Create a new post object
 var post = {
   title: title,
   body: content,
   userId: 1
 };

 // Send a POST request to the API to create the post
 fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(post)
 })
 .then(response => response.json())
 .then(createdPost => {
   // Append the created post to the post list
   var postList = document.getElementById("post-list");
   var listItem = createPostListItem(createdPost);
   postList.appendChild(listItem);
 })
 .catch(error => console.error('Error creating post:', error));

 // Clear the input fields
 titleInput.value = "";
 contentInput.value = "";
}

// Function to delete a blog post
function deletePost(postId) {
 // Send a DELETE request to the API
 fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
   method: 'DELETE'
 })
 .then(response => {
   // Remove the deleted post from the UI
   var listItem = document.getElementById(`post-${postId}`);
   listItem.parentNode.removeChild(listItem);
 })
 .catch(error => console.error('Error deleting post:', error));
}

// Function to display the blog posts
function displayPosts(posts) {
 var postList = document.getElementById("post-list");

 // Loop through the posts array and create list items for each post
 for (var i = 0; i < posts.length; i++) {
   var post = posts[i];
   var listItem = createPostListItem(post);
   postList.appendChild(listItem);
 }
}

// Function to create a list item for a blog post
function createPostListItem(post) {
 var listItem = document.createElement("li");
 listItem.setAttribute("id", `post-${post.id}`);

 var titleElement = document.createElement("h3");
 titleElement.textContent = post.title;

 var contentElement = document.createElement("p");
 contentElement.textContent = post.body;


 var deleteButton = document.createElement("button");
 deleteButton.textContent = "Delete";
 deleteButton.addEventListener("click", function() {
   deletePost(post.id);
 });

 listItem.appendChild(titleElement);
 listItem.appendChild(contentElement);
 listItem.appendChild(deleteButton);

 return listItem;
}