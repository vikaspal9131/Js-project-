const apikey = "ec527aa22c4f4342b6a6b2fabdba8453" ;

const mainBlog = document.getElementsByClassName(".blog-container");


async function rendomFetchNews(){
  try{
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apikey}`
    const response = await fetch(apiUrl)


  }
  catch(error){
    console.error("Error fetching the data " ,error)
    return []
  }
}