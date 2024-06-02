const userId = new URLSearchParams(window.location.search).get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then((response) => response.json())
  .then((user) => {
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add('wrapper')
    document.body.appendChild(wrapperDiv)

    const containerDiv = document.createElement('div')
    containerDiv.classList.add('container')
    wrapperDiv.append(containerDiv)

    const pageTitle = document.createElement('h1')
    pageTitle.classList.add('page-title')
    pageTitle.textContent = 'User Details'
    containerDiv.append(pageTitle)

    const userInfoDiv = document.createElement('div')
    userInfoDiv.classList.add('user-info')

    const id = document.createElement('p')
    id.textContent = `ID: ${user.id}`

    const name = document.createElement('p')
    name.textContent = `Name: ${user.name}`

    const username = document.createElement('p')
    username.textContent = `Username: ${user.username}`

    const email = document.createElement('p')
    email.textContent = `Email: ${user.email}`

    const addressDiv = document.createElement('div')

    const street = document.createElement('p')
    street.textContent = `Street: ${user.address.street}`

    const suite = document.createElement('p')
    suite.textContent = `Suite: ${user.address.suite}`

    const city = document.createElement('p')
    city.textContent = `City: ${user.address.city}`

    const zipcode = document.createElement('p')
    zipcode.textContent = `Zipcode: ${user.address.zipcode}`

    const geo = document.createElement('p')
    geo.textContent = `Geo: ${user.address.geo.lat}, ${user.address.geo.lng}`

    addressDiv.append(street, suite, city, zipcode, geo)

    const phone = document.createElement('p')
    phone.textContent = `Phone: ${user.phone}`

    const website = document.createElement('p')
    website.textContent = `Website: ${user.website}`

    const companyDiv = document.createElement('div')

    const companyName = document.createElement('p')
    companyName.textContent = `Company: ${user.company.name}`

    const companyCatchPhrase = document.createElement('p')
    companyCatchPhrase.textContent = `CatchPhrase: ${user.company.catchPhrase}`

    const companyBs = document.createElement('p')
    companyBs.textContent = `Bs: ${user.company.bs}`

    companyDiv.append(companyName, companyCatchPhrase, companyBs)

    userInfoDiv.append(
      id,
      name,
      username,
      email,
      addressDiv,
      phone,
      website,
      companyDiv
    )
    containerDiv.append(userInfoDiv)

    const button = document.createElement('button')
    button.classList.add('posts-info-btn')
    button.textContent = 'User posts'
    containerDiv.append(button)

    let postsVisible = false

    button.addEventListener('click', () => {
      if (!postsVisible) {
        postsVisible = true
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
          .then((response) => response.json())
          .then((posts) => {
            if (posts.length > 0) {
              const postsDiv = document.createElement('div')
              postsDiv.classList.add('posts')
              containerDiv.append(postsDiv)
              button.textContent = 'Hide posts'
              posts.forEach((post) => {
                const postBlock = document.createElement('div')
                postBlock.classList.add('post')
                const title = document.createElement('p')
                title.textContent = post.title
                postBlock.append(title)
                const visitButton = document.createElement('button')
                visitButton.textContent = 'Visit post'
                visitButton.classList.add('posts-info')
                visitButton.addEventListener('click', () => {
                  window.location.href = `post-details.html?id=${post.id}`
                })
                postBlock.append(visitButton)
                postsDiv.append(postBlock)
              })
            }
          })
      } else {
        postsVisible = false
        const postsDiv = document.querySelector('.posts')
        if (postsDiv) {
          postsDiv.remove()
        }
        button.textContent = 'User posts'
      }
    })
  })
  .catch((error) => console.log(error))
