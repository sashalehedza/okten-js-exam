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
    const pageTitle = document.createElement('h1')
    pageTitle.classList.add('page-title')
    pageTitle.textContent = 'Post details'
    containerDiv.append(pageTitle)

    const postDiv = document.createElement('div')
    postDiv.classList.add('post')
    containerDiv.append(postDiv)

    const userId = document.createElement('p')
    userId.textContent = `UserID: ${post.userId}`
    const id = document.createElement('p')
    id.textContent = `ID: ${post.id}`
    const title = document.createElement('p')
    title.textContent = `Title: ${post.title}`
    const body = document.createElement('p')
    body.textContent = `Body: ${post.body}`
    postDiv.append(userId, id, title, body)

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        const pageTitleComments = document.createElement('h1')
        pageTitleComments.classList.add('page-title')
        pageTitleComments.textContent = 'Comments'
        containerDiv.append(pageTitleComments)

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
  })
  .catch((error) => console.log(error))

// const wrapperDiv = document.createElement('div')
// wrapperDiv.classList.add('wrapper')
// document.body.appendChild(wrapperDiv)

// const containerDiv = document.createElement('div')
// containerDiv.classList.add('container')
// wrapperDiv.append(containerDiv)

// const postId = new URLSearchParams(window.location.search).get('id')

// Promise.all([
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
// ])
//   .then((responses) =>
//     Promise.all(responses.map((response) => response.json()))
//   )
//   .then(([post, comments]) => {
//     const pageTitle = document.createElement('h1')
//     pageTitle.classList.add('page-title')
//     pageTitle.textContent = 'Post details'
//     containerDiv.append(pageTitle)

//     const postDiv = document.createElement('div')
//     postDiv.classList.add('post')
//     containerDiv.append(postDiv)

//     const pageTitleComments = document.createElement('h1')
//     pageTitleComments.classList.add('page-title')
//     pageTitleComments.textContent = 'Comments'
//     containerDiv.append(pageTitleComments)

//     const commentsDiv = document.createElement('div')
//     commentsDiv.classList.add('comments')
//     containerDiv.append(commentsDiv)

//     const userId = document.createElement('p')
//     userId.textContent = `UserID: ${post.userId}`
//     const id = document.createElement('p')
//     id.textContent = `ID: ${post.id}`
//     const title = document.createElement('p')
//     title.textContent = `Title: ${post.title}`
//     const body = document.createElement('p')
//     body.textContent = `Body: ${post.body}`
//     postDiv.append(userId, id, title, body)

//     comments.forEach((comment) => {
//       const commentDiv = document.createElement('div')
//       commentDiv.classList.add('comment')
//       const name = document.createElement('p')
//       name.textContent = comment.name
//       const email = document.createElement('p')
//       email.textContent = comment.email
//       const body = document.createElement('p')
//       body.textContent = comment.body
//       commentDiv.append(name, email, body)
//       commentsDiv.append(commentDiv)
//     })
//   })
//   .catch((error) => console.log(error))
