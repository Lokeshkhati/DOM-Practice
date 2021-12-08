var url = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";


fetch('https://ubahthebuilder.tech/posts/1')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});