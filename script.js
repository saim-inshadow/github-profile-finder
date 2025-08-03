let input = document.querySelector("input");
let search = document.querySelector("button");

   
search.addEventListener("click", function(){
     let url = `https://api.github.com/users/${input.value}`;
    fetch(url).then(raw=>raw.json).then((data)=>{console.log(data);
    })
    
})
