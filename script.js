let input = document.querySelector("input");
let search = document.querySelector("button");

let profile = document.querySelector("#profile")
search.addEventListener("click", function(){
    let url = `https://api.github.com/users/${input.value.trim()}`
    fetch(url).then(raw=>raw.json())
    .then((data)=>{
        if(data.status !=404){      
            profile.innerHTML = `
             <div id="pfp">
                    <img src="${data.avatar_url}" alt="">
                </div>
                <div id="user-data">
                    <h2 id="name">${data.name}</h2>
                    <p id="username">@${data.login}</p>
                    <p id="bio">TG: ${data.bio}</p>
                    <div id="extra-information">
                        <p id="repos"><span class="bold">Public Repos: </span>${data.public_repos}</p>
                        <p id="followers"><span class="bold">Followers: </span>${data.followers}</p>
                        <p id="following"><span class="bold">Following: </span>${data.following}</p>
                        <p id="location"><span class="bold">Location: </span>${data.location}</p>
                        <p id="company"><span class="bold">Company: </span>${data.company}</p>
                        <p id="blog"><span class="bold">Blog: </span>${data.blog}</p>
                    </div>
                </div>
            `
        }
        else{
            profile.innerHTML =` <h1 id="not-found">
            User Not Found !
           </h1>`
        }
        
    });
    
})