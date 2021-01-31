import React from 'react'
import NewsCard from './NewsCard'

const News = ({art}) => {
  return (
    <div  className = 'news'>
      {art ? art.map((item, i) => (
        <NewsCard item = {item} key = {i} />
      )): "Loading"}
    </div>
  )
}



export default News
