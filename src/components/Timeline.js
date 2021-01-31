import React from 'react'
import TweetCard from './TweetCard'

const Timeline = ({data}) => {
  return (
    <div className = 'timeline'>
    {data.map((item, i) => (
      <TweetCard key = {i} url = {item.url} tweet = {item.tweet} />
    ))}
    </div>
  )
}

export default Timeline
  