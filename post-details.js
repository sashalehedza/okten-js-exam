// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

const postId = new URLSearchParams(window.location.search).get('id')
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => {
    const block = document.createElement('div')
    block.classList.add('post')
    const id = document.createElement('p')
    id.textContent = post.id
    const title = document.createElement('p')
    title.textContent = post.title
    const body = document.createElement('p')
    body.textContent = post.body
    block.append(id, title, body)
    document.body.appendChild(block)
  })
  .catch((error) => console.log(error))

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  .then((response) => response.json())
  .then((comments) => {
    comments.forEach((comment) => {
      const commentBlock = document.createElement('div')
      const name = document.createElement('p')
      name.textContent = comment.name
      const email = document.createElement('p')
      email.textContent = comment.email
      const body = document.createElement('p')
      body.textContent = comment.body
      commentBlock.append(name, email, body)
      document.body.appendChild(commentBlock)
    })
  })
  .catch((error) => console.log(error))
