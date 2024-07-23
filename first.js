const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

const data ={
    "login": "SavaniShubham",
    "id": 166712173,
    "node_id": "U_kgDOCe_TbQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/166712173?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SavaniShubham",
    "html_url": "https://github.com/SavaniShubham",
    "followers_url": "https://api.github.com/users/SavaniShubham/followers",
    "following_url": "https://api.github.com/users/SavaniShubham/following{/other_user}",
    "gists_url": "https://api.github.com/users/SavaniShubham/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SavaniShubham/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SavaniShubham/subscriptions",
    "organizations_url": "https://api.github.com/users/SavaniShubham/orgs",
    "repos_url": "https://api.github.com/users/SavaniShubham/repos",
    "events_url": "https://api.github.com/users/SavaniShubham/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SavaniShubham/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shubham Savani",
    "company": null,
    "blog": "",
    "location": "Surat,Gujarat ",
    "email": null,
    "hireable": null,
    "bio": "I am student of computer science and design and  I always ready to learning new things ",
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-04-11T11:07:04Z",
    "updated_at": "2024-07-13T09:13:49Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new' ,(req, res)=>
{
    res.send('<h1>this is html</h1>')
})

app.get('/repo' , (req , res)=>
{
    res.json(data);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})