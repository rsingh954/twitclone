import React, {useState} from 'react'

let articles = []

let url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=af1c5c6c956d4b4daa059c664a8e742b';

async function getNews() {
  const response = await fetch(url, {mode: 'cors'})
  const news = await response.json()
  return news
  // const newsArticle = await news.articles
  // console.log(newsArticle)
  // articles.push({newsArticle})
  // return articles
}
const News = () => {
  const [ art, setArt ]= useState([]);
  console.log(getNews())
// getNews().then(article => {
//    setArt(article)
//   }).then((stuff) => {
//     console.log(stuff)
//   })

  return (
    <div  className = 'news'>
    {art.length >= 3  ? art.map((news, i) => (
    <div key = {i} id = {i}>
      {news.newsArticle[i].title}
    </div>
  )): ""}
    </div>
  )
}

export default News
