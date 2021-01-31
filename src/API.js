const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=af1c5c6c956d4b4daa059c664a8e742b';

let articles = []
const getNews = async () => {
    const response = await fetch(url, {mode: 'cors'})
    if(response.status === 429){
      alert(response.status + ` - Too many requests, try again later`)
    }
    const news = await response.json();
    return {news}
  }

  getNews().then((val) =>{articles.push(val.news.articles)})

  export default {getNews, articles}