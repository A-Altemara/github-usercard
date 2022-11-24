import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/a-altemara
*/
axios.get("https://api.github.com/users/a-altemara")
  .then(res => {
    const profileCard = cardMaker({ name: res.data.name, avatar_url: res.data.avatar_url, bio: res.data.bio })
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
function cardMaker({ name, avatar_url, bio }) {
  const card = document.createElement('div')
  const userName = document.createElement('h2')
  const userPic = document.createElement('img')
  const biography = document.createElement('p')

  card.classList.add('card')
  userName.classList.add('name')


  card.appendChild(userName)
  card.appendChild(userPic)
  card.appendChild(biography)

  userName.textContent = name
  userPic.src = avatar_url
  biography.textContent = bio

  const allCards = document.querySelector('.cards')
  allCards.appendChild(card)

}


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['christopherjbaker', 'ren-curry', 'IFoundAPlaceToTypeIn', 'rachelkwaynick', 'Jahteo'];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function fancyCardMaker(cardObj) {
  const fancyCard = document.createElement('div')
  fancyCard.classList.add('card')
  const fancyPic = document.createElement('img')
  const fancyCardInfo = document.createElement('div')
  fancyCardInfo.classList.add('card-info')
  const fancyHeader = document.createElement('h3')
  fancyHeader.classList.add('name')
  const fancyUserName = document.createElement('p')
  fancyUserName.classList.add('username')
  const fancyLocation = document.createElement('p')
  const fancyProfile = document.createElement('a')
  const numFollowers = document.createElement('p')
  const numFollowing = document.createElement('p')
  const FancyBio = document.createElement('p')

  fancyCard.appendChild(fancyPic)
  fancyCard.appendChild(fancyCardInfo)
  fancyCardInfo.appendChild(fancyHeader)
  fancyCardInfo.appendChild(fancyUserName)
  fancyCardInfo.appendChild(fancyLocation)
  fancyCardInfo.appendChild(fancyProfile)
  fancyCardInfo.appendChild(numFollowers)
  fancyCardInfo.appendChild(numFollowing)
  fancyCardInfo.appendChild(FancyBio)

  

const allFancyCards = document.querySelector('.cards')
  allFancyCards.appendChild(fancyCard)

}

fancyCardMaker(airiel)
const airiel = {
  "login": "A-Altemara",
  "id": 107080531,
  "node_id": "U_kgDOBmHrUw",
  "avatar_url": "https://avatars.githubusercontent.com/u/107080531?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/A-Altemara",
  "html_url": "https://github.com/A-Altemara",
  "followers_url": "https://api.github.com/users/A-Altemara/followers",
  "following_url": "https://api.github.com/users/A-Altemara/following{/other_user}",
  "gists_url": "https://api.github.com/users/A-Altemara/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/A-Altemara/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/A-Altemara/subscriptions",
  "organizations_url": "https://api.github.com/users/A-Altemara/orgs",
  "repos_url": "https://api.github.com/users/A-Altemara/repos",
  "events_url": "https://api.github.com/users/A-Altemara/events{/privacy}",
  "received_events_url": "https://api.github.com/users/A-Altemara/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Airiel",
  "company": null,
  "blog": "www.linkedin.com/in/airiel-altemara",
  "location": "Reno, Nv",
  "email": null,
  "hireable": null,
  "bio": "Budding Developer, attending Bloom Institute of Technology, Ready to explore as much as I can.",
  "twitter_username": null,
  "public_repos": 27,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-06-07T21:44:14Z",
  "updated_at": "2022-11-01T21:41:46Z"
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
