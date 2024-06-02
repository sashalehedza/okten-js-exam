// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    console.log(users)

    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add('wrapper')
    document.body.appendChild(wrapperDiv)

    const containerDiv = document.createElement('div')
    containerDiv.classList.add('container')
    wrapperDiv.append(containerDiv)

    const pageTitle = document.createElement('h1')
    pageTitle.classList.add('page-title')
    pageTitle.textContent = 'Users'
    containerDiv.append(pageTitle)

    const usersDiv = document.createElement('div')
    usersDiv.classList.add('users')
    containerDiv.append(usersDiv)
    users.forEach((user) => {
      const userDiv = document.createElement('div')
      userDiv.classList.add('user')
      const id = document.createElement('p')
      id.textContent = `ID: ${user.id}`
      const name = document.createElement('p')
      name.textContent = `Name: ${user.name}`
      const link = document.createElement('a')
      link.textContent = 'user-details'
      link.href = `user-details.html?id=${user.id}`
      userDiv.append(id, name, link)
      usersDiv.append(userDiv)
    })
  })
  .catch((error) => console.log(error))
