// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
const wrapperDiv = document.createElement('div')
wrapperDiv.classList.add('wrapper')
document.body.appendChild(wrapperDiv)

const containerDiv = document.createElement('div')
containerDiv.classList.add('container')
wrapperDiv.append(containerDiv)

const postId = new URLSearchParams(window.location.search).get('id')
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => {
    const postDiv = document.createElement('div')
    postDiv.classList.add('post')
    const userId = document.createElement('p')
    userId.textContent = `UserID: ${post.userId}`
    const id = document.createElement('p')
    id.textContent = `ID: ${post.id}`
    const title = document.createElement('p')
    title.textContent = `Title: ${post.title}`
    const body = document.createElement('p')
    body.textContent = `Body: ${post.body}`
    postDiv.append(userId, id, title, body)
    containerDiv.append(postDiv)
  })
  .catch((error) => console.log(error))

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  .then((response) => response.json())
  .then((comments) => {
    const commentsDiv = document.createElement('div')
    commentsDiv.classList.add('comments')
    containerDiv.append(commentsDiv)
    comments.forEach((comment) => {
      const commentDiv = document.createElement('div')
      commentDiv.classList.add('comment')
      const name = document.createElement('p')
      name.textContent = comment.name
      const email = document.createElement('p')
      email.textContent = comment.email
      const body = document.createElement('p')
      body.textContent = comment.body
      commentDiv.append(name, email, body)
      commentsDiv.append(commentDiv)
    })
  })
  .catch((error) => console.log(error))
