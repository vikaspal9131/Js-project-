const apiKey = "ec527aa22c4f4342b6a6b2fabdba8453" ;

// const mainBlog = document.getElementsByClassName(".blog-container");
const blogContainer = document.getElementsByClassName(" blog-container");


async function randomFetchNews(){
  try{
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.articles;
  }
  catch(error){
    console.error("Error fetching the data " ,error)
    return [] 
  }
}


function displayBlogs(articles){
  blogContainer.innerHTML = ""
  articles.forEach((article) => {
    const blogCard = document.createElement("div")
    blogCard.classList.add("blog-card")
    const img = document.createElement("img")
    img.src = article.urlToImage 
    img.alt = article.title 
    const title = document.createElement("h1")
    title.textContent = article.title
    const description = document.createElement("p")
    description.textContent = article.description ;

    blogCard.appendChild(img)
    blogCard.appendChild(title)
    blogCard.appendChild(description)
    blogContainer.appendChild(blogCard)
  }) ;    
}

(async () =>{

  try{
    const articles = await randomFetchNews();
    displayBlogs(articles);
  }
  catch(error){
    console.error("Error fetching the data " , error);
  }

})();